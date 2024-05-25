import React, { forwardRef } from "react"
import PropTypes from 'prop-types'
import styles from "./Input.module.css"
/**
 * Input Component
 */

const Input = (
  props,
  ref,
) => {
  const {
    onChange,
    onClick,
    onFocus,
    value,
    type
  } = props
  return (
    <input
      className={styles.input}
      onChange={onChange}
      onClick={onClick}
      onFocus={onFocus}
      ref={ref}
      type={type}
      value={value}
    />
  )
}

Input.propTypes = {
  /** placeholder */
  placeholder: PropTypes.string,
  /** onChange function */
  onChange: PropTypes.func.isRequired,
  /** onClick function */
  onClick: PropTypes.func,
  /** onFocus function */
  onFocus: PropTypes.func,
  /** name  */
  name: PropTypes.string.isRequired,
  /** value  */
  value: PropTypes.string.isRequired,
  /** type  */
  type: PropTypes.string.isRequired,
};

export default forwardRef(Input)
