import React from 'react';
import PropTypes from "prop-types"

const Contacts = ({
  width = 16,
  height = 16,
  color = "#1A051D"
}) => (
  <svg width={width} height={height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.625 1C11.5875 1 12.375 1.7875 12.375 2.75V13.25C12.375 14.2125 11.5875 15 10.625 15H1V1H10.625ZM9.75 7.125V3.625H3.625V7.125H9.75ZM14.125 2.75C14.6082 2.75 15 3.14175 15 3.625V4.5C15 4.98325 14.6082 5.375 14.125 5.375C13.6418 5.375 13.25 4.98325 13.25 4.5V3.625C13.25 3.14175 13.6418 2.75 14.125 2.75ZM14.125 6.25C14.6082 6.25 15 6.64175 15 7.125V8C15 8.48325 14.6082 8.875 14.125 8.875C13.6418 8.875 13.25 8.48325 13.25 8V7.125C13.25 6.64175 13.6418 6.25 14.125 6.25Z" fill={color} />
  </svg>
)


Contacts.propTypes = {
  /** Contacts width */
  width: PropTypes.number,
  /** Contacts height */
  height: PropTypes.number,
  /** Contacts color */
  title: PropTypes.string,
};

export default Contacts