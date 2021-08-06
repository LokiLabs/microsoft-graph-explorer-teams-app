import React from "react";

import Layout from "./sample/Layout";
import TableOfContents from "./sample/app/TableOfContents";
import MainContent from "./sample/app/MainContent";

export default function Tab() {
  return (
    <Layout>
      <TableOfContents />
      <MainContent />
    </Layout>
  );
}
