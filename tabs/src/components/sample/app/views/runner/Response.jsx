import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from "react-i18next";
import { useRangeKnob } from '@fluentui/docs-components';
import { Flex, Menu, TextArea, Table, tabListBehavior, Alert } from '@fluentui/react-northstar';

Response.propTypes = {
    responseBody: PropTypes.string,
    responseHeaders: PropTypes.array,
    responseComponentIndex: PropTypes.number,
    setResponseComponentIndex: PropTypes.func,
    responseState: PropTypes.number,
};

export function Response(props) {

    const responseBody = props.responseBody;
    const responseHeaders = props.responseHeaders;
    const responseComponentIndex = props.responseComponentIndex;
    const setResponseComponentIndex = props.setResponseComponentIndex;
    const responseState = props.responseState;

    // Translations
    const { t } = useTranslation();

    const responseItems = [
        t("Query Runner.Response body"),
        t("Query Runner.Response headers")
    ];

    const [height] = useRangeKnob({
        name: 'height',
        initialValue: '120px',
        min: '20px',
        max: '300px',
        step: 10,
    });

    const responseTableHeaders = {
        items: [
            t("Query Runner.Key"),
            t("Query Runner.Value")
        ],
    };
    const responseComponents = [
        <TextArea
            key="responseBody"
            fluid={true}
            inverted={true}
            resize="both"
            value={responseBody}
            variables={{
                height,
            }}
        />,
        <Table
            key="responseHeaders"
            compact
            header={responseTableHeaders}
            rows={responseHeaders}
            aria-label="response headers" />
    ];
    return (
        <>
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
            {responseState !== -1 && responseState[0] === "2" && <Alert className="response-number" success content={responseState} />}
            {responseState !== -1 && (responseState[0] === "4" || responseState[0] === "5") && <Alert className="response-number" danger content={responseState} />}
            {responseComponents[responseComponentIndex]}
        </>);
}
