import React from 'react';
import PropTypes from "prop-types"

const ArrowOutlineLeft = ({
  width = 16,
  height = 16,
  color = "#1A051D"
}) => (
  <svg width={width} height={height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.66497 8L9.48766 10.8227C9.75699 11.092 9.75699 11.5287 9.48766 11.798C9.21833 12.0673 8.78167 12.0673 8.51234 11.798L5.202 8.48766C4.93267 8.21833 4.93267 7.78167 5.202 7.51234L8.51234 4.202C8.78167 3.93267 9.21833 3.93267 9.48766 4.202C9.75699 4.47132 9.75699 4.90799 9.48766 5.17732L6.66497 8Z" fill={color} />
  </svg>

)


ArrowOutlineLeft.propTypes = {
  /** ArrowOutlineLeft width */
  width: PropTypes.number,
  /** ArrowOutlineLeft height */
  height: PropTypes.number,
  /** ArrowOutlineLeft color */
  title: PropTypes.string,
};

export default ArrowOutlineLeft