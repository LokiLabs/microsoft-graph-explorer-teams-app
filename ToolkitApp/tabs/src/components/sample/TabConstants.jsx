export const GRAPH_EXPLORER_URL = "https://developer.microsoft.com/en-us/graph/graph-explorer";
export const GRAPH_EXPLORER_DOCS_URL = "https://docs.microsoft.com/en-us/graph/api/resources/teams-api-overview?view=graph-rest-1.0";
export const RSC_DOCUMENTATION_URL = "https://raw.githubusercontent.com/MicrosoftDocs/msteams-docs/master/msteams-platform/graph-api/rsc/resource-specific-consent.md";
export const OFFICIAL_RSC_URL = "https://docs.microsoft.com/en-us/microsoftteams/platform/graph-api/rsc/resource-specific-consent#:~:text=Resource-specific%20consent%20%28RSC%29%20is%20a%20Microsoft%20Teams%20and,manage%20specific%20resources%E2%80%94either%20teams%20or%20chats%E2%80%94within%20an%20organization.";
export const README_HEADER = "---";
export const MS_GRAPH_DOCS = "(https://docs.microsoft.com/en-us/";
export const GRAPH_URL = "https://graph.microsoft.com/"
//TO DO: Support multi languages. Attached to ADO ticket #38594

// This list of RSC permissions is copied directly from `webApplicationInfo.applicationPermissions` in "../../../../teamsApp/manifest.json"
export const RSC_LIST = [
    "TeamSettings.Read.Group",
    "ChannelMessage.Read.Group",
    "TeamSettings.Edit.Group",
    "ChannelSettings.ReadWrite.Group",
    "Channel.Create.Group",
    "Channel.Delete.Group",
    "TeamsApp.Read.Group",
    "TeamsTab.Read.Group",
    "TeamsTab.Create.Group",
    "TeamsTab.ReadWrite.Group",
    "TeamsTab.Delete.Group",
    "Member.Read.Group",
    "Owner.Read.Group",
    "ChatSettings.Read.Chat",
    "ChatSettings.ReadWrite.Chat",
    "ChatMessage.Read.Chat",
    "ChatMember.Read.Chat",
    "Chat.Manage.Chat",
    "TeamsTab.Read.Chat",
    "TeamsTab.Create.Chat",
    "TeamsTab.Delete.Chat",
    "TeamsTab.ReadWrite.Chat",
    "TeamsAppInstallation.Read.Chat",
    "OnlineMeeting.ReadBasic.Chat"
];

export const requestTypes = {
    GET: "GET",
    POST: "POST",
    DELETE: "DELETE",
    PATCH: "PATCH",
    PUT: "PUT"
}

export const graphVersions = {
    v1: "v1.0",
    beta: "beta"
}
