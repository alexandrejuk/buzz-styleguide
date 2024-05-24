import React from 'react';
import PropTypes from "prop-types"

const Call = ({
  width = 16,
  height = 16,
  color = "#1A051D"
}) => (
  <svg width={width} height={height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.3744 11.7669C14.7148 12.109 14.7139 12.6611 14.3726 13.0024L12.375 15C6.0925 15 1 9.9075 1 3.625L1.0035 3.62762L3.0125 1.6195C3.35462 1.27737 3.9085 1.27737 4.25062 1.6195L6.50812 3.8805C6.84937 4.22263 6.8485 4.7765 6.50725 5.11775L4.5 7.125L8.875 11.5L10.8796 9.49537C11.2218 9.15325 11.7774 9.15325 12.1186 9.49712L14.3744 11.7669ZM15 8H13.25C13.25 5.10462 10.8954 2.75 8 2.75V1C11.8596 1 15 4.14037 15 8ZM11.5 8H9.75C9.75 7.03487 8.96513 6.25 8 6.25V4.5C9.93025 4.5 11.5 6.06975 11.5 8Z" fill={color} />
  </svg>
)


Call.propTypes = {
  /** Call width */
  width: PropTypes.number,
  /** Call height */
  height: PropTypes.number,
  /** Call color */
  title: PropTypes.string,
};

export default Call