import React from 'react';
import PropTypes from 'prop-types';
import styles from './Input.module.css';

/**
 * Input Component
 */
const Input = ({
  placeholder,
  name,
  onChange,
  value,
}) => {
  return (
    <input
      className={styles.input}
      value={value} 
      onChange={onChange}
      placeholder={placeholder}
      name={name}
    />
  )
};

Input.propTypes = {
  /** placeholder */
  placeholder: PropTypes.string,
  /** onChange function */
  onChange: PropTypes.func.isRequired,
  /** name  */
  name: PropTypes.string.isRequired,
  /** value  */
  value: PropTypes.string.isRequired,
};

export default Input;
