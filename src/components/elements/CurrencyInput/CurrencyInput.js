import React from 'react';
import PropTypes from 'prop-types';
import styles from './CurrencyInput.module.css';

/**
 * CurrencyInput Component
 */
const CurrencyInput = ({
  placeholder,
  name,
  onChange,
  value,
}) => {
  const handleChange = (event) => {
    let value = event.target.value
    value = value.replace(/\D/g, '')
    while (value.length < 3) {
      value = '0' + value
    }

    if(value.length === 4) {
      if(Number(value.substr(0, 1)) === 0) {
        value = value.substr(1)
      }
    }

    value = value.replace(/(\d{2})$/, ',$1');
    value = value.replace(/(?=(\d{3})+(\D))\B/g, '.')
    value = `R$ ${value}`;

    event.target.value = value
    return event
  }

  return (
    <input
      className={styles.input}
      value={value} 
      onChange={(event) => onChange(handleChange(event))}
      placeholder={placeholder}
      name={name}
    />
  )
};

CurrencyInput.propTypes = {
  /** placeholder */
  placeholder: PropTypes.string,
  /** onChange function */
  onChange: PropTypes.func.isRequired,
  /** name  */
  name: PropTypes.string.isRequired,
  /** value  */
  value: PropTypes.string.isRequired,
};

export default CurrencyInput;
