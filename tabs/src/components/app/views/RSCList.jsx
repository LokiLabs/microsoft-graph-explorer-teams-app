import React, { useState, useEffect } from "react";
import { CLIENT_APP_ID, graphVersions, requestTypes } from "../../TabConstants";
import { useTeamsFx } from "../../utils/useTeamsFx";
import { makeGraphCall } from "../../utils/useGraph";
import { Table, Loader } from '@fluentui/react-northstar';
import { useTranslation } from 'react-i18next';

export function RSCList() {
    const [RSCList, setRSCList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { context } = useTeamsFx();
    const { t } = useTranslation();

    const items = [
        t('RSC Headers.Permissions'),
        t('RSC Headers.Descriptions')
    ];

    useEffect(() => {
        const getRSCList = async (context) => {
            let rscType;
            if (context?.groupId) {
                rscType = "/teams/" + context?.groupId;
            } else if (context?.chatId) {
                rscType = "/chats/" + context?.chatId;
            }

            if (context) {
                const rscResponse = await makeGraphCall(requestTypes.GET, [], rscType + "/permissionGrants", graphVersions.beta);
                const rscJson = await rscResponse.json();
                const RSCs = rscJson.value;

                if (RSCs) {
                    const filteredRSCs = RSCs.filter(rsc => rsc.clientAppId === CLIENT_APP_ID).map(rsc => rsc.permission);
                    setRSCList(filteredRSCs);
                    setIsLoading(false);
                }
            }
        };
        getRSCList(context);
    }, [context]);

    const RSCRows = RSCList
        .map(perm => ({
            key: perm, items: [
                {
                    content: perm,
                    truncateContent: true
                },
                {
                    content: t('RSC Descriptions.' + perm),
                    truncateContent: true,
                }
            ],
        }));

    if (isLoading) {
        return (
            <Loader
                size='medium'
                label={t("RSC.loading")}
            />
        );
    } else {
        return (
            <Table variables={{
                cellContentOverflow: 'none',
            }}
                header={{ items }}
                rows={RSCRows}
                aria-label="RSC Table"
            />
        );
    }

}
