import React from 'react';
import PropTypes from "prop-types"

const Hotel = ({
  width = 16,
  height = 16,
  color = "#1A051D"
}) => (
  <svg width={width} height={height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.8333 15V14.4167V8.58333H14.4167C14.7667 8.58333 15 8.81667 15 9.16667V14.4167C15 14.7667 14.7667 15 14.4167 15H13.8333ZM2.16667 14.4167V15H1.58333C1.23333 15 1 14.7667 1 14.4167V9.16667C1 8.81667 1.23333 8.58333 1.58333 8.58333H2.16667V14.4167ZM12.0833 1C12.4333 1 12.6667 1.23333 12.6667 1.58333V14.4167C12.6667 14.7667 12.4333 15 12.0833 15H8.58333V12.6667H7.41667V15H3.91667C3.56667 15 3.33333 14.7667 3.33333 14.4167V1.58333C3.33333 1.23333 3.56667 1 3.91667 1H12.0833ZM6.83333 10.9167V9.75H5.08333V10.9167H6.83333ZM6.83333 8.58333V7.41667H5.08333V8.58333H6.83333ZM6.83333 6.25V5.08333H5.08333V6.25H6.83333ZM6.83333 3.91667V2.75H5.08333V3.91667H6.83333ZM10.9167 10.9167V9.75H9.16667V10.9167H10.9167ZM10.9167 8.58333V7.41667H9.16667V8.58333H10.9167ZM10.9167 6.25V5.08333H9.16667V6.25H10.9167ZM10.9167 3.91667V2.75H9.16667V3.91667H10.9167Z" fill={color} />
  </svg>
)


Hotel.propTypes = {
  /** Hotel width */
  width: PropTypes.number,
  /** Hotel height */
  height: PropTypes.number,
  /** Hotel color */
  title: PropTypes.string,
};

export default Hotel