import React, { useRef, forwardRef } from 'react'
import PropTypes from 'prop-types'
import DatePickerRc, { registerLocale } from 'react-datepicker'
import moment from "moment"
import { ptBR } from 'date-fns/locale'
import 'react-datepicker/dist/react-datepicker.css'
import styles from "./DatePicker.module.css"
import { pathOr } from 'ramda'

import Input from "../Input/Input"
import Icon from "../Icon/Icon"

registerLocale('pt-BR', ptBR)

const CustomInput = forwardRef((props, ref) => {
  return <Input {...props} ref={ref} />
})

const momentFormatDate = "dd/MM/yyyy"

/**
 * DatePicker Component
 */
const DatePicker = ({
  placeholder,
  name,
  onChange,
  value,
}) => {
  const inputRef = useRef(null)

  const handleChangeRaw = (raw) => {
    const date = moment(pathOr('', ['currentTarget', 'value'], raw), momentFormatDate, true)
    if (date.isValid()) {
      onChange({ target: { value: date.toISOString() }  })
    }
  }

  return (
    <DatePickerRc
      name={name}
      placeholder={placeholder}
      selected={value}
      customInput={<CustomInput inputRef={inputRef} />}
      dateFormat={momentFormatDate}
      onChangeRaw={(e) => handleChangeRaw(e)}
      onChange={(value) => onChange({ target: { value: value && moment(value, momentFormatDate, true).toISOString() }})}
      locale="pt-BR"
      wrapperClassName={styles.datePickerWrapper}
      calendarClassName={styles.calendarCustom}
      icon={<Icon name="calendar" heigth={16} width={16} />}
    />
  )
}

DatePicker.propTypes = {
  /** placeholder */
  placeholder: PropTypes.string,
  /** onChange function */
  onChange: PropTypes.func.isRequired,
  /** name  */
  name: PropTypes.string.isRequired,
  /** value  */
  value: PropTypes.string.isRequired,
}

export default DatePicker
