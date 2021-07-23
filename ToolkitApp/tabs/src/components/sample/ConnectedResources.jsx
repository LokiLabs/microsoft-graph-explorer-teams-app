import React from 'react';
import { Button } from '@fluentui/react-northstar'
import { ClipboardCopiedToIcon } from '@fluentui/react-icons-northstar'
import * as microsoftTeams from "@microsoft/teams-js"; 
import "./ConnectedResources.css";
import {TEAMS_CHANNEL_ID, CHAT, CHAT_ID} from './TabConstants';

export function processTeamsContext(setResourceList,resourceList,setTitle){
    //Get the context of where the tab is currently
    microsoftTeams.getContext(function(context) {
        
        //Check if this is a teams channel
        if(context.channelId && context.channelId.length !== 0){
            if(isAlreadyPresent(resourceList, context.channelId)){
                return; 
            }
            var channelId = createItemWithCopy(context.channelId);
            channelId.header = TEAMS_CHANNEL_ID + context.channelId;
            setTitle(context.teamName + " > " + context.channelName);
            setResourceList([channelId])
        }
        //Check if it is a chat
        else if(context.chatId && context.chatId.length !== 0){
            if(isAlreadyPresent(resourceList, context.chatId)){
                return; 
            }
            setTitle(CHAT);
            var chatId = createItemWithCopy(context.chatId);
            chatId.header = CHAT_ID + context.chatId;
            setResourceList([chatId]);
        }
        else{
            setTitle("");
            setResourceList([]);
        }
    });
}

function isAlreadyPresent(list, id){
    //if there aren't any contexts
    if(list.length === 0){
        return false;
    }

    //Loop through all the instances 
    for(let i  = 0; i < list.length; i++){
        if (list[i].header && list[i].header.includes(id)){
            return true;
        }
    }
    return false;
}

function copyText(id){
    //Goal is to be able to have the user paste "id" once they try to copy 
    var copyValue = document.createElement('textarea');
    copyValue.value = id;
    document.body.appendChild(copyValue);
    copyValue.select();
    document.execCommand("copy"); 
}

export function createItemWithCopy(id){
    var item = {};

    //Add the copy icon 
    item.endMedia = (
        <Button icon={<ClipboardCopiedToIcon  className = "copyIcon"  />} size="medium"  text iconOnly title="Copy" onClick={() => copyText(id)}/>
    )
    return item;
}