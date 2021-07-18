import { Accordion } from '@fluentui/react-northstar';
import { RSCList } from "./RSCList";
import { RSCDocumentation } from "./RSCDocumentation";
import { GRAPH_EXPLORER_URL, GRAPH_EXPLORER_DOCS_URL, OFFICIAL_RSC_URL} from "./TabConstants";

const dummyText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus vestibulum sed arcu non odio. Volutpat diam ut venenatis tellus in metus vulputate. Tellus in hac habitasse platea. Non quam lacus suspendisse faucibus interdum posuere. Est ante in nibh mauris cursus. Duis ut diam quam nulla porttitor massa. Eget felis eget nunc lobortis. Quisque non tellus orci ac auctor augue mauris augue neque. Nibh cras pulvinar mattis nunc sed blandit libero volutpat sed. Cursus risus at ultrices mi tempus imperdiet nulla malesuada. Porta non pulvinar neque laoreet suspendisse interdum consectetur libero id. Tristique nulla aliquet enim tortor at. Volutpat consequat mauris nunc congue. Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus. Phasellus faucibus scelerisque eleifend donec pretium. Sed faucibus turpis in eu mi bibendum neque egestas. Purus in massa tempor nec feugiat nisl pretium fusce. Nunc sed velit dignissim sodales. Et netus et malesuada fames ac turpis egestas maecenas. Convallis tellus id interdum velit laoreet id donec ultrices tincidunt. Dui sapien eget mi proin sed libero enim sed faucibus. Tempus imperdiet nulla malesuada pellentesque. Aliquet eget sit amet tellus cras adipiscing enim. Cursus metus aliquam eleifend mi in. Elementum sagittis vitae et leo duis. Ac turpis egestas sed tempus urna. Ac odio tempor orci dapibus ultrices in iaculis nunc. Habitasse platea dictumst quisque sagittis purus sit. Sed velit dignissim sodales ut eu sem integer vitae justo.";

  const panels = [
    {
      title: {
        content: <h2 id="connected-resource">Connected Resource</h2>
      },
      content:  <div>
                  <p>REMOVE LOREM IPSUM AND PLACE CONNECTED RESOURCES HERE</p>
                  <p>{dummyText}</p>
                </div>,
    },
    {
      title: (
        <h2 id="query-runner">Query Runner</h2>
      ),
      content:  <div>
                  <p>REMOVE LOREM IPSUM AND PLACE QUERY RUNNER HERE</p>
                  <p>{dummyText}</p>
                </div>,
    },
    {
      title: (
        <h2 id="resource-specific-consent">Resource-specific consent</h2>
      ),
      content:  <div>
                  <p>REMOVE LOREM IPSUM AND PLACE RESOURCE-SPECIFIC CONSENT HERE</p>
                  <p>{dummyText}</p>
                </div>,
    },
    {
      title: (
        <h2 id="documentation-links">Documentation Links</h2>
      ),
      content:  <div>
                  <p>REMOVE LOREM IPSUM AND PLACE DOCUMENTATION LINKS HERE</p>
                  <p>{dummyText}</p>
                </div>,
    },
  ]

const MainContent = () => {
  return (
    <main>
        <Accordion defaultActiveIndex={[0, 1, 2, 3]} panels={panels} />
    </main>
  );
};

export default MainContent;
