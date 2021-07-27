import React, { useState, useEffect } from "react";
import "./RSCList.css";
import { CLIENT_APP_ID, items, RSC_NAME_DESCRIPTION, DEVX_API_URL } from './TabConstants';
import { useTeamsFx } from "../sample/lib/useTeamsFx";
import { Table } from '@fluentui/react-northstar'

export function RSCList() {
    const [RSCList, setRSCList] = useState([]);
    const { context } = useTeamsFx();
    
    useEffect(() => {
        async function getRSCList(context) {
            if (context?.groupId) {
                let teamResponse = await fetch(DEVX_API_URL + "/graphproxy/beta/teams/" + context?.groupId + "/permissionGrants").then(response => response.json());
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
                let chatResponse = await fetch(DEVX_API_URL + "/graphproxy/beta/chats/" + context?.chatId + "/permissionGrants").then(response => response.json());
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
        .map(perm => ({ key: perm, items: [perm, RSC_NAME_DESCRIPTION[perm]], }));

    return (
        <Table header={{ items }} rows={RSCRows} aria-label="RSC Table" />
    );
}
