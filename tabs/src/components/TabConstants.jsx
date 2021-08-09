export const UNLOCALIZED_GRAPH_EXPLORER_URL = "https://developer.microsoft.com/{LOCALE}/graph/graph-explorer";
export const UNLOCALIZED_GRAPH_EXPLORER_DOCS_URL = "https://docs.microsoft.com/{LOCALE}/graph/api/resources/teams-api-overview?view=graph-rest-1.0";
export const UNLOCALIZED_OFFICIAL_RSC_URL = "https://docs.microsoft.com/{LOCALE}/microsoftteams/platform/graph-api/rsc/resource-specific-consent#:~:text=Resource-specific%20consent%20%28RSC%29%20is%20a%20Microsoft%20Teams%20and,manage%20specific%20resources%E2%80%94either%20teams%20or%20chats%E2%80%94within%20an%20organization.";
export const UNLOCALIZED_MS_GRAPH_DOCS = "https://docs.microsoft.com/{LOCALE}/";

export function localizeUrl(url, i18n) {
    return url.replace("{LOCALE}", i18n.language);
}

// Application ID for Graph explorer (official site)
export const CLIENT_APP_ID = "de8bc8b5-d9f9-48b1-a8ad-b748da725064";

// TODO: Change this URL to `https://gi21devxapi-devtest.azurewebsites.net` once the DevX API `interns/feature/ge-app-mode-proxy-endpoint` branch is merged into `interns/dev`. ADO ticket #39398
export const DEVX_API_URL = "https://graphwebapi.azurewebsites.net/graphproxy";
export const SAMPLE_QUERIES_URL = "https://gi21devxapi-devtest.azurewebsites.net/samples?org=LokiLabs&branchName=interns/feature/app-mode-sample-queries";
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
