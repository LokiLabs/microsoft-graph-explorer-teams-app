export const GRAPH_EXPLORER_URL = "https://developer.microsoft.com/en-us/graph/graph-explorer";
export const GRAPH_EXPLORER_DOCS_URL = "https://docs.microsoft.com/en-us/graph/api/resources/teams-api-overview?view=graph-rest-1.0";
export const RSC_DOCUMENTATION_URL = "https://raw.githubusercontent.com/MicrosoftDocs/msteams-docs/master/msteams-platform/graph-api/rsc/resource-specific-consent.md";
export const OFFICIAL_RSC_URL = "https://docs.microsoft.com/en-us/microsoftteams/platform/graph-api/rsc/resource-specific-consent#:~:text=Resource-specific%20consent%20%28RSC%29%20is%20a%20Microsoft%20Teams%20and,manage%20specific%20resources%E2%80%94either%20teams%20or%20chats%E2%80%94within%20an%20organization.";
export const README_HEADER = "---";
export const MS_GRAPH_DOCS = "(https://docs.microsoft.com/en-us/";

// Application ID for Graph explorer (official site)
export const CLIENT_APP_ID = "de8bc8b5-d9f9-48b1-a8ad-b748da725064";

// TODO: Change this URL to `https://gi21devxapi-devtest.azurewebsites.net` once the DevX API `interns/feature/ge-app-mode-proxy-endpoint` branch is merged into `interns/dev`. ADO ticket #39398
export const DEVX_API_URL = "https://localhost:44399";
export const RSC_API_URL = "https://graphwebapi.azurewebsites.net/graphproxy/";

export const GRAPH_URL = "https://graph.microsoft.com/";

export const requestTypes = {
    GET: "GET",
    POST: "POST",
    DELETE: "DELETE",
    PATCH: "PATCH",
    PUT: "PUT"
};

export const graphVersions = {
    v1: "v1.0",
    beta: "beta"
};
//TO DO: Support multi languages. Attached to ADO ticket #38594
export const TEAMS_CHANNEL_ID = "Teams Channel ID: ";
export const CHAT = "Chat";
export const CHAT_ID = "Chat ID: ";
export const NO_CONNECTED_RESOURCES = "No connected resources. Please connect to a Teams or Chats instance";
