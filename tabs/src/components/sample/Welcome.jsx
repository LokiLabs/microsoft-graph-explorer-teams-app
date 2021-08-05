import React from "react";

import TableOfContents from "./TableOfContents";
import MainContent from "./MainContent";
import Layout from "./Layout";


export function Welcome() {

  return (
    <Layout>
      <TableOfContents />
      <MainContent />
    </Layout>
  );
}
