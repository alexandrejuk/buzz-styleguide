import React from 'react';
import PropTypes from "prop-types"

const Bridge = ({
  width = 16,
  height = 16,
  color = "#1A051D"
}) => (
  <svg width={width} height={height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.4167 11.5C14.7667 11.5 15 11.7333 15 12.0833C15 13.7167 13.7167 15 12.0833 15C11.325 15 10.5667 14.65 10.0417 14.125C9.51667 14.7083 8.75833 15 8 15C7.24167 15 6.48333 14.7083 5.95833 14.125C5.43333 14.7083 4.675 15 3.91667 15C2.28333 15 1 13.7167 1 12.0833C1 11.7333 1.23333 11.5 1.58333 11.5C1.93333 11.5 2.16667 11.7333 2.16667 12.0833C2.16667 13.075 2.925 13.8333 3.91667 13.8333C4.55833 13.8333 5.14167 13.4833 5.43333 12.9C5.66667 12.55 6.30833 12.55 6.48333 12.9C6.775 13.4833 7.35833 13.8333 8 13.8333C8.64167 13.8333 9.225 13.4833 9.51667 12.9C9.75 12.55 10.3917 12.55 10.5667 12.9C10.8583 13.4833 11.4417 13.8333 12.0833 13.8333C13.075 13.8333 13.8333 13.075 13.8333 12.0833C13.8333 11.7333 14.0667 11.5 14.4167 11.5ZM5.08333 9.16667V4.44167C5.84167 5.2 6.83333 5.66667 8 5.66667C9.16667 5.66667 10.1583 5.2 10.9167 4.44167V9.16667H5.08333ZM14.4167 1C14.7667 1 15 1.23333 15 1.58333V9.75C15 10.1 14.7667 10.3333 14.4167 10.3333H12.6667C12.3167 10.3333 12.0833 10.1 12.0833 9.75V9.16667V1.58333C12.0833 1.23333 12.3167 1 12.6667 1H14.4167ZM3.91667 9.16667V9.75C3.91667 10.1 3.68333 10.3333 3.33333 10.3333H1.58333C1.23333 10.3333 1 10.1 1 9.75V1.58333C1 1.23333 1.23333 1 1.58333 1H3.33333C3.68333 1 3.91667 1.23333 3.91667 1.58333V9.16667Z" fill={color} />
  </svg>
)


Bridge.propTypes = {
  /** Bridge width */
  width: PropTypes.number,
  /** Bridge height */
  height: PropTypes.number,
  /** Bridge color */
  title: PropTypes.string,
};

export default Bridge