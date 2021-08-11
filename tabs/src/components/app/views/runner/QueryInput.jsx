
import React, { useEffect, useState } from 'react';
import { requestTypes, graphVersions, GRAPH_URL } from '../../../TabConstants';
import { Button, Flex, Dropdown } from '@fluentui/react-northstar';
import { TextField } from 'office-ui-fabric-react';
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
    isLoading: PropTypes.bool,
    isConnectedToResource: PropTypes.bool
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
    const isConnectedToResource = props.isConnectedToResource;
    const [element, setElement] = useState(null);

    // Translations
    const { t } = useTranslation();

    function isInputOverflowing(element, input) {

        function getTextWidth(text) {
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');
            if (context === null) {
                return 0;
            }
            context.font = getComputedStyle(document.body).font;
            return context.measureText(text).width + 5;
        }

        return !!element && getTextWidth(input) > element.scrollWidth;
    }

    useEffect(() => {
        setQuery(GRAPH_URL + graphVersion + query.substring(GRAPH_URL.length + graphVersion.length, query.length));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [graphVersion, query]);

    return (
        <Flex gap="gap.small">
            <Dropdown
                inverted={true}
                fluid={true}
                items={Object.keys(requestTypes).map(key => requestTypes[key])}
                id="requestType"
                value={requestType}
                onChange={(evt, selected) => setRequestType(Object.keys(requestTypes)
                    .map(key => requestTypes[key])[selected.highlightedIndex])}
                className="dropdown"
            />
            <Dropdown
                inverted={true}
                fluid={true}
                items={Object.keys(graphVersions).map(key => graphVersions[key])}
                id="graphVersion"
                value={graphVersion}
                onChange={(evt, selected) => setGraphVersion(Object.keys(graphVersions)
                    .map(key => graphVersions[key])[selected.highlightedIndex])}
                className="dropdown"
            />

            <Flex.Item grow>
                <Flex gap="gap.small">
                    <Flex.Item grow>
                        <div ref={(el) => { setElement(el); }}>
                            <TextField
                                fluid
                                inverted
                                value={query}
                                showSuccessIndicator={false}
                                required={false}
                                onChange={(evt) => setQuery(evt.target.value)}
                                multiline={isInputOverflowing(element,query)}
                                autoAdjustHeight
                                resizable={false}
                                type="text" />
                        </div>
                    </Flex.Item>
                    <Flex.Item size="size.half">
                        <Button
                            loading={isLoading}
                            disabled={isLoading || !isConnectedToResource}
                            content={t("Query Runner.Run query")}
                            onClick={() => callGraph()}
                            primary />
                    </Flex.Item>
                </Flex>
            </Flex.Item>
        </Flex>
    );
}
