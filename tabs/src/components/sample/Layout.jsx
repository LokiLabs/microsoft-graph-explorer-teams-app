import React from "react";
import PropTypes from 'prop-types';

const Layout = ({ children }) => {
  return <div className='layout'>{children}</div>;
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.any
}
