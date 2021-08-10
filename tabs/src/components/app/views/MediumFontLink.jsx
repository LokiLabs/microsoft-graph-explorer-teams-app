import React from "react";
import PropTypes from 'prop-types';

MediumFontLink.propTypes = {
    URL: PropTypes.string,
    content: PropTypes.string,
    linkColor: PropTypes.string,
};

export function MediumFontLink(props) {
    const URL = props.URL;
    const content = props.content;
    const linkColor = props.linkColor;

    return (
        <a className="medium-link" href={URL} target="_blank" rel="noreferrer noopener" style={{ color: linkColor }}>
            {content}
        </a>
    );
}
