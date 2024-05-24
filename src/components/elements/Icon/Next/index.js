import React from 'react';
import PropTypes from "prop-types"

const Next = ({
  width = 16,
  height = 16,
  color = "#1A051D"
}) => (
  <svg width={width} height={height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.8997 6.66394C6.63343 6.39767 6.63343 5.96597 6.8997 5.6997C7.16597 5.43343 7.59767 5.43343 7.86394 5.6997L9.68212 7.51788C9.94839 7.78415 9.94839 8.21585 9.68212 8.48212L7.86394 10.3003C7.59767 10.5666 7.16597 10.5666 6.8997 10.3003C6.63343 10.034 6.63343 9.60233 6.8997 9.33606L8.23576 8L6.8997 6.66394ZM8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15ZM8 13.4444C11.0069 13.4444 13.4444 11.0069 13.4444 8C13.4444 4.99312 11.0069 2.55556 8 2.55556C4.99312 2.55556 2.55556 4.99312 2.55556 8C2.55556 11.0069 4.99312 13.4444 8 13.4444Z" fill={color} />
  </svg>
)


Next.propTypes = {
  /** Next width */
  width: PropTypes.number,
  /** Next height */
  height: PropTypes.number,
  /** Next color */
  title: PropTypes.string,
};

export default Next