import React, { useState } from 'react';
import { RSCList } from "./views/RSCList";
import { QueryRunner } from './views/QueryRunner';
import { Section } from "./Section";
import { DocumentationLinks } from "./views/DocumentationLinks";
import { ProcessTeamsContext } from './views/ConnectedResources.jsx';
import { FetchSamples } from './views/SampleQueries';
import { requestTypes, GRAPH_URL, graphVersions } from '../TabConstants';

const MainContent = () => {
    const [resourceIDsActive, toggleResourceIDsActive] = useState(true);
    const [queryRunnerActive, toggleQueryRunnerActive] = useState(true);
    const [grantedRSCActive, toggleGrantedRSCActive] = useState(false);
    const [documentationLinksActive, toggleDocumentationLinksActive] = useState(false);
    const [sampleQueriesActive, toggleSampleQueries] = useState(true);
    const [query, setQuery] = useState(GRAPH_URL);
    const [requestType, setRequestType] = useState(requestTypes.GET);
    const [requestBody, setRequestBody] = useState("{}");
    const [graphVersion, setGraphVersion] = useState(graphVersions.beta);
    const [isConnectedToResource, setIsConnectedToResource] = useState(false);

    return (
        <main>
            <Section
                isShow={resourceIDsActive}
                component={<ProcessTeamsContext
                    setIsConnectedToResource={setIsConnectedToResource}
                />}
                toggleShow={toggleResourceIDsActive}
                translationString={"Table of Contents.Resource IDs"}
                idString={"resource-ids-header"}
            />
            <Section
                isShow={sampleQueriesActive}
                component={<FetchSamples
                    setQuery={setQuery}
                    setRequestType={setRequestType}
                    setRequestBody={setRequestBody}
                    setGraphVersion={setGraphVersion} />}
                toggleShow={toggleSampleQueries}
                translationString={"Table of Contents.Sample Queries"}
                idString={"sample-queries-header"}
            />
            <Section
                isShow={queryRunnerActive}
                component={<QueryRunner
                    query={query}
                    setQuery={setQuery}
                    requestType={requestType}
                    setRequestType={setRequestType}
                    requestBody={requestBody}
                    setRequestBody={setRequestBody}
                    graphVersion={graphVersion}
                    setGraphVersion={setGraphVersion}
                    isConnectedToResource={isConnectedToResource}
                />}
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
