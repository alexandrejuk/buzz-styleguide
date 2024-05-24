import React from 'react';
import PropTypes from "prop-types"

const Coffee = ({
  width = 16,
  height = 16,
  color = "#1A051D"
}) => (
  <svg width={width} height={height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.4167 5.08333C14.7393 5.08333 15 5.34408 15 5.66667V8C15 8.96483 14.2148 9.75 13.25 9.75H12.1761C11.2737 11.8074 9.21975 13.25 6.83333 13.25C3.61683 13.25 1 10.6332 1 7.41667V5.66667C1 5.34408 1.26075 5.08333 1.58333 5.08333H14.4167ZM13.8333 8V6.25H12.6667V7.41667C12.6667 7.81625 12.6258 8.2065 12.5488 8.58333H13.25C13.572 8.58333 13.8333 8.322 13.8333 8ZM12.0833 13.8333C12.4059 13.8333 12.6667 14.0941 12.6667 14.4167C12.6667 14.7393 12.4059 15 12.0833 15H1.58333C1.26075 15 1 14.7393 1 14.4167C1 14.0941 1.26075 13.8333 1.58333 13.8333H12.0833ZM3.33333 1.58333H4.5V3.91667H3.33333V1.58333ZM6.25 1H7.41667V3.33333H6.25V1ZM9.16667 1.58333H10.3333V3.91667H9.16667V1.58333Z" fill={color} />
  </svg>
)


Coffee.propTypes = {
  /** Coffee width */
  width: PropTypes.number,
  /** Coffee height */
  height: PropTypes.number,
  /** Coffee color */
  title: PropTypes.string,
};

export default Coffee