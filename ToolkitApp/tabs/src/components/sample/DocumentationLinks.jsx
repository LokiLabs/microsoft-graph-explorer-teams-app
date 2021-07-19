import React from "react";
import { GRAPH_EXPLORER_URL, GRAPH_EXPLORER_DOCS_URL, OFFICIAL_RSC_URL} from "./TabConstants";
import { Button, Flex } from '@fluentui/react-northstar';

const DocumentationLinks = () => {
    return (
        <Flex gap="gap.large">
            <Button content="Go to Graph Explorer" onClick={() => window.open(GRAPH_EXPLORER_URL)} primary />
            <Button content="Graph Explorer Documentation" onClick={() => window.open(GRAPH_EXPLORER_DOCS_URL)} primary />
            <Button content="Resource-Specific Consent" onClick={() => window.open(OFFICIAL_RSC_URL)} primary />
        </Flex>
    );
};

export default DocumentationLinks;