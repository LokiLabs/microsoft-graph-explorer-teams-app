import React from "react";
import { UNLOCALIZED_GRAPH_EXPLORER_URL, UNLOCALIZED_GRAPH_EXPLORER_DOCS_URL, UNLOCALIZED_OFFICIAL_RSC_URL, localizeUrl } from "./TabConstants";
import { Button } from '@fluentui/react-northstar';
import { useTranslation } from 'react-i18next';

const DocumentationLinks = () => {
    const { t, i18n } = useTranslation();

    return (
        <div className="documentation-links">
            <Button 
                content={t("Documentation Links.Go to Graph Explorer")} 
                onClick={() => window.open(localizeUrl(UNLOCALIZED_GRAPH_EXPLORER_URL, i18n))} 
                primary 
            />
            <Button 
                content={t("Documentation Links.Graph Explorer Documentation")} 
                onClick={() => window.open(localizeUrl(UNLOCALIZED_GRAPH_EXPLORER_DOCS_URL, i18n))} 
                primary 
            />
            <Button 
                content={t("Documentation Links.Resource-Specific Consent")} 
                onClick={() => window.open(localizeUrl(UNLOCALIZED_OFFICIAL_RSC_URL, i18n))} 
                primary 
            />
        </div>
    );
};

export default DocumentationLinks;
