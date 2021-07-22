import React from "react";
import "./Welcome.css";
// import { useTeamsFx } from "./lib/useTeamsFx";
// import { TeamsUserCredential } from "@microsoft/teamsfx";
// import { useData } from "./lib/useData";



import TableOfContents from "./TableOfContents";
import MainContent from "./MainContent";
import Layout from "./Layout";


export function Welcome(props) {

  // const { isInTeams } = useTeamsFx();
  // const userProfile = useData(async () => {
  //   const credential = new TeamsUserCredential();
  //   return isInTeams ? await credential.getUserInfo() : undefined;
  // })?.data;
  // const userName = userProfile ? userProfile.displayName : "";

  return (
    <Layout>
      <TableOfContents />
      <MainContent />
    </Layout>
  );
}
