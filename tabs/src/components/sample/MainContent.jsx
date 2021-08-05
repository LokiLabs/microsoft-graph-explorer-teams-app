import React, { useState } from 'react';
import { RSCList } from "./RSCList";
import { QueryRunner } from './QueryRunner';
import { Section } from "./Section";
import { DocumentationLinks } from "./DocumentationLinks";
import { ProcessTeamsContext } from './ConnectedResources.jsx';

const MainContent = () => {
    const [resourceIDsActive, toggleResourceIDsActive] = useState(true);
    const [queryRunnerActive, toggleQueryRunnerActive] = useState(true);
    const [grantedRSCActive, toggleGrantedRSCActive] = useState(false);
    const [documentationLinksActive, toggleDocumentationLinksActive] = useState(false);

    return (
        <main>
            <Section
                isShow={resourceIDsActive}
                component={<ProcessTeamsContext />}
                toggleShow={toggleResourceIDsActive}
                translationString={"Table of Contents.Connected Resources"}
                idString={"connected-resource-header"}
            />
            <Section
                isShow={queryRunnerActive}
                component={<QueryRunner />}
                toggleShow={toggleQueryRunnerActive}
                translationString={"Table of Contents.Query Runner"}
                idString={"query-runner-header"}
            />
            <Section
                isShow={grantedRSCActive}
                component={<RSCList />}
                toggleShow={toggleGrantedRSCActive}
                translationString={"Table of Contents.Granted Resource-Specific Consent"}
                idString={"resource-specific-consent-header"}
            />
            <Section
                isShow={documentationLinksActive}
                component={<DocumentationLinks />}
                toggleShow={toggleDocumentationLinksActive}
                translationString={"Table of Contents.Documentation Links"}
                idString={"documentation-links-header"}
            />
        </main>
    );
};

export default MainContent;
