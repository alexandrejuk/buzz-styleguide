import React from 'react';
import PropTypes from "prop-types"

const Search = ({
  width = 16,
  height = 16,
  color = "#1A051D"
}) => (
  <svg width={width} height={height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.7897 13.7744C15.0701 14.0548 15.0701 14.5093 14.7897 14.7897C14.5093 15.0701 14.0548 15.0701 13.7744 14.7897L11.2616 12.2769C10.9812 11.9965 10.9812 11.5419 11.2616 11.2616C11.5419 10.9812 11.9965 10.9812 12.2769 11.2616L14.7897 13.7744ZM6.74359 12.4872C3.57149 12.4872 1 9.91569 1 6.74359C1 3.57149 3.57149 1 6.74359 1C9.91569 1 12.4872 3.57149 12.4872 6.74359C12.4872 9.91569 9.91569 12.4872 6.74359 12.4872ZM6.74359 11.0513C9.12266 11.0513 11.0513 9.12266 11.0513 6.74359C11.0513 4.36452 9.12266 2.4359 6.74359 2.4359C4.36452 2.4359 2.4359 4.36452 2.4359 6.74359C2.4359 9.12266 4.36452 11.0513 6.74359 11.0513Z" fill={color} />
  </svg>
)


Search.propTypes = {
  /** Search width */
  width: PropTypes.number,
  /** Search height */
  height: PropTypes.number,
  /** Search color */
  title: PropTypes.string,
};

export default Search