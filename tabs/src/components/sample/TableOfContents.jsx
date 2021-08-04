import React from "react";
import useHeadingsData from "./useHeadingsData";
import { Menu } from "@fluentui/react-northstar";
import { useTranslation } from "react-i18next";
import PropTypes from 'prop-types';

const Headings = ({ headings }) => {
  const scrollHeadingIntoView = (headingData) => {
    return (event) => {
      event.preventDefault();
      document
        .querySelector(`#${headingData.id}`)
        .scrollIntoView({ behavior: "smooth" });
    };
  };

  const { t } = useTranslation();

  const items = [
    {
      key: 'connected-resource',
      content: t("Table of Contents.Connected Resources"),
      onClick: scrollHeadingIntoView(headings[0])
    },
    {
      key: 'sample-queries',
      content: t("Table of Contents.Sample Queries"),
      onClick: scrollHeadingIntoView(headings[1])
    },
    {
      key: "query-runner",
      content: t("Table of Contents.Query Runner"),
      onClick: scrollHeadingIntoView(headings[2])
    },
    {
      key: "resource-specific-consent",
      content: t("Table of Contents.Granted Resource-Specific Consent"),
      onClick: scrollHeadingIntoView(headings[3])
    },

    {
      key: "documentation-links",
      content: t("Table of Contents.Documentation Links"),
      onClick: scrollHeadingIntoView(headings[4])
    },
  ];

  return (
    <Menu defaultActiveIndex={0} items={items} vertical pointing />
  );
};

Headings.propTypes = {
  headings: PropTypes.string
};

const TableOfContents = () => {
  const headingsData = useHeadingsData();

  return (
    <nav aria-label="Table of contents">
      <Headings headings={headingsData} />
    </nav>
  );
};

export default TableOfContents;
