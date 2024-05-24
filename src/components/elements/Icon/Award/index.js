import React from 'react';
import PropTypes from "prop-types"

const Award = ({
  width = 16,
  height = 16,
  color = "#1A051D"
}) => (
  <svg width={width} height={height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.75 6.25012L8 1.22412L6.25 6.25012H1L5.27875 9.59962L3.597 14.7761L8 11.5771L12.403 14.7761L10.7212 9.59962L15 6.25012H9.75Z" fill={color} />
  </svg>

)


Award.propTypes = {
  /** Award width */
  width: PropTypes.number,
  /** Award height */
  height: PropTypes.number,
  /** Award color */
  title: PropTypes.string,
};

export default Award