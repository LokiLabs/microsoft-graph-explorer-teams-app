import React, { useState } from 'react';
import { ChevronDownIcon, ChevronEndIcon, Header, Flex } from '@fluentui/react-northstar';
import { RSCList } from "./RSCList";
import { QueryRunner } from './QueryRunner';
import { useTranslation } from 'react-i18next';
import DocumentationLinks from "./DocumentationLinks";

import { ProcessTeamsContext } from './ConnectedResources.jsx';

const MainContent = () => {
    const [firstSectionActive, toggleFirstSection] = useState(true);
    const [secondSectionActive, toggleSecondSection] = useState(true);
    const [thirdSectionActive, toggleThirdSection] = useState(false);
    const [fourthSectionActive, toggleFourthSection] = useState(false);
    const { t } = useTranslation();


    let firstSection;
    if (firstSectionActive) {
        firstSection =
            <div>
                <Flex className="main-section" gap="gap.small" onClick={() => toggleFirstSection(!firstSectionActive)}>
                    <ChevronDownIcon className="chevron" />
                    <Header id="connected-resource-header" className="pointer-header" as="h2" content={t("Table of Contents.Resource IDs")} />
                </Flex>
                <ProcessTeamsContext />
            </div>;
    } else {
        firstSection =
            <Flex className="main-section" gap="gap.small" onClick={() => toggleFirstSection(!firstSectionActive)}>
                <ChevronEndIcon className="chevron" />
                <Header id="connected-resource-header" className="pointer-header" as="h2" content={t("Table of Contents.Resource IDs")} />
            </Flex>;
    }

    let secondSection;
    if (secondSectionActive) {
        secondSection =
            <div>
                <Flex className="main-section" gap="gap.small" onClick={() => toggleSecondSection(!secondSectionActive)}>
                    <ChevronDownIcon className="chevron" />
                    <Header id="query-runner-header" className="pointer-header" as="h2" content={t("Table of Contents.Query Runner")} />
                </Flex>
                <div>
                    <QueryRunner />
                </div>
            </div>;
    } else {
        secondSection =
            <Flex className="main-section" gap="gap.small" onClick={() => toggleSecondSection(!secondSectionActive)}>
                <ChevronEndIcon className="chevron" />
                <Header id="query-runner-header" className="pointer-header" as="h2" content={t("Table of Contents.Query Runner")} />
            </Flex>;
    }

    let thirdSection;
    if (thirdSectionActive) {
        thirdSection =
            <div>
                <Flex className="main-section" gap="gap.small" onClick={() => toggleThirdSection(!thirdSectionActive)}>
                    <ChevronDownIcon className="chevron" />
                    <Header id="resource-specific-consent-header" className="pointer-header" as="h2" content={t("Table of Contents.Granted Resource-Specific Consent")} />
                </Flex>
                <div>
                    <RSCList />
                </div>
            </div>;
    } else {
        thirdSection =
            <Flex className="main-section" gap="gap.small" onClick={() => toggleThirdSection(!thirdSectionActive)}>
                <ChevronEndIcon className="chevron" />
                <Header id="resource-specific-consent-header" className="pointer-header" as="h2" content={t("Table of Contents.Granted Resource-Specific Consent")} />
            </Flex>;
    }

    let fourthSection;
    if (fourthSectionActive) {
        fourthSection =
            <div>
                <Flex className="main-section" gap="gap.small" onClick={() => toggleFourthSection(!fourthSectionActive)}>
                    <ChevronDownIcon className="chevron" />
                    <Header id="documentation-links-header" className="pointer-header" as="h2" content={t("Table of Contents.Documentation Links")} />
                </Flex>
                <DocumentationLinks />
            </div>;
    } else {
        fourthSection =
            <Flex className="main-section" gap="gap.small" onClick={() => toggleFourthSection(!fourthSectionActive)}>
                <ChevronEndIcon className="chevron" />
                <Header id="documentation-links-header" className="pointer-header" as="h2" content={t("Table of Contents.Documentation Links")} />
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
