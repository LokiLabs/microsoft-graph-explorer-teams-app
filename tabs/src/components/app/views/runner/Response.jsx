import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from "react-i18next";
import { Flex, Menu, Table, tabListBehavior, Alert } from '@fluentui/react-northstar';
import Monaco from '../Monaco';

Response.propTypes = {
    responseBody: PropTypes.string,
    responseHeaders: PropTypes.array,
    responseState: PropTypes.number,
    height: PropTypes.any
};

export function Response(props) {

    const responseBody = props.responseBody;
    const responseHeaders = props.responseHeaders;
    const responseState = props.responseState;
    const height = props.height;

    const [responseComponentIndex, setResponseComponentIndex] = useState(0);

    // Translations
    const { t } = useTranslation();

    const responseItems = [
        t("Query Runner.Response body"),
        t("Query Runner.Response headers")
    ];

    const responseTableHeaders = {
        items: [
            t("Query Runner.Key"),
            t("Query Runner.Value")
        ],
    };
    const responseComponents = [
        <Monaco
            key="responseBody"
            body={responseBody}
            readOnly={true}
            height={height}
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
