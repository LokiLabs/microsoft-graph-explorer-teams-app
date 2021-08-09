import React from "react";

import Layout from "./components/Layout";
import TableOfContents from "./components/app/TableOfContents";
import MainContent from "./components/app/MainContent";

export default function Tab() {
  return (
    <Layout>
      <TableOfContents />
      <MainContent />
    </Layout>
  );
}
