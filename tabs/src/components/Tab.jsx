import React from "react";

import Layout from "./sample/Layout";
import TableOfContents from "./sample/TableOfContents";
import MainContent from "./sample/MainContent";

export default function Tab() {
  return (
    <Layout>
      <TableOfContents />
      <MainContent />
    </Layout>
  );
}
