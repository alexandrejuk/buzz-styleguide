import React from 'react';
import PropTypes from "prop-types"

const Moisture = ({
  width = 16,
  height = 16,
  color = "#1A051D"
}) => (
  <svg width={width} height={height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.5 10.925C4.5 8.9125 8 5.5 8 5.5C8 5.5 11.5 8.9125 11.5 10.925C11.5 13.025 9.6625 14.25 8 14.25C6.3375 14.25 4.5 13.025 4.5 10.925ZM1 5.2375C1 4.0125 2.925 2 2.925 2C2.925 2 4.85 4.0125 4.85 5.2375C4.9375 6.55 3.8875 7.25 2.925 7.25C1.9625 7.25 1 6.55 1 5.2375ZM15 5.2375C15 6.55 13.95 7.25 13.075 7.25C12.2 7.25 11.15 6.55 11.15 5.2375C11.15 4.0125 13.075 2 13.075 2C13.075 2 15 4.0125 15 5.2375Z" fill={color} />
  </svg>
)


Moisture.propTypes = {
  /** Moisture width */
  width: PropTypes.number,
  /** Moisture height */
  height: PropTypes.number,
  /** Moisture color */
  title: PropTypes.string,
};

export default Moisture