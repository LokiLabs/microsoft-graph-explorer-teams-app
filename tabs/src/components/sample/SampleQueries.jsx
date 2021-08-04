import React, { useState, useEffect } from "react";
import { Table, OpenOutsideIcon, Button} from '@fluentui/react-northstar';
import { GRAPH_URL, SAMPLE_QUERIES_URL} from "./TabConstants";
import * as microsoftTeams from "@microsoft/teams-js";
/* eslint-disable react/prop-types */

export function FetchSamples(props){
    const [samples, setSamples] = useState([]);
    useEffect(() => {
        async function getSamplesList(FetchSamples) {
            microsoftTeams.getContext(async function (context) {
                const devxApi = SAMPLE_QUERIES_URL;

                const headers = {
                    'Content-Type': 'application/json'
                };
    
                try {
                        const response = await fetch(devxApi, headers);
                        if (!response.ok) {
                            throw response;
                    }
                    const res = await response.json();
                    var arr = [];
                    for(let i = 0; i < res.teamsAppSampleQueries.length; i++){
                        //filter through all the chats and teams
                        if( (context?.groupId && res.teamsAppSampleQueries[i]["requestUrl"].includes("chat"))||(context?.chatId &&  res.teamsAppSampleQueries[i]["requestUrl"].includes("teams")) ){
                            continue;
                        }
                        var query = {};
                        query.key = res.teamsAppSampleQueries[i]["id"];
                        query.items = [res.teamsAppSampleQueries[i]["method"], res.teamsAppSampleQueries[i]["humanName"], createFillIn(res.teamsAppSampleQueries[i]["requestUrl"], props.setQuery)];
                        arr.push(query);
                    }
                } catch (error) {
                    return error;
                }
                setSamples(arr);
            });
        }
        getSamplesList(samples);
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Table rows = {samples} aria-label="sample queries" />
    );
}

function createFillIn(url, setQuery){
    const sampleButton = () => <Button
        tabIndex={-1}
        icon={<OpenOutsideIcon className="button-icon" />}
        circular
        text
        iconOnly
        aria-label="sample"
        title="Sample Query"
    />;
    var obj = {content: sampleButton(), onClick:e => {
        setQuery(GRAPH_URL + url.slice(1,));
    }};
    return obj;
}


export default FetchSamples;