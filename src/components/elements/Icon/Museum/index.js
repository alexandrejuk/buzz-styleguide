import React from 'react';
import PropTypes from "prop-types"

const Museum = ({
  width = 16,
  height = 16,
  color = "#1A051D"
}) => (
  <svg width={width} height={height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.4167 13.8333H15V15H1V13.8333H1.58333V8.58333H1V7.41667H15V8.58333H14.4167V13.8333ZM13.25 13.8333V8.58333H11.5V13.8333H13.25ZM8.58333 8.58333V13.8333H10.3333V8.58333H8.58333ZM7.41667 13.8333V8.58333H5.66667V13.8333H7.41667ZM2.75 8.58333V13.8333H4.5V8.58333H2.75ZM8.58333 2.80833C10.625 2.98333 12.2583 4.38333 12.9 6.25H3.04167C3.74167 4.38333 5.375 2.98333 7.41667 2.80833V1.58333C7.41667 1.23333 7.65 1 8 1C8.35 1 8.58333 1.23333 8.58333 1.58333V2.80833Z" fill={color} />
  </svg>
)


Museum.propTypes = {
  /** Museum width */
  width: PropTypes.number,
  /** Museum height */
  height: PropTypes.number,
  /** Museum color */
  title: PropTypes.string,
};

export default Museum