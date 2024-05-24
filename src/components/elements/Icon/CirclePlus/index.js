import React from 'react';
import PropTypes from "prop-types"

const CirclePlus = ({
  width = 16,
  height = 16,
  color = "#1A051D"
}) => (
  <svg width={width} height={height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M8 1C4.15 1 1 4.15 1 8C1 11.85 4.15 15 8 15C11.85 15 15 11.85 15 8C15 4.15 11.85 1 8 1ZM11.5 8.875H8.875V11.5H7.125V8.875H4.5V7.125H7.125V4.5H8.875V7.125H11.5V8.875Z"
      fill={color}
    />
  </svg> 
)


CirclePlus.propTypes = {
  /** CirclePlus width */
  width: PropTypes.number,
  /** CirclePlus height */
  height: PropTypes.number,
  /** CirclePlus color */
  title: PropTypes.string,
};

export default CirclePlus