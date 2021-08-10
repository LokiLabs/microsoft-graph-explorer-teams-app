import React from "react";
import { UNLOCALIZED_GRAPH_EXPLORER_URL, UNLOCALIZED_GRAPH_EXPLORER_DOCS_URL, UNLOCALIZED_OFFICIAL_RSC_URL, localizeUrl } from "../../TabConstants";
import { useTranslation } from 'react-i18next';
import { useTeamsFx } from "../../utils/useTeamsFx";
import { MediumFontLink } from "./MediumFontLink";

export const DocumentationLinks = () => {
    const { t, i18n } = useTranslation();
    const { themeString } = useTeamsFx();

    let linkColor = "#6264A7";
    switch(themeString) {
        case "default":
            linkColor = "#6264A7";
            break;
        case "dark":
            linkColor = "#A6A7DC";
            break;
        case "contrast":
            linkColor = "#ffff01";
            break;
        default:
            linkColor = "#6264A7";
    }

    return (
        <ul>
            <li>
                <MediumFontLink URL={localizeUrl(UNLOCALIZED_GRAPH_EXPLORER_URL, i18n)} content={t("Documentation Links.Go to Graph Explorer")} linkColor={linkColor} />
            </li>
            <li>
                <MediumFontLink URL={localizeUrl(UNLOCALIZED_GRAPH_EXPLORER_DOCS_URL, i18n)} content={t("Documentation Links.Graph Explorer Documentation")} linkColor={linkColor} />
            </li>
            <li>
                <MediumFontLink URL={localizeUrl(UNLOCALIZED_OFFICIAL_RSC_URL, i18n)} content={t("Documentation Links.Resource-Specific Consent")} linkColor={linkColor} />
            </li>
        </ul>
    );
};
