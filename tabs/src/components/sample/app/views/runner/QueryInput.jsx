
import React from 'react';
import { requestTypes, graphVersions } from '../../../TabConstants';
import { Button, Input, Flex, Dropdown } from '@fluentui/react-northstar';
import { useTranslation } from "react-i18next";
import PropTypes from 'prop-types';

QueryInput.propTypes = {
    requestType: PropTypes.string,
    setRequestType: PropTypes.func,
    graphVersion: PropTypes.string,
    setGraphVersion: PropTypes.func,
    query: PropTypes.string,
    setQuery: PropTypes.func,
    callGraph: PropTypes.func,
    isLoading: PropTypes.bool
};

export function QueryInput(props) {

    const requestType = props.requestType;
    const setRequestType = props.setRequestType;
    const graphVersion = props.graphVersion;
    const setGraphVersion = props.setGraphVersion;
    const query = props.query;
    const setQuery = props.setQuery;
    const callGraph = props.callGraph;
    const isLoading = props.isLoading;

    // Translations
    const { t } = useTranslation();

    return (
        <Flex gap="gap.small">
            <Dropdown
                inverted={true}
                fluid={true}
                items={Object.keys(requestTypes).map(key => requestTypes[key])}
                id="requestType"
                placeholder={requestType}
                onChange={(evt, selected) => setRequestType(Object.keys(requestTypes)
                    .map(key => requestTypes[key])[selected.highlightedIndex])}
                className="dropdown"
            />
            <Dropdown
                inverted={true}
                fluid={true}
                items={Object.keys(graphVersions).map(key => graphVersions[key])}
                id="graphVersion"
                placeholder={graphVersion}
                onChange={(evt, selected) => setGraphVersion(Object.keys(graphVersions)
                    .map(key => graphVersions[key])[selected.highlightedIndex])}
                className="dropdown"
            />

            <Flex.Item grow>
                <Flex gap="gap.small">
                    <Flex.Item grow>
                        <Input
                            fluid
                            inverted
                            value={query}
                            showSuccessIndicator={false}
                            required
                            onChange={(evt) => setQuery(evt.target.value)}
                            type="text" />
                    </Flex.Item>
                    <Flex.Item size="size.half">
                        <Button
                            loading={isLoading}
                            disabled={isLoading}
                            content={t("Query Runner.Run query")}
                            onClick={() => callGraph()}
                            primary />
                    </Flex.Item>
                </Flex>
            </Flex.Item>
        </Flex>
    );
}
