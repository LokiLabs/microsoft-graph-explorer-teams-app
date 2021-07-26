import React, { useState } from 'react';
import { ChevronDownIcon, ChevronEndIcon, Header, Flex } from '@fluentui/react-northstar';
import { RSCList } from "./RSCList";
import { RSCDocumentation } from "./RSCDocumentation";
import { GRAPH_EXPLORER_URL, GRAPH_EXPLORER_DOCS_URL, OFFICIAL_RSC_URL } from "./TabConstants";
import { QueryRunner } from './QueryRunner';

const dummyText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus vestibulum sed arcu non odio. Volutpat diam ut venenatis tellus in metus vulputate. Tellus in hac habitasse platea. Non quam lacus suspendisse faucibus interdum posuere. Est ante in nibh mauris cursus. Duis ut diam quam nulla porttitor massa. Eget felis eget nunc lobortis. Quisque non tellus orci ac auctor augue mauris augue neque. Nibh cras pulvinar mattis nunc sed blandit libero volutpat sed. Cursus risus at ultrices mi tempus imperdiet nulla malesuada. Porta non pulvinar neque laoreet suspendisse interdum consectetur libero id. Tristique nulla aliquet enim tortor at. Volutpat consequat mauris nunc congue. Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus. Phasellus faucibus scelerisque eleifend donec pretium. Sed faucibus turpis in eu mi bibendum neque egestas. Purus in massa tempor nec feugiat nisl pretium fusce. Nunc sed velit dignissim sodales. Et netus et malesuada fames ac turpis egestas maecenas. Convallis tellus id interdum velit laoreet id donec ultrices tincidunt. Dui sapien eget mi proin sed libero enim sed faucibus. Tempus imperdiet nulla malesuada pellentesque. Aliquet eget sit amet tellus cras adipiscing enim. Cursus metus aliquam eleifend mi in. Elementum sagittis vitae et leo duis. Ac turpis egestas sed tempus urna. Ac odio tempor orci dapibus ultrices in iaculis nunc. Habitasse platea dictumst quisque sagittis purus sit. Sed velit dignissim sodales ut eu sem integer vitae justo.";

const MainContent = () => {
    const [firstSectionActive, toggleFirstSection] = useState(true);
    const [secondSectionActive, toggleSecondSection] = useState(true);
    const [thirdSectionActive, toggleThirdSection] = useState(true);
    const [fourthSectionActive, toggleFourthSection] = useState(true);

    let firstSection;
    if (firstSectionActive) {
        firstSection =
            <div>
                <Flex id="main-section" gap="gap.small" onClick={() => toggleFirstSection(!firstSectionActive)}>
                    <ChevronDownIcon id="connected-resource-chevron" />
                    <Header id="connected-resource-header" as="h2" content="Connected Resource" />
                </Flex>
                <div>
                    <p>REMOVE LOREM IPSUM AND PLACE CONNECTED RESOURCES HERE</p>
                    <p>{dummyText}</p>
                </div>
            </div>
    } else {
        firstSection =
            <Flex id="main-section" gap="gap.small" onClick={() => toggleFirstSection(!firstSectionActive)}>
                <ChevronEndIcon id="connected-resource-chevron" />
                <Header id="connected-resource-header" as="h2" content="Connected Resource" />
            </Flex>
    }

    let secondSection;
    if (secondSectionActive) {
        secondSection =
            <div>
                <Flex id="main-section" gap="gap.small" onClick={() => toggleSecondSection(!secondSectionActive)}>
                    <ChevronDownIcon id="query-runner-chevron" />
                    <Header id="query-runner-header" as="h2" content="Query Runner" />
                </Flex>
                <div>
                    <QueryRunner />
                </div>
            </div>
    } else {
        secondSection =
            <Flex id="main-section" gap="gap.small" onClick={() => toggleSecondSection(!secondSectionActive)}>
                <ChevronEndIcon id="query-runner-chevron" />
                <Header id="query-runner-header" as="h2" content="Query Runner" />
            </Flex>
    }

    let thirdSection;
    if (thirdSectionActive) {
        thirdSection =
            <div>
                <Flex id="main-section" gap="gap.small" onClick={() => toggleThirdSection(!thirdSectionActive)}>
                    <ChevronDownIcon id="resource-specific-consent-chevron" />
                    <Header id="resource-specific-consent-header" as="h2" content="Resource-Specific Consent" />
                </Flex>
                <div>
                    <p>REMOVE LOREM IPSUM AND PLACE RESOURCE-SPECIFIC CONSENT HERE</p>
                    <p>{dummyText}</p>
                </div>
            </div>
    } else {
        thirdSection =
            <Flex id="main-section" gap="gap.small" onClick={() => toggleThirdSection(!thirdSectionActive)}>
                <ChevronEndIcon id="resource-specific-consent-chevron" />
                <Header id="resource-specific-consent-header" as="h2" content="Resource-Specific Consent" />
            </Flex>
    }

    let fourthSection;
    if (fourthSectionActive) {
        fourthSection =
            <div>
                <Flex id="main-section" gap="gap.small" onClick={() => toggleFourthSection(!fourthSectionActive)}>
                    <ChevronDownIcon id="documentation-links-chevron" />
                    <Header id="documentation-links-header" as="h2" content="Documentation Links" />
                </Flex>
                <div>
                    <p>REMOVE LOREM IPSUM AND PLACE DOCUMENTATION LINKS HERE</p>
                    <p>{dummyText}</p>
                </div>
            </div>
    } else {
        fourthSection =
            <Flex id="main-section" gap="gap.small" onClick={() => toggleFourthSection(!fourthSectionActive)}>
                <ChevronEndIcon id="documentation-links-chevron" />
                <Header id="documentation-links-header" as="h2" content="Documentation Links" />
            </Flex>
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
