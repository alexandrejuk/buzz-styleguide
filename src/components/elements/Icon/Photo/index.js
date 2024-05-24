import React from 'react';
import PropTypes from "prop-types"

const Photo = ({
  width = 16,
  height = 16,
  color = "#1A051D"
}) => (
  <svg width={width} height={height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.4986 1.5H1.49864C0.941497 1.5 0.570068 1.87143 0.570068 2.42857V13.5714C0.570068 14.1286 0.941497 14.5 1.49864 14.5H14.4986C15.0558 14.5 15.4272 14.1286 15.4272 13.5714V2.42857C15.4272 1.87143 15.0558 1.5 14.4986 1.5ZM6.1415 4.28571C6.69864 4.28571 7.07007 4.65714 7.07007 5.21429C7.07007 5.77143 6.69864 6.14286 6.1415 6.14286C5.58435 6.14286 5.21293 5.77143 5.21293 5.21429C5.21293 4.65714 5.58435 4.28571 6.1415 4.28571ZM2.42721 11.7143L4.28435 8L7.07007 9.85714L9.85578 6.14286L13.5701 11.7143H2.42721Z" fill={color} />
  </svg>
)


Photo.propTypes = {
  /** Photo width */
  width: PropTypes.number,
  /** Photo height */
  height: PropTypes.number,
  /** Photo color */
  title: PropTypes.string,
};

export default Photo