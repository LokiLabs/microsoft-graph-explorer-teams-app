import React , { useState } from 'react';
import { List, Image, Button } from '@fluentui/react-northstar'
import * as microsoftTeams from "@microsoft/teams-js"; 

export function processTeamsContext(setResourceList,resourceList ){
    var obj = {}
    microsoftTeams.getContext(function(context) {
        console.log(context);
        obj.endMedia = (
            <Button content="Disconnect app" primary onClick={() =>console.log("clicked the button")}
            />
          )
        obj.media = (
            <Image
              src="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/RobertTolbert.jpg"
              avatar
            />
          )
        obj.header = context.entityId;
            obj.content = "Resource ID: " + context.chatId + " Resource Type:  Chat";
        if(isAlreadyPresent(resourceList,obj.content)){
            return; 
        }
        console.log("adding to the resourceList")
        console.log(resourceList)
        if(resourceList.length === 0){
            setResourceList([obj])
        }
        else{
            setResourceList(oldArray => [...oldArray, obj]);
        }
    });

}

function isAlreadyPresent(list, id){
    for (let i = 0; i < list.length; i++){
        if (id === list[i].content){
            return true
        }
    }
    return false
}