import React from 'react';
import PropTypes from "prop-types"

const Reservation = ({
  width = 16,
  height = 16,
  color = "#1A051D"
}) => (
  <svg width={width} height={height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.8282 3.50633L14.9948 12.2563C15.017 12.423 14.9662 12.5911 14.8555 12.7176C14.7448 12.8441 14.5849 12.9166 14.4168 12.9167H5.08342C4.79107 12.9166 4.54393 12.7001 4.50534 12.4103L3.33867 3.66033C3.31648 3.49369 3.36726 3.32558 3.47799 3.1991C3.58873 3.07261 3.74865 3.00004 3.91675 3H13.2501C13.5424 3.00007 13.7896 3.21654 13.8282 3.50633ZM12.0834 8.25V7.08333H6.83342V8.25H12.0834ZM2.35342 5.1L3.1625 11.1667H1.58342C1.40388 11.1666 1.23436 11.0839 1.12385 10.9424C1.01333 10.8009 0.974139 10.6164 1.01759 10.4422L2.35342 5.1Z" fill={color} />
  </svg>
)


Reservation.propTypes = {
  /** Reservation width */
  width: PropTypes.number,
  /** Reservation height */
  height: PropTypes.number,
  /** Reservation color */
  title: PropTypes.string,
};

export default Reservation