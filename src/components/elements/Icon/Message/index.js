import React from 'react';
import PropTypes from "prop-types"

const Message = ({
  width = 16,
  height = 16,
  color = "#1A051D"
}) => (
  <svg width={width} height={height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.125 5.5C14.608 5.5 15 5.892 15 6.375V12.5C15 12.983 14.608 13.375 14.125 13.375H12.375V16L9.75 13.375H5.375L6.9745 11.625H12.375C12.858 11.625 13.25 11.233 13.25 10.75V5.5H14.125ZM1.875 2H10.625C11.108 2 11.5 2.392 11.5 2.875V9C11.5 9.483 11.108 9.875 10.625 9.875H6.25L3.625 12.5V9.875H1.875C1.392 9.875 1 9.483 1 9V2.875C1 2.392 1.392 2 1.875 2Z" fill={color} />
  </svg>
)


Message.propTypes = {
  /** Message width */
  width: PropTypes.number,
  /** Message height */
  height: PropTypes.number,
  /** Message color */
  title: PropTypes.string,
};

export default Message