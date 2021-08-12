import React from 'react';
import MonacoEditor from 'react-monaco-editor';
import PropTypes from 'prop-types';
import { useTeamsFx } from "../../utils/useTeamsFx";


const Monaco = ( props ) => {
  let { body, height, onChange, readOnly } = props;

  const { themeString } = useTeamsFx();

  if (body && typeof body !== 'string') {
    body = formatJsonStringForAllBrowsers(body);
  }

  return (
    <MonacoEditor
      height={ height || '300px' }
      value={ body || '' }
      language='json'
      options={{
        lineNumbers: 'off',
        automaticLayout: true,
        minimap: { enabled: false },
        scrollbar: {
          horizontalHasArrows: true,
          horizontal: 'visible',
          horizontalScrollbarSize: 17,
        },
        readOnly,
        wordWrap: 'on'
      }}
      onChange={onChange}
      theme={themeString === 'default' ? 'vs' : 'vs-dark'}
    />
  );
};


function formatJsonStringForAllBrowsers(body) {
  /**
   * 1. Remove whitespace, tabs or raw string (Safari related issue)
   * 2. Convert back to javascript object
   * 3. format the string (works for all browsers)
   */

  body = JSON.stringify(body).replace(/(?:\\[rnt]|[\r\n\t]+)+/g, '');
  body = JSON.parse(body);
  return JSON.stringify(body, null, 4);
}

Monaco.propTypes= {
    body: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    readOnly: PropTypes.bool,
    height: PropTypes.number
};


export default Monaco;