import React from 'react';
import PropTypes from "prop-types"

const ArrowGlyphDown = ({
  width = 16,
  height = 16,
  color = "#1A051D"
}) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.41506 6.65079L7.24084 11.1142C7.60026 11.5335 8.23156 11.5821 8.65089 11.2227C8.68977 11.1893 8.72603 11.1531 8.75935 11.1142L12.5851 6.65079C12.9446 6.23147 12.896 5.60017 12.4767 5.24074C12.2954 5.08539 12.0646 5 11.8259 5L4.17432 5C3.62203 5 3.17432 5.44772 3.17432 6C3.17432 6.23871 3.25971 6.46955 3.41506 6.65079Z" fill={color} />
  </svg>
)



ArrowGlyphDown.propTypes = {
  /** ArrowGlyphDown width */
  width: PropTypes.number,
  /** ArrowGlyphDown height */
  height: PropTypes.number,
  /** ArrowGlyphDown color */
  title: PropTypes.string,
};

export default ArrowGlyphDown