import React from 'react';
import PropTypes from "prop-types"

const Trending = ({
  width = 16,
  height = 16,
  color = "#1A051D"
}) => (
  <svg width={width} height={height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.50778 6.50637C9.50778 6.50637 10.1605 2.66688 7.49703 1C7.41677 2.33425 6.77206 3.57117 5.72428 4.40112C4.58678 5.40125 2.4474 7.65 2.47015 10.0475C2.45348 12.1381 3.62368 14.0574 5.48978 15C5.5558 14.0652 5.99544 13.1963 6.70953 12.5894C7.31459 12.124 7.70741 11.4352 7.79978 10.6775C9.39275 11.5243 10.423 13.1465 10.5123 14.9484V14.9598C12.2729 14.1533 13.4319 12.4269 13.5118 10.492C13.7008 8.23975 12.467 5.17725 11.3724 4.17625C10.9591 5.09889 10.3174 5.90088 9.50778 6.50637Z" fill={color} />
  </svg>
)


Trending.propTypes = {
  /** Trending width */
  width: PropTypes.number,
  /** Trending height */
  height: PropTypes.number,
  /** Trending color */
  title: PropTypes.string,
};

export default Trending