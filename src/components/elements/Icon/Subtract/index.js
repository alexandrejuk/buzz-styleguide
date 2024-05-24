import React from 'react';
import PropTypes from "prop-types"

const Subtract = ({
  width = 16,
  height = 16,
  color = "#1A051D"
}) => (
  <svg width={width} height={height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.3161 7.25C11.6938 7.25 12 7.58579 12 8C12 8.41421 11.6938 8.75 11.3161 8.75H4.68394C4.30621 8.75 4 8.41421 4 8C4 7.58579 4.30621 7.25 4.68394 7.25H11.3161Z" fill={color} />
  </svg>
)


Subtract.propTypes = {
  /** Subtract width */
  width: PropTypes.number,
  /** Subtract height */
  height: PropTypes.number,
  /** Subtract color */
  title: PropTypes.string,
};

export default Subtract