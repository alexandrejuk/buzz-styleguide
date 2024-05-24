import React from 'react';
import PropTypes from "prop-types"

const MoneyOff = ({
  width = 16,
  height = 16,
  color = "#1A051D"
}) => (
  <svg width={width} height={height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.37492 4.175C9.70992 4.175 10.2049 4.8125 10.2499 5.75H11.9074C11.8549 4.46 11.0674 3.275 9.49992 2.8925V1.25H7.24992V2.87C6.85242 2.96 6.47742 3.095 6.13992 3.275L7.24242 4.3775C7.54992 4.25 7.92492 4.175 8.37492 4.175ZM2.99742 2.045L2.04492 2.9975L4.62492 5.5775C4.62492 7.1375 5.79492 7.985 7.55742 8.51L10.1899 11.1425C9.93492 11.5025 9.40242 11.825 8.37492 11.825C6.82992 11.825 6.22242 11.135 6.13992 10.25H4.48992C4.57992 11.8925 5.80992 12.815 7.24992 13.1225V14.75H9.49992V13.1375C10.2199 13.0025 10.8649 12.725 11.3374 12.2975L13.0024 13.9625L13.9549 13.01L2.99742 2.045Z" fill={color} />
  </svg>
)


MoneyOff.propTypes = {
  /** MoneyOff width */
  width: PropTypes.number,
  /** MoneyOff height */
  height: PropTypes.number,
  /** MoneyOff color */
  title: PropTypes.string,
};

export default MoneyOff