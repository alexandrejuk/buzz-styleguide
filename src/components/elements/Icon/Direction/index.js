import React from 'react';
import PropTypes from "prop-types"

const Direction = ({
  width = 16,
  height = 16,
  color = "#1A051D"
}) => (
  <svg width={width} height={height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.80557 5.38894L12.6945 2.27783C13.3167 2.12227 13.8611 2.66672 13.7056 3.28894L10.5945 14.1778C10.3611 14.8778 9.42779 14.9556 9.11668 14.2556L6.93891 9.12227L1.80557 6.94449C1.02779 6.5556 1.10557 5.62227 1.80557 5.38894Z" fill={color} />
  </svg>
)


Direction.propTypes = {
  /** Direction width */
  width: PropTypes.number,
  /** Direction height */
  height: PropTypes.number,
  /** Direction color */
  title: PropTypes.string,
};

export default Direction