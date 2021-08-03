import React, { useState } from 'react';
import { Button, List, Alert, ListItem } from '@fluentui/react-northstar';
import { ClipboardCopiedToIcon } from '@fluentui/react-icons-northstar';
import copy from "copy-to-clipboard";
import * as microsoftTeams from "@microsoft/teams-js";
import { TEAMS_CHANNEL_ID, CHAT, CHAT_ID, NO_CONNECTED_RESOURCES } from './TabConstants';

export function ProcessTeamsContext() {
    //Get the context of where the tab is currently
    const [resourceList, setResourceList] = useState([]);
    const [title, setTitle] = useState(" ");
    microsoftTeams.getContext(function (context) {

        //Check if this is a teams channel
        if (context.channelId && context.channelId.length !== 0) {
            if (isAlreadyPresent(resourceList, context.channelId)) {
                return;
            }
            var channelId = createItemWithCopy(context.channelId);
            channelId.header = TEAMS_CHANNEL_ID + context.channelId;
            setTitle(context.teamName + " > " + context.channelName);
            setResourceList([channelId]);
        }
        //Check if it is a chat
        else if (context.chatId && context.chatId.length !== 0) {
            if (isAlreadyPresent(resourceList, context.chatId)) {
                return;
            }
            setTitle(CHAT);
            var chatId = createItemWithCopy(context.chatId);
            chatId.header = CHAT_ID + context.chatId;
            setResourceList([chatId]);
        }
        else {
            setTitle("");
            setResourceList([]);
        }
    });
    return (
        <div className="connected-resource">
            {resourceList.length !== 0 && <ListItem className="title" header={title} />}
            {resourceList.length !== 0 && <List selectable defaultSelectedIndex={0} items={resourceList} />}
            {resourceList.length === 0 && !title && <Alert danger content={NO_CONNECTED_RESOURCES} />}
        </div>
    );
}

const isAlreadyPresent = (list, id) => list.some((i) => i.header?.includes(id));

function copyText(id) {
    copy(id);
}

export function createItemWithCopy(id) {
    var item = {};

    //Add the copy icon 
    item.endMedia = (
        <Button aria-label="copy" icon={<ClipboardCopiedToIcon className="button-icon" />} size="medium" text iconOnly title="Copy" onClick={() => copyText(id)} />
    );
    return item;
}
