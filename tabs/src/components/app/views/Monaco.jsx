import React from 'react';
import MonacoEditor from 'react-monaco-editor';
import PropTypes from 'prop-types';


const Monaco = ( props ) => {
  let { body, height, onChange, readOnly } = props;

  if (body && typeof body !== 'string') {
    body = formatJsonStringForAllBrowsers(body);
  }

  return (
    <MonacoEditor
      width='5 !important'
      height={height ? height : '300px'}
      value={body ? body : ''}
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
      theme='vs'
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