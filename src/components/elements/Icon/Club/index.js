import React from 'react';
import PropTypes from "prop-types"

const Club = ({
  width = 16,
  height = 16,
  color = "#1A051D"
}) => (
  <svg width={width} height={height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.3333 1.5H3.66667C3.34167 1.5 3.125 1.71667 3.125 2.04167V5.29167C3.125 7.78333 5.02083 9.84167 7.45833 10.1125V13.4167H5.29167C4.96667 13.4167 4.75 13.6333 4.75 13.9583C4.75 14.2833 4.96667 14.5 5.29167 14.5H10.7083C11.0333 14.5 11.25 14.2833 11.25 13.9583C11.25 13.6333 11.0333 13.4167 10.7083 13.4167H8.54167V10.1125C10.9792 9.84167 12.875 7.78333 12.875 5.29167V2.04167C12.875 1.71667 12.6583 1.5 12.3333 1.5ZM11.7917 2.58333V4.75H4.20833V2.58333H11.7917Z" fill={color} />
  </svg>
)


Club.propTypes = {
  /** Club width */
  width: PropTypes.number,
  /** Club height */
  height: PropTypes.number,
  /** Club color */
  title: PropTypes.string,
};

export default Club