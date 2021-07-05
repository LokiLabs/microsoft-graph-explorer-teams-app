import React from "react";
import { Image } from "@fluentui/react-northstar";
import "./Welcome.css";
import { useTeamsFx } from "./lib/useTeamsFx";
import { TeamsUserCredential } from "@microsoft/teamsfx";
import { useData } from "./lib/useData";
import { RSCList } from "./RSCList";
import { RSCDocumentation } from "./RSCDocumentation";
import { PrimaryButton } from "office-ui-fabric-react";
import { GRAPH_EXPLORER_URL, GRAPH_EXPLORER_DOCS_URL } from "./TabConstants"

export function Welcome(props) {
  const { environment } = {
    showFunction: true,
    environment: window.location.hostname === "localhost" ? "local" : "azure",
    ...props,
  };
  const friendlyEnvironmentName =
    {
      local: "local environment",
      azure: "Azure environment",
    }[environment] || "local environment";

  const { isInTeams } = useTeamsFx();
  const userProfile = useData(async () => {
    const credential = new TeamsUserCredential();
    return isInTeams ? await credential.getUserInfo() : undefined;
  })?.data;
  const userName = userProfile ? userProfile.displayName : "";
  return (
    <div className="welcome page">
      <div className="narrow page-padding">
        <Image src="hello.png" />
        <h1 className="left">Congratulations{userName ? ", " + userName : ""}!</h1>
        <p className="left">Your app is running in your {friendlyEnvironmentName}</p>
        <p className="left">The app acts as a proxy to send requests to the Azure Active Directory as an application.</p>
        <p className="left">Use this app to test or demo Microsoft Graph requests using Resource Consent permissions</p>
        <div class="left" style={{ display: 'flex' }}>
          <PrimaryButton onClick={() => window.open(GRAPH_EXPLORER_URL)} text="Go to Graph Explorer" />
          <div class="divider" />
          <PrimaryButton onClick={() => window.open(GRAPH_EXPLORER_DOCS_URL)} text="Graph Explorer Docs!" />
        </div>
        <RSCList />
        <RSCDocumentation />
      </div>
    </div>
  );
}
