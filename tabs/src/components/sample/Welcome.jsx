import React from "react";
import "./Welcome.css";



import TableOfContents from "./TableOfContents";
import MainContent from "./MainContent";
import Layout from "./Layout";


export function Welcome() {

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
