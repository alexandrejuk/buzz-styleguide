import React from 'react';
import PropTypes from "prop-types"

const More = ({
  width = 16,
  height = 16,
  color = "#1A051D"
}) => (
  <svg width={width} height={height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 9.5C7.17157 9.5 6.5 8.82843 6.5 8C6.5 7.17157 7.17157 6.5 8 6.5C8.82843 6.5 9.5 7.17157 9.5 8C9.5 8.82843 8.82843 9.5 8 9.5ZM1.5 9.5C0.671573 9.5 0 8.82843 0 8C0 7.17157 0.671573 6.5 1.5 6.5C2.32843 6.5 3 7.17157 3 8C3 8.82843 2.32843 9.5 1.5 9.5ZM14.5 9.5C13.6716 9.5 13 8.82843 13 8C13 7.17157 13.6716 6.5 14.5 6.5C15.3284 6.5 16 7.17157 16 8C16 8.82843 15.3284 9.5 14.5 9.5Z" fill={color} />
  </svg>
)


More.propTypes = {
  /** More width */
  width: PropTypes.number,
  /** More height */
  height: PropTypes.number,
  /** More color */
  title: PropTypes.string,
};

export default More