import React, { useState, useEffect } from "react";
import { CLIENT_APP_ID, graphVersions, requestTypes } from "../../TabConstants";
import { useTeamsFx } from "../../utils/useTeamsFx";
import { makeGraphCall } from "../../utils/useGraph";
import { Table, Loader, Alert } from '@fluentui/react-northstar';
import { useTranslation } from 'react-i18next';

export function RSCList() {
    const [RSCList, setRSCList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [alert, setAlert] = useState(false);
    const { context } = useTeamsFx();
    const { t } = useTranslation();

    const items = [
        { "className": "header", "content": t('RSC Headers.Permissions') },
        { "className": "header", "content": t('RSC Headers.Descriptions') }
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
                if (!rscResponse.ok) {
                    setAlert(true);
                }
                const rscJson = await rscResponse.json();
                const RSCs = rscJson.value;

                if (RSCs && RSCs.length > 0) {
                    const filteredRSCs = RSCs.filter(rsc => rsc.clientAppId === CLIENT_APP_ID).map(rsc => rsc.permission);

                    const RSCRows = filteredRSCs
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
                    setAlert(false);
                    setRSCList(RSCRows);
                    setIsLoading(false);
                }
                else {
                    setAlert(true);

                }
            }
        };
        getRSCList(context);
    }, [context, t]);

    if (isLoading) {
        return (
            <Loader
                size='medium'
                label={t("RSC.loading")}
            />
        );
    } else {
        return (
            <div>
              {RSCList?.length > 0 && (
                  <>
                      <Table className="table" variables={{
                          cellContentOverflow: 'none',
                      }}
                          header={{ items }}
                          rows={RSCList}
                          aria-label="RSC Table" />
                  </>
              )}
              {alert && (
                  <>
                      <Alert danger content={t('RSC Descriptions.No resource available to grant permissions to')} />
                  </>
              )}
           </div>
        );
    }

}
