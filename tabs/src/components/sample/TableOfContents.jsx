import React, { useState } from "react";
import useHeadingsData from "./useHeadingsData";
import useIntersectionObserver from "./useIntersectionObserver";
import { Menu } from "@fluentui/react-northstar";
import { useTranslation } from "react-i18next";
import PropTypes from 'prop-types';

const Headings = ({ headings, activeId } ) => {
  Headings.propTypes = {
    headings: PropTypes.string,
    activeId: PropTypes.string
  };

  const scrollHeadingIntoView = (headingData) => {
    return (event) => {
      event.preventDefault();
      document
        .querySelector(`#${headingData.id}`)
        .scrollIntoView({ behavior: "smooth" });
    };
  };

  const { t } = useTranslation();

  const checkIfActive = (menuItemKey, activeHeaderId) => {
    return (menuItemKey === activeHeaderId);
  };

  const items = [
    {
      key: 'resource-ids',
      content: t("Table of Contents.Resource IDs"),
      onClick: scrollHeadingIntoView(headings[0]),
      active: checkIfActive("resource-ids-header", activeId)
    },
    {
      key: 'sample-queries',
      content: t("Table of Contents.Sample Queries"),
      onClick: scrollHeadingIntoView(headings[1]),
      active: checkIfActive("sample-queries-header", activeId)
    },
    {
      key: "query-runner",
      content: t("Table of Contents.Query Runner"),
      onClick: scrollHeadingIntoView(headings[2]),
      active: checkIfActive("query-runner-header", activeId)
    },
    {
      key: "resource-specific-consent",
      content: t("Table of Contents.Granted Resource-Specific Consent"),
      onClick: scrollHeadingIntoView(headings[3]),
      active: checkIfActive("resource-specific-consent-header", activeId)
    },
    {
      key: "documentation-links",
      content: t("Table of Contents.Documentation Links"),
      onClick: scrollHeadingIntoView(headings[4]),
      active: checkIfActive("documentation-links-header", activeId)
    },
  ];

  return (
    <Menu defaultActiveIndex={0} items={items} vertical pointing />
  );
};

const TableOfContents = () => {
  const [activeId, setActiveId] = useState();
  const headingsData = useHeadingsData();
  useIntersectionObserver(setActiveId);

  return (
    <nav aria-label="Table of contents">
      <Headings headings={headingsData} activeId={activeId}/>
    </nav>
  );
};

export default TableOfContents;
