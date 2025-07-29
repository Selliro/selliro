import React from "react";
import PropTypes from "prop-types";

const CommonLink = ({ label, href, className = "" }) => (
  <a href={href} className={className}>
    {label}
  </a>
);

CommonLink.propTypes = {
  label: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default CommonLink;