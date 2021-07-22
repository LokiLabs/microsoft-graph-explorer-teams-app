import { useState, useEffect } from "react";

const getNestedHeadings = (headingElements) => {
  let nestedHeadings = [];

  headingElements.forEach((heading) => {
    const { innerText: title, id } = heading;

    if (heading.nodeName === "H2") {
      nestedHeadings = [...nestedHeadings, { id, title, items: [] }];
    }

    if (heading.nodeName === "H3") {
      let lastKnownH2 = nestedHeadings[nestedHeadings.length - 1];
      lastKnownH2.items.push({ id, title });
    }
  });
  console.log(nestedHeadings);
  return nestedHeadings;
};

const useHeadingsData = () => {
  const [nestedHeadings, setNestedHeadings] = useState([]);

  useEffect(() => {
    const headingElements = Array.from(document.querySelectorAll("h2, h3"));
    const newNestedHeadings = getNestedHeadings(headingElements);

    setNestedHeadings(newNestedHeadings);
  }, []);


  // console.log(nestedHeadings);
  return nestedHeadings;
};

export default useHeadingsData;
