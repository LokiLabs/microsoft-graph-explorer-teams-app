import React, { useState, useEffect } from "react";
import { graphVersions, GRAPH_URL } from "../../TabConstants";
import { Button } from '@fluentui/react-northstar';
import { gridCellWithFocusableElementBehavior, } from '@fluentui/accessibility';
import { TrashCanIcon } from '@fluentui/react-icons-northstar';
import { makeGraphCall } from "../../utils/useGraph";
import PropTypes from 'prop-types';
import { QueryInput } from "./runner/QueryInput";
import { Request } from "./runner/Request";
import { Response } from "./runner/Response";

QueryRunner.propTypes = {
    query: PropTypes.string,
    setQuery: PropTypes.func,
    requestType: PropTypes.string,
    setRequestType: PropTypes.func,
    requestBody: PropTypes.string,
    setRequestBody: PropTypes.func,
};

export function QueryRunner(props) {

    const query = props.query;
    const setQuery = props.setQuery;
    const requestType = props.requestType;
    const setRequestType = props.setRequestType;
    const requestBody = props.requestBody;
    const setRequestBody = props.setRequestBody;

    const addRequestHeader = () => {
        if (!requestHeaders.map(r => r.key).includes(userAddedHeader)) {
            const headerCopy = (' ' + userAddedHeader).slice(1);
            const valueCopy = (' ' + userAddedValue).slice(1);
            setUserAddedHeader("");
            setUserAddedValue("");
            const deleteButton = () => <Button
                tabIndex={-1}
                icon={<TrashCanIcon className="button-icon" />}
                circular
                text
                iconOnly
                aria-label="delete"
                title="Delete request header"
            />;
            const newHeaderValue = {
                key: headerCopy,
                items: [headerCopy, valueCopy, {
                    content: deleteButton(),
                    truncateContent: true,
                    accessibility: gridCellWithFocusableElementBehavior,
                    onClick: e => {
                        deleteRow(headerCopy);
                        e.stopPropagation();
                    },
                }],
            };
            setRequestHeaders([...requestHeaders, newHeaderValue]);
        }
    };

    const [userAddedHeader, setUserAddedHeader] = useState("");
    const [userAddedValue, setUserAddedValue] = useState("");
    const [graphVersion, setGraphVersion] = useState(graphVersions.beta);
    const [responseBody, setResponseBody] = useState("{}");
    const [responseHeaders, setResponseHeaders] = useState([]);
    const [responseComponentIndex, setResponseComponentIndex] = useState(0);
    const [requestComponentIndex, setRequestComponentIndex] = useState(0);
    const [requestHeaders, setRequestHeaders] = useState([]);
    const [responseState, setReponseState] = useState(-1);
    const [isLoading, setIsLoading] = useState(false);

    async function callGraph() {
        setIsLoading(true);
        const queryParameters = query.substring(GRAPH_URL.length + graphVersion.length, query.length);
        const graphResponse = await makeGraphCall(requestType, requestHeaders, queryParameters, graphVersion, requestBody);

        let graphResponseHeaders = [];
        for (const p of graphResponse.headers.entries()) {
            graphResponseHeaders.push({
                key: p[0],
                items: [p[0], p[1]]
            });
        }
        setResponseHeaders(graphResponseHeaders);
        setReponseState(graphResponse.status + " " + graphResponse.statusText);
        if (graphResponse.ok) {
            const text = await graphResponse.json();
            setResponseBody(JSON.stringify(text, undefined, 4));
        } else {
            const text = await graphResponse.text();
            setResponseBody(text);
        }
        setIsLoading(false);
    }

    const deleteRow = (header) => {
        setRequestHeaders(requestHeaders => requestHeaders.filter(r => r.key !== header));
    };

    useEffect(() => {
        setQuery(GRAPH_URL + graphVersion + query.substring(GRAPH_URL.length + graphVersion.length, query.length));
    }, [graphVersion, query]);

    return (
        <>
            <QueryInput
                requestType={requestType}
                setRequestType={setRequestType}
                graphVersion={graphVersion}
                setGraphVersion={setGraphVersion}
                query={query}
                setQuery={setQuery}
                callGraph={callGraph}
                isLoading={isLoading}
            />
            <Request
                userAddedValue={userAddedValue}
                setUserAddedValue={setUserAddedValue}
                userAddedHeader={userAddedHeader}
                setUserAddedHeader={setUserAddedHeader}
                requestBody={requestBody}
                setRequestBody={setRequestBody}
                addRequestHeader={addRequestHeader}
                requestComponentIndex={requestComponentIndex}
                setRequestComponentIndex={setRequestComponentIndex}
                requestHeaders={requestHeaders}
            />
            <Response
                responseBody={responseBody}
                responseHeaders={responseHeaders}
                responseComponentIndex={responseComponentIndex}
                setResponseComponentIndex={setResponseComponentIndex}
                responseState={responseState}
            />
        </>
    );
}
