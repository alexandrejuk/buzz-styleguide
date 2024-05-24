import React from 'react';
import PropTypes from "prop-types"

const Time = ({
  width = 16,
  height = 16,
  color = "#1A051D"
}) => (
  <svg width={width} height={height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 2C4.7 2 2 4.7 2 8C2 11.3 4.7 14 8 14C11.3 14 14 11.3 14 8C14 4.7 11.3 2 8 2ZM11 8.75H7.25V5H8.75V7.25H11V8.75Z" fill={color} />
  </svg>
)


Time.propTypes = {
  /** Time width */
  width: PropTypes.number,
  /** Time height */
  height: PropTypes.number,
  /** Time color */
  title: PropTypes.string,
};

export default Time