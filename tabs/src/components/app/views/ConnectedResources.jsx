import React, { useState } from 'react';
import { Button, List, Alert, ListItem, Popup } from '@fluentui/react-northstar';
import { ClipboardCopiedToIcon } from '@fluentui/react-icons-northstar';
import copy from "copy-to-clipboard";
import * as microsoftTeams from "@microsoft/teams-js";
import { useTranslation } from "react-i18next";
import PropTypes from 'prop-types';


ProcessTeamsContext.propTypes = {
    setIsConnectedToResource: PropTypes.func
};


export function ProcessTeamsContext(props) {
    //Get the context of where the tab is currently
    const [resourceList, setResourceList] = useState([]);
    const [title, setTitle] = useState(" ");
    const setIsConnectedToResource = props.setIsConnectedToResource;
    const { t } = useTranslation();

    microsoftTeams.getContext(function (context) {

        //Check if this is a teams channel
        if (context.channelId && context.channelId.length !== 0) {
            if (isAlreadyPresent(resourceList, context.channelId)) {
                return;
            }
            const teamId = <CreateItemWithCopy id={context.groupId} header={t("Connected Resources.Team ID") + ": " + context.groupId} />;
            const channelId = <CreateItemWithCopy id={context.channelId} header={t("Connected Resources.Channel ID") + ": " + context.channelId} />;
            setTitle(context.teamName + " > " + context.channelName);
            setResourceList([teamId, channelId]);
        }
        //Check if it is a chat
        else if (context.chatId && context.chatId.length !== 0) {
            if (isAlreadyPresent(resourceList, context.chatId)) {
                return;
            }
            setTitle(t("Connected Resources.Chat"));
            let chatId = <CreateItemWithCopy id={context.chatId} header={t("Connected Resources.Chat ID") + ": " + context.chatId} />;
            chatId.header = t("Connected Resources.Chat ID") + ": " + context.chatId;
            setResourceList([chatId]);
        }
        else if (title === " ") {
            setTitle("");
            setResourceList([]);
        }
    });
    
    setIsConnectedToResource(resourceList.length !== 0 && title);

    return (
        <div className="connected-resource">
            {resourceList.length !== 0 && <ListItem className="title" header={title} />}
            {resourceList.length !== 0 && <List items={resourceList} />}
            {resourceList.length === 0 && !title && <Alert danger content={t("Connected Resources.No Connected Resources")} />}
        </div>
    );
}

const isAlreadyPresent = (list, id) => list.some((i) => i?.props.header?.includes(id));
function copyText(id, setPopUp) {
    copy(id);
    setPopUp(true);
    //make the pop up disappear after a period of time
    setTimeout(
        () =>
            setPopUp(false),
        1000,
    );
}

export function CreateItemWithCopy(props) {
    const [popUp, setPopUp] = useState(false);
    // Translations
    const { t } = useTranslation();
    let endMedia = (
        <Popup trigger={
            <Button
                aria-label="copy"
                icon={<ClipboardCopiedToIcon className="button-icon" />}
                size="medium"
                text
                iconOnly
                title="Copy"
                onClick={() => copyText(props.id, setPopUp)}
            />}
            open={popUp}
            position='before'
            align='center'
            on="context"
            content={t("Connected Resources.copied")} />
    );
    let item = <ListItem header={props.header} endMedia={endMedia} />;
    //Add the copy icon 
    return item;
}
