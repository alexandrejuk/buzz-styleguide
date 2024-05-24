import React from 'react';
import PropTypes from "prop-types"

const Bulb = ({
  width = 16,
  height = 16,
  color = "#1A051D"
}) => (
  <svg width={width} height={height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.25 6.25C13.25 8.175 12.2 9.925 10.625 10.8V12.375H5.375V10.8C3.8 9.925 2.75 8.175 2.75 6.25C2.75 3.3625 5.1125 1 8 1C10.8875 1 13.25 3.3625 13.25 6.25ZM7.125 15C6.1625 15 5.375 14.2125 5.375 13.25H10.625C10.625 14.2125 9.8375 15 8.875 15H7.125Z" fill={color} />
  </svg>
)


Bulb.propTypes = {
  /** Bulb width */
  width: PropTypes.number,
  /** Bulb height */
  height: PropTypes.number,
  /** Bulb color */
  title: PropTypes.string,
};

export default Bulb