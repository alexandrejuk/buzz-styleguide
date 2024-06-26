import React from 'react';
import PropTypes from "prop-types"

const Check = ({
  width = 16,
  height = 16,
  color = "#1A051D"
}) => (
  <svg width={width} height={height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.4937 4.75844C11.8383 4.41385 12.397 4.41385 12.7416 4.75844C13.0861 5.10302 13.0861 5.66169 12.7416 6.00627L7.44745 11.3004C7.10287 11.645 6.54419 11.645 6.19961 11.3004L3.25844 8.35921C2.91385 8.01463 2.91385 7.45596 3.25844 7.11138C3.60302 6.7668 4.16169 6.7668 4.50627 7.11138L6.82353 9.42863L11.4937 4.75844Z" fill={color} />
  </svg>
)


Check.propTypes = {
  /** Check width */
  width: PropTypes.number,
  /** Check height */
  height: PropTypes.number,
  /** Check color */
  title: PropTypes.string,
};

export default Check