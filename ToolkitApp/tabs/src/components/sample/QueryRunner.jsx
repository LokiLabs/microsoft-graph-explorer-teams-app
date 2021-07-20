import React, { useState, useEffect } from "react";
import { requestTypes, graphVersions, GRAPH_URL } from "./TabConstants";
import { FormInput, Button, FormDropdown, Flex, Menu, TextArea, Table, tabListBehavior, Dropdown } from '@fluentui/react-northstar'

import enUS from './GE.json';
import { Alert } from '@fluentui/react-northstar'

export function QueryRunner() {
    const [requestType, setRequestType] = useState(requestTypes[0]);
    const [graphVersion, setGraphVersion] = useState(graphVersions[0]);
    const [query, setQuery] = useState(GRAPH_URL);
    const [responseBody, setResponseBody] = useState("{}");
    const [requestBody, setRequestBody] = useState("{}");
    const [responseHeaders, setResponseHeaders] = useState([
        {
            key: 'Content',
            items: ['Content', 'json'],
        },
    ]);
    const [responseComponentIndex, setResponseComponentIndex] = useState(0);
    const [requestComponentIndex, setRequestComponentIndex] = useState(0);
    const [requestHeaders, setRequestHeaders] = useState([
        {
            key: 'Content',
            items: ['Content', 'text'],
        },
    ]);

    const requestItems = [
        enUS["request body"],
        enUS["request headers"]
    ]

    const responseItems = [
        enUS["response body"],
        enUS["response headers"]
    ]

    const header = {
        items: ['Key', 'Value'],
    }

    const callGraph = () => {
        console.log(requestType);
        console.log(graphVersion);
        console.log(query);
    }

    const addRequestHeader = () => {
        const header = document.getElementById("key").value;
        const value = document.getElementById("value").value;
        requestHeaders.push({
            key: header,
            items: [header, value],
        });
        setRequestHeaders(requestHeaders);
    }

    useEffect(() => {
        setQuery(GRAPH_URL + graphVersion + query.substring(GRAPH_URL.length + 4, query.length));
    }, [graphVersion, query])

    const requestComponents = [
        <TextArea fluid={true} resize="both" value={requestBody} />,
        <>
            <Flex gap="gap.small" padding="padding.medium">
                <Flex.Item size="size.half">
                    <FormInput
                        name="key"
                        id="key"
                        fluid={true}
                    />
                </Flex.Item>

                <Flex.Item size="size.half">
                    <FormInput
                        name="value"
                        id="value"
                        fluid={true}
                    />
                </Flex.Item>
                <Button content={enUS["add"]} onClick={() => addRequestHeader()} primary />
            </Flex>
            <Table compact header={header} rows={requestHeaders} aria-label="request headers" />
        </>
    ]

    const responseComponents = [
        <TextArea fluid={true} resize="both" value={responseBody} />,
        <Table compact header={header} rows={responseHeaders} aria-label="respons headers" />
    ]

    return (

        <>
            {/* <Alert
                style={{ "margin-top": 15 + 'px' }}
                warning
                content={enUS["warning"]}
                dismissible
                dismissAction={{
                    'aria-label': 'close',
                }}
            /> */}
            <h2>{enUS["query runner"]}</h2>

            <Flex gap="gap.small">
                <Flex.Item size="size.quarter">
                    <Flex gap="gap.small">
                        <Flex.Item size="size.half">
                            <Dropdown
                                fluid={true}
                                items={requestTypes}
                                id="requestType"
                                placeholder={requestType}
                                onChange={(evt, selected) => setRequestType(requestTypes[selected.highlightedIndex])}
                            />
                        </Flex.Item>
                        <Flex.Item size="size.half">
                            <Dropdown
                                fluid={true}
                                items={graphVersions}
                                id="graphVersion"
                                placeholder={graphVersion}
                                onChange={(evt, selected) => setGraphVersion(graphVersions[selected.highlightedIndex])}
                            />
                        </Flex.Item>
                    </Flex>
                </Flex.Item>

                <Flex.Item grow>
                    <FormInput fluid={true} value={query} required onChange={(evt) => setQuery(evt.target.value)} type="text" />
                </Flex.Item>

                <Button content={enUS["run query"]} onClick={() => callGraph()} primary />
            </Flex>

            <Flex padding="padding.medium">
                <Menu
                    defaultActiveIndex={0}
                    underlined
                    primary
                    accessibility={tabListBehavior}
                >
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
                    accessibility={tabListBehavior}
                >
                    <Menu.Item index={0} onClick={() => setResponseComponentIndex(0)}>
                        <Menu.ItemContent>{responseItems[0]}</Menu.ItemContent>
                    </Menu.Item>
                    <Menu.Item index={1} onClick={() => setResponseComponentIndex(1)}>
                        <Menu.ItemContent>{responseItems[1]}</Menu.ItemContent>
                    </Menu.Item>
                </Menu>
            </Flex>
            {responseComponents[responseComponentIndex]}
        </>
    );
}
