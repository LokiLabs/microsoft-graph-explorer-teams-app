import useHeadingsData from "./useHeadingsData";
import { Menu } from "@fluentui/react-northstar";

const Headings = ({ headings }) => {
  const scrollHeadingIntoView = (headingData) => {
    return (event) => {
      event.preventDefault();
      document
        .querySelector(`#${headingData.id}`)
        .scrollIntoView({ behavior: "smooth" });
    };
  };

  const items = [
    {
        key: 'connected-resource',
        content: "Connected Resource",
        onClick: scrollHeadingIntoView(headings[0])
    },
    {
        key: "query-runner",
        content: "Query Runner",
        onClick: scrollHeadingIntoView(headings[1])

    },
    {
        key: "resource-specific-consent",
        content: "Resource-Specific-Consent",
        onClick: scrollHeadingIntoView(headings[2])
    },

    {
        key: "documentation-links",
        content: "Documentation Links",
        onClick: scrollHeadingIntoView(headings[3])
    },
]

  console.log(headings);

  return (
    <Menu defaultActiveIndex={0} items={items} vertical pointing />
  );
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
