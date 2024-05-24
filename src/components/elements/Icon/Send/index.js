import React from 'react';
import PropTypes from "prop-types"

const Send = ({
  width = 16,
  height = 16,
  color = "#1A051D"
}) => (
  <svg width={width} height={height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.2437 1.7563C14.0048 1.5183 13.6487 1.43693 13.3311 1.55155L1.08108 5.92655C0.751205 6.0438 0.52283 6.34743 0.50183 6.69655C0.48083 7.04655 0.66983 7.37468 0.983955 7.53218L4.99671 9.53768L10.1251 5.87493L6.46146 11.0042L8.46696 15.0169C8.61658 15.3136 8.92021 15.4999 9.25008 15.4999C9.26846 15.4999 9.28596 15.4991 9.30346 15.4982C9.65346 15.4772 9.95708 15.2497 10.0752 14.9189L14.4502 2.66893C14.5631 2.3513 14.4826 1.99518 14.2437 1.7563Z" fill={color} />
  </svg>
)


Send.propTypes = {
  /** Send width */
  width: PropTypes.number,
  /** Send height */
  height: PropTypes.number,
  /** Send color */
  title: PropTypes.string,
};

export default Send