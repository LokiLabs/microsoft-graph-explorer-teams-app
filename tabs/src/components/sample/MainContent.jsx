import React, { useState } from 'react';
import { ChevronDownIcon, ChevronEndIcon, Header, Flex} from '@fluentui/react-northstar';
import { GRAPH_URL, requestTypes } from "./TabConstants";
import { RSCList } from "./RSCList";
import { QueryRunner } from './QueryRunner';
import { useTranslation } from 'react-i18next';
import DocumentationLinks from "./DocumentationLinks";
import { FetchSamples } from "./SampleQueries";

import { ProcessTeamsContext } from './ConnectedResources.jsx';

const MainContent = () => {
    const [firstSectionActive, toggleFirstSection] = useState(true);
    const [secondSectionActive, toggleSecondSection] = useState(false);
    const [thirdSectionActive, toggleThirdSection] = useState(true);
    const [fourthSectionActive, toggleFourthSection] = useState(false);
    const [fifthSectionActive, toggleFifthSection] = useState(false);
    
    const [query, setQuery] = useState(GRAPH_URL);
    const [requestType, setRequestType] = useState(requestTypes.GET);
    const [requestBody, setRequestBody] = useState("{}");
    const { t } = useTranslation();


    let firstSectionHeader = 
    <Flex className="main-section" gap="gap.small" onClick={() => toggleFirstSection(!firstSectionActive)}>
        {firstSectionActive ? <ChevronDownIcon className="chevron" /> : <ChevronEndIcon className="chevron" />}
        <Header id="resource-ids-header" className="pointer-header" as="h2" content={t("Table of Contents.Resource IDs")} />
    </Flex>;

    let firstSectionContent;
    if (firstSectionActive) {
        firstSectionContent = <ProcessTeamsContext />;
    }


    let secondSectionHeader =
    <Flex className="main-section" gap="gap.small" onClick={() => toggleSecondSection(!secondSectionActive)}>
        {secondSectionActive ? <ChevronDownIcon className="chevron" /> : <ChevronEndIcon className="chevron" />}
        <Header id="sample-queries-header" className="pointer-header" as="h2" content={t("Table of Contents.Sample Queries")} />
    </Flex>;

    let secondSectionContent;
    if (secondSectionActive) {
        secondSectionContent = <FetchSamples setQuery = {setQuery} setRequestType = {setRequestType} setRequestBody = {setRequestBody}/>;
    }
    

    let thirdSectionHeader =
    <Flex className="main-section" gap="gap.small" onClick={() => toggleThirdSection(!thirdSectionActive)}>
        {thirdSectionActive ? <ChevronDownIcon className="chevron" /> : <ChevronEndIcon className="chevron" />}
        <Header id="query-runner-header" className="pointer-header" as="h2" content={t("Table of Contents.Query Runner")} />
    </Flex>;

    let thirdSectionContent;
    if (thirdSectionActive) {
        thirdSectionContent = <QueryRunner query = {query} setQuery = {setQuery} requestType = {requestType} setRequestType = {setRequestType} requestBody = {requestBody} setRequestBody = {setRequestBody}/>;
    }


    let fourthSectionHeader =
    <Flex className="main-section" gap="gap.small" onClick={() => toggleFourthSection(!fourthSectionActive)}>
        {fourthSectionActive ? <ChevronDownIcon className="chevron" /> : <ChevronEndIcon className="chevron" />}
        <Header id="resource-specific-consent-header" className="pointer-header" as="h2" content={t("Table of Contents.Granted Resource-Specific Consent")} />
    </Flex>;

    let fourthSectionContent;
    if (fourthSectionActive) {
        fourthSectionContent = <RSCList />;
    }


    let fifthSectionHeader = 
    <Flex className="main-section" gap="gap.small" onClick={() => toggleFifthSection(!fifthSectionActive)}>
        {fifthSectionActive ? <ChevronDownIcon className="chevron" /> : <ChevronEndIcon className="chevron" />}
        <Header id="documentation-links-header" className="pointer-header" as="h2" content={t("Table of Contents.Documentation Links")} />
    </Flex>;

    let fifthSectionContent;
    if (fifthSectionActive) {
        fifthSectionContent = <DocumentationLinks />;
    }
    

    return (
        <main>
            {firstSectionHeader}
            {firstSectionContent}
            {secondSectionHeader}
            {secondSectionContent}
            {thirdSectionHeader}
            {thirdSectionContent}
            {fourthSectionHeader}
            {fourthSectionContent}
            {fifthSectionHeader}
            {fifthSectionContent}
        </main>
    );
};

export default MainContent;
