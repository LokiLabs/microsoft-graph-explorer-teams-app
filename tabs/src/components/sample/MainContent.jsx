import React, { useState } from 'react';
import { ChevronDownIcon, ChevronEndIcon, Header, Flex } from '@fluentui/react-northstar';
import { RSCList } from "./RSCList";
import { QueryRunner } from './QueryRunner';
import { useTranslation } from 'react-i18next';
import DocumentationLinks from "./DocumentationLinks";

import { ProcessTeamsContext } from './ConnectedResources.jsx';
import "./ConnectedResources.css";

const MainContent = () => {
    const [firstSectionActive, toggleFirstSection] = useState(true);
    const [secondSectionActive, toggleSecondSection] = useState(true);
    const [thirdSectionActive, toggleThirdSection] = useState(true);
    const [fourthSectionActive, toggleFourthSection] = useState(true);
    const { t } = useTranslation();


    let firstSection;
    if (firstSectionActive) {
        firstSection =
            <div>
                <Flex id="main-section" gap="gap.small" onClick={() => toggleFirstSection(!firstSectionActive)}>
                    <ChevronDownIcon id="connected-resource-chevron" />
                    <Header id="connected-resource-header" as="h2" content={t("Table of Contents.Connected Resources")} />
                </Flex>
                <ProcessTeamsContext />
            </div>;
    } else {
        firstSection =
            <Flex id="main-section" gap="gap.small" onClick={() => toggleFirstSection(!firstSectionActive)}>
                <ChevronEndIcon id="connected-resource-chevron" />
                <Header id="connected-resource-header" as="h2" content={t("Table of Contents.Connected Resources")} />
            </Flex>;
    }

    let secondSection;
    if (secondSectionActive) {
        secondSection =
            <div>
                <Flex id="main-section" gap="gap.small" onClick={() => toggleSecondSection(!secondSectionActive)}>
                    <ChevronDownIcon id="query-runner-chevron" />
                    <Header id="query-runner-header" as="h2" content={t("Table of Contents.Query Runner")} />
                </Flex>
                <div>
                    <QueryRunner />
                </div>
            </div>;
    } else {
        secondSection =
            <Flex id="main-section" gap="gap.small" onClick={() => toggleSecondSection(!secondSectionActive)}>
                <ChevronEndIcon id="query-runner-chevron" />
                <Header id="query-runner-header" as="h2" content={t("Table of Contents.Query Runner")} />
            </Flex>;
    }

    let thirdSection;
    if (thirdSectionActive) {
        thirdSection =
            <div>
                <Flex id="main-section" gap="gap.small" onClick={() => toggleThirdSection(!thirdSectionActive)}>
                    <ChevronDownIcon id="resource-specific-consent-chevron" />
                    <Header id="resource-specific-consent-header" as="h2" content={t("Table of Contents.Resource-Specific Consent")} />
                </Flex>
                <div>
                    <RSCList />
                </div>
            </div>;
    } else {
        thirdSection =
            <Flex id="main-section" gap="gap.small" onClick={() => toggleThirdSection(!thirdSectionActive)}>
                <ChevronEndIcon id="resource-specific-consent-chevron" />
                <Header id="resource-specific-consent-header" as="h2" content={t("Table of Contents.Resource-Specific Consent")} />
            </Flex>;
    }

    let fourthSection;
    if (fourthSectionActive) {
        fourthSection =
            <div>
                <Flex id="main-section" gap="gap.small" onClick={() => toggleFourthSection(!fourthSectionActive)}>
                    <ChevronDownIcon id="documentation-links-chevron" />
                    <Header id="documentation-links-header" as="h2" content={t("Table of Contents.Documentation Links")} />
                </Flex>
                <DocumentationLinks />
            </div>;
    } else {
        fourthSection =
            <Flex id="main-section" gap="gap.small" onClick={() => toggleFourthSection(!fourthSectionActive)}>
                <ChevronEndIcon id="documentation-links-chevron" />
                <Header id="documentation-links-header" as="h2" content={t("Table of Contents.Documentation Links")} />
            </Flex>;
    }

    return (
        <main>
            {firstSection}
            {secondSection}
            {thirdSection}
            {fourthSection}
        </main>
    );
};

export default MainContent;
