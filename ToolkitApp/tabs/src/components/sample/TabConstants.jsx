export const GRAPH_EXPLORER_URL = "https://developer.microsoft.com/en-us/graph/graph-explorer";
export const GRAPH_EXPLORER_DOCS_URL = "https://docs.microsoft.com/en-us/graph/api/resources/teams-api-overview?view=graph-rest-1.0";
export const RSC_DOCUMENATION_URL = "https://raw.githubusercontent.com/MicrosoftDocs/msteams-docs/master/msteams-platform/graph-api/rsc/resource-specific-consent.md";
export const README_HEADER = "---";
export const MS_GRAPH_DOCS = "(https://docs.microsoft.com/en-us/";
//TO DO: Support multi languages. Attached to ADO ticket #38594

// This list of RSC permissions is copied directly from `webApplicationInfo.applicationPermissions` in "../../../../teamsApp/manifest.json"
export const RSC_LIST = [   "TeamSettings.Read.Group",
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
                            "OnlineMeeting.ReadBasic.Chat"]