export const GRAPH_EXPLORER_URL = "https://developer.microsoft.com/en-us/graph/graph-explorer";
export const GRAPH_EXPLORER_DOCS_URL = "https://docs.microsoft.com/en-us/graph/api/resources/teams-api-overview?view=graph-rest-1.0";
export const RSC_DOCUMENTATION_URL = "https://raw.githubusercontent.com/MicrosoftDocs/msteams-docs/master/msteams-platform/graph-api/rsc/resource-specific-consent.md";
export const OFFICIAL_RSC_URL = "https://docs.microsoft.com/en-us/microsoftteams/platform/graph-api/rsc/resource-specific-consent#:~:text=Resource-specific%20consent%20%28RSC%29%20is%20a%20Microsoft%20Teams%20and,manage%20specific%20resources%E2%80%94either%20teams%20or%20chats%E2%80%94within%20an%20organization.";
export const README_HEADER = "---";
export const MS_GRAPH_DOCS = "(https://docs.microsoft.com/en-us/";
export const RSC_LIST =
    [
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
    ]

export const RSC_NAME_DESCRIPTION = {
    'TeamSettings.Read.Group': "Get this team's settings.",
    'TeamSettings.ReadWrite.Group': "Update this team's settings.",
    'ChannelSettings.Read.Group': "Get this team's channel names, channel descriptions, and channel settings.",
    'ChannelSettings.ReadWrite.Group': "Update this team's channel names, channel descriptions, and channel settings.",
    'Channel.Create.Group': 'Create channels in this team.',
    'Channel.Delete.Group': 'Delete channels in this team.',
    'ChannelMessage.Read.Group': "Get this team's channel messages.",
    'TeamsAppInstallation.Read.Group': "Get a list of this team's installed apps.",
    'TeamsTab.Read.Group': "Get a list of this team's tabs.",
    'TeamsTab.Create.Group': 'Create tabs in this team.',
    'TeamsTab.ReadWrite.Group': "Update this team's tabs.",
    'TeamsTab.Delete.Group': "Delete this team's tabs.",
    'TeamMember.Read.Group': "Get this team's members.",
    "ChatSettings.Read.Chat": "Get this chat's settings.",
    "ChatSettings.ReadWrite.Chat": "Update this chat's settings.",
    "ChatMessage.Read.Chat": "Get this chat's messages.",
    "ChatMember.Read.Chat": "Get this chat's members.",
    "Chat.Manage.Chat": "Manage this chat.",
    "TeamsTab.Read.Chat": "Get this chat's tabs.",
    "TeamsTab.Create.Chat": "Create tabs in this chat.",
    "TeamsTab.Delete.Chat": "Delete this chat's tabs.",
    "TeamsTab.ReadWrite.Chat": "Manage this chat's tabs.",
    "TeamsAppInstallation.Read.Chat": "Get which apps are installed in this chat.",
    "OnlineMeeting.ReadBasic.Chat": "Get basic properties, such as name, schedule, organizer, and join link of a meeting associated with this chat."
}

export const items = [
    'Permissions',
    'Descriptions'
]
export const GRAPH_URL = "https://graph.microsoft.com/"

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
//TO DO: Support multi languages. Attached to ADO ticket #38594
export const TEAMS_CHANNEL_ID = "Teams Channel ID: ";
export const CHAT = "Chat";
export const CHAT_ID = "Chat ID: ";
export const NO_CONNECTED_RESOURCES = "No connected resources. Please connect to a Teams or Chats instance";