import React, { useState, useEffect } from "react";
import { Table, TableCell, OpenOutsideIcon, Button } from '@fluentui/react-northstar';
import { GRAPH_URL, SAMPLE_QUERIES_URL, requestTypes } from "../../TabConstants";
import * as microsoftTeams from "@microsoft/teams-js";
import PropTypes from 'prop-types';

FetchSamples.propTypes = {
    setQuery: PropTypes.func,
    setRequestType: PropTypes.func,
    setRequestBody: PropTypes.func,
};

export function FetchSamples(props) {
    const setQuery = props.setQuery;
    const setRequestType = props.setRequestType;
    const setRequestBody = props.setRequestBody;

    const [samples, setSamples] = useState([]);
    useEffect(() => {
        async function getSamplesList() {
            microsoftTeams.getContext(async function (context) {

                const headers = {
                    'Content-Type': 'application/json'
                };

                const response = await fetch(SAMPLE_QUERIES_URL, headers);
                if (response.ok) {
                    const res = await response.json();
                    const teamsAppQueries = res.teamsAppSampleQueries
                        .filter(s => (context?.groupId && s["requestUrl"].includes("teams")) || (context?.chatId && s["requestUrl"].includes("chat")))
                        .map(s => {
                            const query = createTableRow(setQuery, s["requestUrl"].slice(1,), s["method"], setRequestType, s["postBody"], setRequestBody);
                            query.key = s["id"];
                            const label = <TableCell className={"table-method"} content={s["method"]} />;
                            const button = <TableCell className={"table-link"} content={createFillIn(s["docLink"])} />;
                            query.items = [label, s["humanName"], button];
                            return query;
                        });
                    setSamples(teamsAppQueries);
                }
            });
        }
        getSamplesList(samples);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Table rows={samples} aria-label="sample queries" />
    );
}

function createFillIn(url) {
    return {
        content: <Button
            tabIndex={-1}
            icon={<OpenOutsideIcon className="button-icon" />}
            circular
            text
            iconOnly
            aria-label="sample"
            title="Sample Query"
        />,
        onClick: query => {
            window.open(url);
            query.stopPropagation();
        }
    };
}

function createTableRow(setQuery, url, requestType, setRequestType, postBody, setPostBody) {
    return {
        onClick: () => setQueryRunner(setQuery, url, requestType, setRequestType, postBody, setPostBody)
    };
}

function setQueryRunner(setQuery, url, requestType, setRequestType, postBody, setPostBody) {
    setQuery(GRAPH_URL + url);
    setRequestType(requestTypes[requestType]);
    if (postBody) {
        setPostBody(postBody);
    }
    else {
        setPostBody("{}");
    }
}
