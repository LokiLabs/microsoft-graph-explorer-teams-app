import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from "react-i18next";
import { Button, Flex, Menu, TextArea, Table, tabListBehavior, Input } from '@fluentui/react-northstar';
import { gridCellWithFocusableElementBehavior, } from '@fluentui/accessibility';
import { TrashCanIcon } from '@fluentui/react-icons-northstar';
import { requestTypes } from '../../../TabConstants';

Request.propTypes = {
    requestType: PropTypes.string,
    userAddedValue: PropTypes.string,
    setUserAddedValue: PropTypes.func,
    userAddedHeader: PropTypes.string,
    setUserAddedHeader: PropTypes.func,
    requestBody: PropTypes.string,
    setRequestBody: PropTypes.func,
    requestHeaders: PropTypes.array,
    setRequestHeaders: PropTypes.func,
    height: PropTypes.any
};

export function Request(props) {

    const requestBody = props.requestBody;
    const setRequestBody = props.setRequestBody;
    const requestHeaders = props.requestHeaders;
    const setRequestHeaders = props.setRequestHeaders;
    const height = props.height;
    const requestType = props.requestType;

    const [requestComponentIndex, setRequestComponentIndex] = useState(0);
    const [userAddedHeader, setUserAddedHeader] = useState("");
    const [userAddedValue, setUserAddedValue] = useState("");

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

    const deleteButton = () => <Button
        tabIndex={-1}
        icon={<TrashCanIcon className="button-icon" />}
        circular
        text
        iconOnly
        aria-label={t("Query Runner.Delete")}
        title={t("Query Runner.Delete request header")}
    />;

    const newHeaderValue = (headerCopy, valueCopy) => {
        return {
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
    };

    const addRequestHeader = () => {
        if (!requestHeaders.map(r => r.key).includes(userAddedHeader)) {
            const headerCopy = (' ' + userAddedHeader).slice(1);
            const valueCopy = (' ' + userAddedValue).slice(1);
            setUserAddedHeader("");
            setUserAddedValue("");
            setRequestHeaders([...requestHeaders, newHeaderValue(headerCopy, valueCopy)]);
        }
    };

    const deleteRow = (header) => {
        setRequestHeaders(requestHeaders => requestHeaders.filter(r => r.key !== header));
    };

    useEffect(() => {
        if (requestType !== requestTypes.GET && requestType !== requestTypes.DELETE) {
            setRequestHeaders([newHeaderValue("Content-Type", "Application/json")]);
        } else {
            setRequestHeaders([]);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [requestType]);

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
