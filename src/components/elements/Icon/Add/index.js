import React from 'react';
import PropTypes from "prop-types"

const Add = ({
  width = 16,
  height = 16,
  color = "#1A051D"
}) => (

  <svg width={width} height={height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.75 7.25H11.3161C11.6938 7.25 12 7.58579 12 8C12 8.41421 11.6938 8.75 11.3161 8.75H8.75V11.3161C8.75 11.6938 8.41421 12 8 12C7.58579 12 7.25 11.6938 7.25 11.3161V8.75H4.68394C4.30621 8.75 4 8.41421 4 8C4 7.58579 4.30621 7.25 4.68394 7.25H7.25V4.68394C7.25 4.30621 7.58579 4 8 4C8.41421 4 8.75 4.30621 8.75 4.68394V7.25Z" fill={color} />
  </svg>
)


Add.propTypes = {
  /** Add width */
  width: PropTypes.number,
  /** Add height */
  height: PropTypes.number,
  /** Add color */
  title: PropTypes.string,
};

export default Add