import React, { useState, useEffect } from "react";
import { requestTypes, graphVersions, GRAPH_URL, RSC_API_URL } from "./TabConstants";
import { Button, Input, Flex, Menu, TextArea, Table, tabListBehavior, Dropdown, Alert } from '@fluentui/react-northstar';
import { useRangeKnob } from '@fluentui/docs-components';
import { gridCellWithFocusableElementBehavior, } from '@fluentui/accessibility';
import { TrashCanIcon } from '@fluentui/react-icons-northstar';
import enUS from './GE.json';

export function QueryRunner() {
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
    const [requestType, setRequestType] = useState(requestTypes.GET);
    const [graphVersion, setGraphVersion] = useState(graphVersions.beta);
    const [query, setQuery] = useState(GRAPH_URL);
    const [responseBody, setResponseBody] = useState("{}");
    const [requestBody, setRequestBody] = useState("{}");
    const [responseHeaders, setResponseHeaders] = useState([]);
    const [responseComponentIndex, setResponseComponentIndex] = useState(0);
    const [requestComponentIndex, setRequestComponentIndex] = useState(0);
    const [requestHeaders, setRequestHeaders] = useState([]);
    const [responseState, setReponseState] = useState(-1);

    const requestItems = [
        enUS["request body"],
        enUS["request headers"]
    ];

    const responseItems = [
        enUS["response body"],
        enUS["response headers"]
    ];

    const requestTableHeaders = {
        items: ['Key', 'Value', ''],
    };

    const responseTableHeaders = {
        items: ['Key', 'Value'],
    };

    async function callGraph() {
        const queryParameters = query.substring(GRAPH_URL.length + graphVersion.length, query.length);
        const url = RSC_API_URL + graphVersion + queryParameters;
        const cleanedHeaders = {};
        for (const header of requestHeaders) {
            cleanedHeaders[header.items[0]] = header.items[1];
        }

        let options = {
            method: requestType,
            headers: cleanedHeaders,
        };
        if (requestType !== requestTypes.GET) {
            options.body = requestBody;
        }
        const graphResponse = await fetch(url, options);
        let graphResponseHeaders = [];
        for (const p of graphResponse.headers.entries()) {
            graphResponseHeaders.push({
                key: p[0],
                items: [p[0], p[1]]
            });
        }
        setResponseHeaders(graphResponseHeaders);
        setReponseState(graphResponse.status + " " + graphResponse.statusText);
        const text = await graphResponse.json();
        setResponseBody(JSON.stringify(text, undefined, 4));
    }

    const deleteRow = (header) => {
        setRequestHeaders(requestHeaders => requestHeaders.filter(r => r.key !== header));
    };

    useEffect(() => {
        setQuery(GRAPH_URL + graphVersion + query.substring(GRAPH_URL.length + graphVersion.length, query.length));
    }, [graphVersion, query]);

    const [height] = useRangeKnob({
        name: 'height',
        initialValue: '120px',
        min: '20px',
        max: '300px',
        step: 10,
    });

    const requestComponents = [
        <TextArea key="requestBody" fluid={true} inverted={true} resize="both" value={requestBody} onChange={(evt) => setRequestBody(evt.target.value)}
            variables={{
                height,
            }}
        />,
        <>
            <Table header={requestTableHeaders} rows={requestHeaders} aria-label="request headers" />
            <Flex gap="gap.small" className="pad-vertical">
                <Flex.Item>
                    <Input
                        fluid={true}
                        inverted={true}
                        id="key"
                        value={userAddedHeader}
                        showSuccessIndicator={false}
                        required
                        onChange={(evt) => setUserAddedHeader(evt.target.value)}
                        type="text" />
                </Flex.Item>
                <Flex.Item>
                    <Input
                        fluid={true}
                        inverted={true}
                        id="value"
                        value={userAddedValue}
                        showSuccessIndicator={false}
                        required
                        onChange={(evt) => setUserAddedValue(evt.target.value)}
                        type="text" />
                </Flex.Item>
                <Flex.Item>
                    <Button content="Add" onClick={() => addRequestHeader()} primary />
                </Flex.Item>
            </Flex>
        </>
    ];

    const responseComponents = [
        <TextArea key="responseBody" fluid={true} inverted={true} resize="both" value={responseBody}
            variables={{
                height,
            }}
        />,
        <Table key="responseHeaders" compact header={responseTableHeaders} rows={responseHeaders} aria-label="response headers" />
    ];

    return (
        <>
            <Flex gap="gap.small">
                <Dropdown
                    inverted={true}
                    fluid={true}
                    items={Object.keys(requestTypes).map(key => requestTypes[key])}
                    id="requestType"
                    placeholder={requestType}
                    onChange={(evt, selected) => setRequestType(Object.keys(requestTypes).map(key => requestTypes[key])[selected.highlightedIndex])}
                    className="dropdown"
                />
                <Dropdown
                    inverted={true}
                    fluid={true}
                    items={Object.keys(graphVersions).map(key => graphVersions[key])}
                    id="graphVersion"
                    placeholder={graphVersion}
                    onChange={(evt, selected) => setGraphVersion(Object.keys(graphVersions).map(key => graphVersions[key])[selected.highlightedIndex])}
                    className="dropdown"
                />

                <Flex.Item grow>
                    <Flex gap="gap.small">
                        <Flex.Item grow>
                            <Input fluid inverted value={query} showSuccessIndicator={false} required onChange={(evt) => setQuery(evt.target.value)} type="text" />
                        </Flex.Item>
                        <Flex.Item size="size.half">
                            <Button content={enUS["run query"]} onClick={() => callGraph()} primary />
                        </Flex.Item>
                    </Flex>
                </Flex.Item>
            </Flex>

            <Flex padding="padding.medium">
                <Menu
                    defaultActiveIndex={0}
                    underlined
                    primary
                    accessibility={tabListBehavior}>
                    <Menu.Item index={0} onClick={() => setRequestComponentIndex(0)}>
                        <Menu.ItemContent>{requestItems[0]}</Menu.ItemContent>
                    </Menu.Item>
                    <Menu.Item index={1} onClick={() => setRequestComponentIndex(1)}>
                        <Menu.ItemContent>{requestItems[1]}</Menu.ItemContent>
                    </Menu.Item>
                </Menu>
            </Flex>
            {requestComponents[requestComponentIndex]}

            <Flex padding="padding.medium">
                <Menu
                    defaultActiveIndex={0}
                    underlined
                    primary
                    accessibility={tabListBehavior}>
                    <Menu.Item index={0} onClick={() => setResponseComponentIndex(0)}>
                        <Menu.ItemContent>{responseItems[0]}</Menu.ItemContent>
                    </Menu.Item>
                    <Menu.Item index={1} onClick={() => setResponseComponentIndex(1)}>
                        <Menu.ItemContent>{responseItems[1]}</Menu.ItemContent>
                    </Menu.Item>
                </Menu>
            </Flex>
            {responseState !== -1 && responseState[0] === "2" && <Alert success content={responseState} />}
            {responseState !== -1 && (responseState[0] === "4" || responseState[0] === "5") && <Alert danger content={responseState} />}
            {responseComponents[responseComponentIndex]}
        </>
    );
}
