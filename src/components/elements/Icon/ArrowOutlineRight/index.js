import React from 'react';
import PropTypes from "prop-types"

const ArrowOutlineRight = ({
  width = 16,
  height = 16,
  color = "#1A051D"
}) => (
  <svg width={width} height={height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.02472 8L6.20204 5.17731C5.93271 4.90799 5.93271 4.47132 6.20204 4.20199C6.47136 3.93267 6.90803 3.93267 7.17736 4.20199L10.4877 7.51234C10.757 7.78167 10.757 8.21833 10.4877 8.48766L7.17736 11.798C6.90803 12.0673 6.47136 12.0673 6.20204 11.798C5.93271 11.5287 5.93271 11.092 6.20204 10.8227L9.02472 8Z" fill={color} />
  </svg>
)


ArrowOutlineRight.propTypes = {
  /** ArrowOutlineRight width */
  width: PropTypes.number,
  /** ArrowOutlineRight height */
  height: PropTypes.number,
  /** ArrowOutlineRight color */
  title: PropTypes.string,
};

export default ArrowOutlineRight