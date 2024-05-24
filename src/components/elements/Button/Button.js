import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'
import styles from './Button.module.css';

/**
 * Button Component
 */
const Button = ({ label, onClick, disabled, size, type }) => (
  <button
    className={classNames(styles.btn, { 
      [styles[size]]: size, 
      [styles[type]]: type,
    })}
    onClick={onClick}
    disabled={disabled}
  >
    {label}
  </button>
);

Button.propTypes = {
  /** Label is children value */
  label: PropTypes.string.isRequired,
  /** Action of button */
  onClick: PropTypes.func,
  /** State disable */
  disabled: PropTypes.bool,
  /** Size */
  size: PropTypes.string,
  /** Type */
  type: PropTypes.string,
};

export default Button;
