import React from 'react';
import PropTypes from "prop-types"

const Location = ({
  width = 16,
  height = 16,
  color = "#1A051D"
}) => (
  <svg width={width} height={height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 1.26001C4.65714 1.26001 2 3.91715 2 7.26001C2 8.88858 2.6 10.4314 3.8 11.5457C3.88571 11.6314 7.31429 14.7172 7.4 14.8029C7.74286 15.06 8.25714 15.06 8.51429 14.8029C8.6 14.7172 12.1143 11.6314 12.1143 11.5457C13.3143 10.4314 13.9143 8.88858 13.9143 7.26001C14 3.91715 11.3429 1.26001 8 1.26001ZM8 8.9743C7.05714 8.9743 6.28571 8.20287 6.28571 7.26001C6.28571 6.31715 7.05714 5.54572 8 5.54572C8.94286 5.54572 9.71429 6.31715 9.71429 7.26001C9.71429 8.20287 8.94286 8.9743 8 8.9743Z" fill={color} />
  </svg>
)


Location.propTypes = {
  /** Location width */
  width: PropTypes.number,
  /** Location height */
  height: PropTypes.number,
  /** Location color */
  title: PropTypes.string,
};

export default Location