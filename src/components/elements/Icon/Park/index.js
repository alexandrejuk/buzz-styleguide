import React from 'react';
import PropTypes from "prop-types"

const Park = ({
  width = 16,
  height = 16,
  color = "#1A051D"
}) => (
  <svg width={width} height={height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.0094 6.295C12.0564 6.08964 12.0801 5.87972 12.0801 5.66667C12.0801 4.20634 11.0014 2.99353 9.59892 2.78247C9.24374 1.73914 8.25138 1 7.12174 1C5.67423 1 4.49674 2.17749 4.49674 3.625C4.49674 3.71985 4.50301 3.81584 4.51583 3.91439C3.77527 4.45984 3.33008 5.32031 3.33008 6.25C3.33008 6.32947 3.33378 6.40894 3.34176 6.48983C2.29415 6.94385 1.58008 7.99288 1.58008 9.16667C1.58008 10.7748 2.88859 12.0833 4.49674 12.0833H7.41341V13.8333H5.08008C4.75793 13.8333 4.49674 14.0945 4.49674 14.4167C4.49674 14.7388 4.75793 15 5.08008 15H10.9134C11.2356 15 11.4967 14.7388 11.4967 14.4167C11.4967 14.0945 11.2356 13.8333 10.9134 13.8333H8.58008V12.0833H11.4967C13.1049 12.0833 14.4134 10.7748 14.4134 9.16667C14.4134 7.73311 13.3741 6.53796 12.0094 6.295Z" fill={color} />
  </svg>
)


Park.propTypes = {
  /** Park width */
  width: PropTypes.number,
  /** Park height */
  height: PropTypes.number,
  /** Park color */
  title: PropTypes.string,
};

export default Park