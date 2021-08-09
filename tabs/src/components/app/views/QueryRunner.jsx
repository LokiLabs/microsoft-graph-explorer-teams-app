import React, { useState } from "react";
import { graphVersions, GRAPH_URL } from "../../TabConstants";
import { makeGraphCall } from "../../utils/useGraph";
import PropTypes from 'prop-types';
import { QueryInput } from "./runner/QueryInput";
import { Request } from "./runner/Request";
import { Response } from "./runner/Response";
import { useRangeKnob } from '@fluentui/docs-components';

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

    const [graphVersion, setGraphVersion] = useState(graphVersions.beta);
    const [responseBody, setResponseBody] = useState("{}");
    const [responseHeaders, setResponseHeaders] = useState([]);
    const [requestHeaders, setRequestHeaders] = useState([]);
    const [responseState, setReponseState] = useState(-1);
    const [isLoading, setIsLoading] = useState(false);

    const [height] = useRangeKnob({
        name: 'height',
        initialValue: '120px',
        min: '20px',
        max: '300px',
        step: 10,
    });

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
                requestBody={requestBody}
                setRequestBody={setRequestBody}
                requestHeaders={requestHeaders}
                setRequestHeaders={setRequestHeaders}
                height={height}
            />
            <Response
                responseBody={responseBody}
                responseHeaders={responseHeaders}
                responseState={responseState}
                height={height}
            />
        </>
    );
}