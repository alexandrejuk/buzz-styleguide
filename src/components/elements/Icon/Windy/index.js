import React from 'react';
import PropTypes from "prop-types"

const Windy = ({
  width = 16,
  height = 16,
  color = "#1A051D"
}) => (
  <svg width={width} height={height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.125 7.25H1V5.5H7.125C7.65 5.5 8 5.15 8 4.625C8 4.1 7.65 3.75 7.125 3.75C6.6 3.75 6.25 4.1 6.25 4.625H4.5C4.5 3.1375 5.6375 2 7.125 2C8.6125 2 9.75 3.1375 9.75 4.625C9.75 6.1125 8.6125 7.25 7.125 7.25ZM12.375 14.25C10.8875 14.25 9.75 13.1125 9.75 11.625H11.5C11.5 12.15 11.85 12.5 12.375 12.5C12.9 12.5 13.25 12.15 13.25 11.625C13.25 11.1 12.9 10.75 12.375 10.75H1V9H12.375C13.8625 9 15 10.1375 15 11.625C15 13.1125 13.8625 14.25 12.375 14.25Z" fill={color} />
  </svg>
)


Windy.propTypes = {
  /** Windy width */
  width: PropTypes.number,
  /** Windy height */
  height: PropTypes.number,
  /** Windy color */
  color: PropTypes.string,
};

export default Windy