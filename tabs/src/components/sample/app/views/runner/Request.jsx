import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from "react-i18next";
import { useRangeKnob } from '@fluentui/docs-components';
import { Button, Flex, Menu, TextArea, Table, tabListBehavior, Input } from '@fluentui/react-northstar';

Request.propTypes = {
    userAddedValue: PropTypes.string,
    setUserAddedValue: PropTypes.func,
    userAddedHeader: PropTypes.string,
    setUserAddedHeader: PropTypes.func,
    requestBody: PropTypes.string,
    setRequestBody: PropTypes.func,
    addRequestHeader: PropTypes.func,
    requestComponentIndex: PropTypes.number,
    setRequestComponentIndex: PropTypes.func,
    requestHeaders: PropTypes.array
};

export function Request(props) {

    const requestBody = props.requestBody;
    const setRequestBody = props.setRequestBody;
    const userAddedHeader = props.userAddedHeader;
    const setUserAddedHeader = props.setUserAddedHeader;
    const userAddedValue = props.userAddedValue;
    const setUserAddedValue = props.setUserAddedValue;
    const addRequestHeader = props.addRequestHeader;
    const requestComponentIndex = props.requestComponentIndex;
    const setRequestComponentIndex = props.setRequestComponentIndex;
    const requestHeaders = props.requestHeaders;


    // Translations
    const { t } = useTranslation();

    const requestItems = [
        t("Query Runner.Request body"),
        t("Query Runner.Request headers")
    ];

    const requestTableHeaders = {
        items: [
            t("Query Runner.Key"),
            t("Query Runner.Value"),
            ''
        ],
    };

    const [height] = useRangeKnob({
        name: 'height',
        initialValue: '120px',
        min: '20px',
        max: '300px',
        step: 10,
    });

    const requestComponents = [
        <TextArea
            key="requestBody"
            fluid={true}
            inverted={true}
            resize="both"
            value={requestBody}
            onChange={(evt) => setRequestBody(evt.target.value)}
            variables={{
                height,
            }}
        />,
        <>
            <Table
                header={requestTableHeaders}
                rows={requestHeaders}
                aria-label="request headers" />
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
                    <Button
                        content={t("Query Runner.Add")}
                        onClick={() => addRequestHeader()}
                        primary />
                </Flex.Item>
            </Flex>
        </>
    ];

    return (
        <>
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
            {requestComponents[requestComponentIndex]}</>
    );
}
