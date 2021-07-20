import React, { useState, useEffect } from "react";
import { requestTypes, graphVersions } from "./TabConstants";
import { Form, FormInput, Button, FormDropdown, Flex, Menu, TextArea } from '@fluentui/react-northstar'
import "./QueryRunner.css";
import enUS from './GE.json';
import { Alert } from '@fluentui/react-northstar'

export function QueryRunner() {
    const [requestType, setRequestType] = useState(requestTypes.GET);
    const [graphVersion, setGraphVersion] = useState(graphVersions.v1);
    const [query, setQuery] = useState("");

    const requestItems = [
        {
            key: enUS["request body"],
            content: enUS["request body"],
        },
        {
            key: enUS["request headers"],
            content: enUS["request headers"],
        }
    ]

    const responseItems = [
        {
            key: enUS["response body"],
            content: enUS["response body"],
        },
        {
            key: enUS["response headers"],
            content: enUS["response headers"],
        },
    ]

    const items = [
        {
            key: 'editorials',
            content: 'Editorials',
        },
        {
            key: 'review',
            content: 'Reviews',
        },
        {
            key: 'events',
            content: 'Upcoming Events',
        },
    ]
    return (
        <>
            <Alert
                style={{ "margin-top": 15 + 'px' }}
                warning
                content={enUS["warning"]}
                dismissible
                dismissAction={{
                    'aria-label': 'close',
                }}
            />
            <h2>{enUS["query runner"]}</h2>
            <Flex gap="gap.small">

                <Flex.Item size="size.quarter">
                    <Flex gap="gap.small">
                        <Flex.Item size="size.half">
                            <FormDropdown
                                fluid={true}
                                items={requestTypes}
                                id="requestType"
                                defaultValue={requestTypes[0]}
                            />
                        </Flex.Item>
                        <Flex.Item size="size.half">
                            <FormDropdown
                                fluid={true}
                                items={graphVersions}
                                id="graphVersion"
                                defaultValue={graphVersions[0]}
                            />
                        </Flex.Item>
                    </Flex>
                </Flex.Item>

                <Flex.Item grow>
                    <TextArea fluid={true} resize="both" placeholder="Type here..." required />
                </Flex.Item>

                <Button content={enUS["run query"]} primary />
            </Flex>
            <Flex padding="padding.medium">
                <Menu defaultActiveIndex={0} items={requestItems} underlined primary />
            </Flex>
            <TextArea fluid={true} resize="both" placeholder="Type here..." />
            <Flex padding="padding.medium">
                <Menu defaultActiveIndex={0} items={responseItems} underlined primary />
            </Flex>
            <TextArea fluid={true} resize="both" placeholder="Type here..." />
        </>
    );
}
