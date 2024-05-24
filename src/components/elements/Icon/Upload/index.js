import React from 'react';
import PropTypes from "prop-types"

const Upload = ({
  width = 16,
  height = 16,
  color = "#1A051D"
}) => (
  <svg width={width} height={height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.0625 5.1875L10.8125 7.9375L5.9375 12.8125C5.8125 12.9375 5.6875 13 5.5 13H3.625C3.25 13 3 12.75 3 12.375V10.5C3 10.3125 3.0625 10.1875 3.1875 10.0625L8.0625 5.1875ZM12.8125 5.0625C13.0625 5.3125 13.0625 5.6875 12.8125 5.9375L11.6875 7.0625L8.9375 4.3125L10.0625 3.1875C10.3125 2.9375 10.6875 2.9375 10.9375 3.1875L12.8125 5.0625Z" fill={color} />
  </svg>
)


Upload.propTypes = {
  /** Upload width */
  width: PropTypes.number,
  /** Upload height */
  height: PropTypes.number,
  /** Upload color */
  title: PropTypes.string,
};

export default Upload