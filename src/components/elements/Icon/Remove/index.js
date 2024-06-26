import React from 'react';
import PropTypes from "prop-types"

const Remove = ({
  width = 16,
  height = 16,
  color = "#1A051D"
}) => (
  <svg width={width} height={height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.7661 4.23395C11.454 3.92202 10.9482 3.92202 10.6362 4.23395L8.005 6.86516L5.37379 4.23395C5.06026 3.93113 4.5619 3.93547 4.25369 4.24368C3.94547 4.55189 3.94114 5.05026 4.24396 5.36378L6.87517 7.995L4.24396 10.6262C4.03624 10.8268 3.95294 11.1239 4.02606 11.4033C4.09919 11.6826 4.31736 11.9008 4.59672 11.9739C4.87609 12.0471 5.17317 11.9638 5.37379 11.756L8.005 9.12483L10.6362 11.756C10.9497 12.0589 11.4481 12.0545 11.7563 11.7463C12.0645 11.4381 12.0689 10.9397 11.7661 10.6262L9.13484 7.995L11.7661 5.36378C12.078 5.05176 12.078 4.54597 11.7661 4.23395Z" fill={color} />
  </svg>
)


Remove.propTypes = {
  /** Remove width */
  width: PropTypes.number,
  /** Remove height */
  height: PropTypes.number,
  /** Remove color */
  title: PropTypes.string,
};

export default Remove