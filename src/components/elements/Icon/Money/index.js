import React from 'react';
import PropTypes from "prop-types"

const Money = ({
  width = 16,
  height = 16,
  color = "#1A051D"
}) => (
  <svg width={width} height={height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.22499 7.175C6.52249 6.7325 5.97499 6.275 5.97499 5.5625C5.97499 4.745 6.73249 4.175 7.99999 4.175C9.33499 4.175 9.82999 4.8125 9.87499 5.75H11.5325C11.48 4.46 10.6925 3.275 9.12499 2.8925V1.25H6.87499V2.87C5.41999 3.185 4.24999 4.13 4.24999 5.5775C4.24999 7.31 5.68249 8.1725 7.77499 8.675C9.64999 9.125 10.025 9.785 10.025 10.4825C10.025 11 9.65749 11.825 7.99999 11.825C6.45499 11.825 5.84749 11.135 5.76499 10.25H4.11499C4.20499 11.8925 5.43499 12.815 6.87499 13.1225V14.75H9.12499V13.1375C10.5875 12.86 11.75 12.0125 11.75 10.475C11.75 8.345 9.92749 7.6175 8.22499 7.175Z" fill={color} />
  </svg>
)


Money.propTypes = {
  /** Money width */
  width: PropTypes.number,
  /** Money height */
  height: PropTypes.number,
  /** Money color */
  title: PropTypes.string,
};

export default Money