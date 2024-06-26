import React from 'react';
import PropTypes from "prop-types"

const Loading = ({
  width = 16,
  height = 16,
  color = "#1A051D"
}) => (
  <svg width={width} height={height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_51_910)">
      <path d="M8 9.66371C7.11634 9.66371 6.4 8.8962 6.4 7.94943C6.4 7.00265 7.11634 6.23514 8 6.23514C8.88366 6.23514 9.6 7.00265 9.6 7.94943C9.6 8.8962 8.88366 9.66371 8 9.66371ZM1.6 10.8066C0.716344 10.8066 0 10.0391 0 9.09228C0 8.14551 0.716344 7.378 1.6 7.378C2.48366 7.378 3.2 8.14551 3.2 9.09228C3.2 10.0391 2.48366 10.8066 1.6 10.8066ZM14.4 8.52086C13.5163 8.52086 12.8 7.75334 12.8 6.80657C12.8 5.8598 13.5163 5.09229 14.4 5.09229C15.2837 5.09229 16 5.8598 16 6.80657C16 7.75334 15.2837 8.52086 14.4 8.52086Z" fill={color} />
    </g>
    <defs>
      <clipPath id="clip0_51_910">
        <rect width={width} height={height} fill="white" />
      </clipPath>
    </defs>
  </svg>
)


Loading.propTypes = {
  /** Loading width */
  width: PropTypes.number,
  /** Loading height */
  height: PropTypes.number,
  /** Loading color */
  title: PropTypes.string,
};

export default Loading