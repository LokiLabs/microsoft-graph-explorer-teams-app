import React, { useState, useEffect } from "react";
import { Table, TableCell, OpenOutsideIcon, Button} from '@fluentui/react-northstar';
import { GRAPH_URL, SAMPLE_QUERIES_URL} from "./TabConstants";
import * as microsoftTeams from "@microsoft/teams-js";
import PropTypes from 'prop-types';

FetchSamples.propTypes = {
    query: PropTypes.string,
    setQuery: PropTypes.func
};

export function FetchSamples(props){
    const [samples, setSamples] = useState([]);
    useEffect(() => {
        async function getSamplesList() {
            microsoftTeams.getContext(async function (context) {
                const devxApi = SAMPLE_QUERIES_URL;

                const headers = {
                    'Content-Type': 'application/json'
                };
    
                try {
                        const response = await fetch(devxApi, headers);
                        if (!response.ok) {
                            return;
                    }
                    const res = await response.json();
                    var arr = [];
                    for(let i = 0; i < res.teamsAppSampleQueries.length; i++){

                        //Filter through all the chats and teams such that it matches the context that this app is attached to
                        if( (context?.groupId && res.teamsAppSampleQueries[i]["requestUrl"].includes("chat"))||(context?.chatId &&  res.teamsAppSampleQueries[i]["requestUrl"].includes("teams")) ){
                            continue;
                        }

                        //Each sample query requires a row
                        var query = createTableRow(props.setQuery, res.teamsAppSampleQueries[i]["requestUrl"].slice(1,));
                        query.key = res.teamsAppSampleQueries[i]["id"];
                        var label = <TableCell className = {"table-cell"} content = {res.teamsAppSampleQueries[i]["method"]}/>;
                        var button = <TableCell className = {"table-cell"} content = {createFillIn(res.teamsAppSampleQueries[i]["docLink"])}/>;
                        query.items = [label, res.teamsAppSampleQueries[i]["humanName"], button];
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

function createFillIn(url){
    const sampleButton = () => <Button
        tabIndex={-1}
        icon={<OpenOutsideIcon className="button-icon" />}
        circular
        text
        iconOnly
        aria-label="sample"
        title="Sample Query"
    />;
    //Open a new window for this sample query's documetnation
    var obj = {content: sampleButton(), onClick: query => {
        window.open(url);
        query.stopPropagation();
    }};
    return obj;
}

function createTableRow(setQuery, url){
    return {
        onClick: () => setQuery(GRAPH_URL + url)
    };
}


export default FetchSamples;