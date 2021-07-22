import React, { useState, useEffect } from "react";
import { requestTypes, graphVersions, GRAPH_URL } from "./TabConstants";
import { Button, Input, Flex, Menu, TextArea, Table, tabListBehavior, Dropdown } from '@fluentui/react-northstar'
import { gridCellWithFocusableElementBehavior, } from '@fluentui/accessibility'
import { TrashCanIcon, AddIcon } from '@fluentui/react-icons-northstar'
import enUS from './GE.json';

export function QueryRunner() {
    const addRequestHeader = () => {
        if (requestHeaders.filter(requestH => requestH.key === userAddedHeader).length === 0) {
            requestHeaders.splice(requestHeaders.length - 1, 0, {
                key: userAddedHeader,
                items: [userAddedHeader, userAddedValue, {
                    content: <Button
                        tabIndex={-1}
                        icon={<TrashCanIcon />}
                        circular
                        text
                        iconOnly
                        title="Delete request header"
                        onClick={() => {
                            setRequestHeaders(requestHeaders.filter(requestH => requestH.key !== userAddedHeader))
                        }}
                    />,
                    truncateContent: true,
                    accessibility: gridCellWithFocusableElementBehavior,
                    onClick: e => {
                        e.stopPropagation()
                    },
                }],
            });
            setRequestHeaders(requestHeaders);
        }
        setUserAddedHeader("");
        setUserAddedValue("");
    }

    const addOptionCell = {
        content: <Button tabIndex={-1} icon={<AddIcon />} circular text iconOnly title="Delete request header" />,
        truncateContent: true,
        accessibility: gridCellWithFocusableElementBehavior,
        onClick: e => {
            addRequestHeader()
            e.stopPropagation()
        },
    }

    const [userAddedHeader, setUserAddedHeader] = useState("");
    const [userAddedValue, setUserAddedValue] = useState("");

    const keyInputCell = {
        content: <Input fluid={true} inverted={true} id="key" value={userAddedHeader} showSuccessIndicator={false} required onChange={(evt) => setUserAddedHeader(evt.target.value)} type="text" />,
    }

    const valueInputCell = {
        content: <Input fluid={true} inverted={true} id="value" value={userAddedValue} showSuccessIndicator={false} required onChange={(evt) => setUserAddedValue(evt.target.value)} type="text" />,
    }

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
            key: 'addNew',
            items: [keyInputCell, valueInputCell, addOptionCell],
        }
    ]);

    const requestItems = [
        enUS["request body"],
        enUS["request headers"]
    ]

    const responseItems = [
        enUS["response body"],
        enUS["response headers"]
    ]

    const requestHeadersTable = {
        items: ['Key', 'Value', ''],
    }

    const responseHeadersTable = {
        items: ['Key', 'Value'],
    }

    const callGraph = () => {
        console.log(requestType);
        console.log(graphVersion);
        console.log(query);
    }

    useEffect(() => {
        setQuery(GRAPH_URL + graphVersion + query.substring(GRAPH_URL.length + 4, query.length));
    }, [graphVersion, query])


    const requestComponents = [
        <TextArea fluid={true} inverted={true} resize="both" value={requestBody} onChange={(evt) => setRequestBody(evt.target.value)} />,
        <Table compact header={requestHeadersTable} rows={requestHeaders} aria-label="request headers" />
    ]

    const responseComponents = [
        <TextArea fluid={true} inverted={true} resize="both" value={responseBody} />,
        <Table compact header={responseHeadersTable} rows={responseHeaders} aria-label="response headers" />
    ]

    return (
        <>
            <h2>{enUS["query runner"]}</h2>

            <Flex gap="gap.small">
                <Flex.Item size="size.quarter">
                    <Flex gap="gap.small">
                        <Flex.Item size="size.half">
                            <Dropdown
                                inverted={true}
                                fluid={true}
                                items={requestTypes}
                                id="requestType"
                                placeholder={requestType}
                                onChange={(evt, selected) => setRequestType(requestTypes[selected.highlightedIndex])}
                            />
                        </Flex.Item>
                        <Flex.Item size="size.half">
                            <Dropdown
                                inverted={true}
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
                    <Input fluid inverted value={query} showSuccessIndicator={false} required onChange={(evt) => setQuery(evt.target.value)} type="text" />
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
