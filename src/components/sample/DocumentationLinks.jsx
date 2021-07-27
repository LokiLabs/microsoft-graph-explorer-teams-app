import React from "react";
import { GRAPH_EXPLORER_URL, GRAPH_EXPLORER_DOCS_URL, OFFICIAL_RSC_URL} from "./TabConstants";
import { Button, Flex } from '@fluentui/react-northstar';
import { useTranslation } from 'react-i18next';

const DocumentationLinks = () => {
    const { t } = useTranslation();

    return (
        <Flex gap="gap.large">
            <Button content={t("Documentation Links.Go to Graph Explorer")} onClick={() => window.open(GRAPH_EXPLORER_URL)} primary />
            <Button content={t("Documentation Links.Graph Explorer Documentation")} onClick={() => window.open(GRAPH_EXPLORER_DOCS_URL)} primary />
            <Button content={t("Documentation Links.Resource-Specific Consent")} onClick={() => window.open(OFFICIAL_RSC_URL)} primary />
        </Flex>
    );
};

export default DocumentationLinks;