import React, { useState, useEffect } from "react";
import { CLIENT_APP_ID, RSC_API_URL } from './TabConstants';
import { useTeamsFx } from "../sample/teams/useTeamsFx";
import { Table } from '@fluentui/react-northstar';
import { useTranslation } from 'react-i18next';

export function RSCList() {
    const [RSCList, setRSCList] = useState([]);
    const { context } = useTeamsFx();
    const { t } = useTranslation();

    const items = [
        t('RSC Headers.Permissions'),
        t('RSC Headers.Descriptions')
    ];

    useEffect(() => {
        async function getRSCList(context) {
            if (context?.groupId) {
                let teamResponse = await fetch(RSC_API_URL + "beta/teams/" + context?.groupId + "/permissionGrants").then(response => response.json());
                const teamRSCs = teamResponse.value;

                if (teamRSCs) {
                    let filteredRSCs = [];
                    for (let i = 0; i < teamRSCs.length; i++) {
                        if (teamRSCs[i].clientAppId === CLIENT_APP_ID) {
                            filteredRSCs.push(teamRSCs[i].permission);
                        }
                    }
                    setRSCList(filteredRSCs);
                }

            } else if (context?.chatId) {
                let chatResponse = await fetch(RSC_API_URL + "beta/chats/" + context?.chatId + "/permissionGrants").then(response => response.json());
                const chatRSCs = chatResponse.value;

                if (chatRSCs) {
                    let filteredRSCs = [];
                    for (let i = 0; i < chatRSCs.length; i++) {
                        if (chatRSCs[i].clientAppId === CLIENT_APP_ID) {
                            filteredRSCs.push(chatRSCs[i].permission);
                        }
                    }
                    setRSCList(filteredRSCs);
                }
            }
        }
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

    return (
        <Table variables={{
            cellContentOverflow: 'none',
        }}
            header={{ items }}
            rows={RSCRows}
            aria-label="RSC Table" />
    );
}
