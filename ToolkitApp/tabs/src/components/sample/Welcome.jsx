import React from "react";
import "./Welcome.css";
import { useTeamsFx } from "./lib/useTeamsFx";
import { TeamsUserCredential } from "@microsoft/teamsfx";
import { useData } from "./lib/useData";
import { RSCList } from "./RSCList";
import { RSCDocumentation } from "./RSCDocumentation";
import { PrimaryButton } from "office-ui-fabric-react";
import { GRAPH_EXPLORER_URL, GRAPH_EXPLORER_DOCS_URL, OFFICIAL_RSC_URL} from "./TabConstants"
import { useTranslation } from "react-i18next";

export function Welcome(props) {

  const { t, i18n } = useTranslation();
  console.log(`${i18n.languages}`);
  const { isInTeams } = useTeamsFx();
  const userProfile = useData(async () => {
    const credential = new TeamsUserCredential();
    return isInTeams ? await credential.getUserInfo() : undefined;
  })?.data;
  const userName = userProfile ? userProfile.displayName : "";
  return (
    <div className="welcome page">
      <div className="narrow page-padding">
        <h1 className="center">{t('welcome.h1') + (userName ? ", " + userName : "")}!</h1>
        <p className="center">The app acts as a proxy to send requests to the Azure Active Directory as an application.</p>
        <p className="center">Use this app to test or demo Microsoft Graph requests using Resource Consent permissions</p>
        <div class="center">
          <PrimaryButton onClick={() => window.open(GRAPH_EXPLORER_URL)} text="Go to Graph Explorer" />
          <div class="divider" />
          <PrimaryButton onClick={() => window.open(GRAPH_EXPLORER_DOCS_URL)} text="Graph Explorer Docs" />
        </div>
        <RSCList />
        <br></br>
        <hr class="separator"/>
        <RSCDocumentation />
        <div class="center">
          <PrimaryButton onClick={() => window.open(OFFICIAL_RSC_URL)} text="RSC Docs" />
        </div>
      </div>
    </div>
  );
}
