import React, { useRef, useState, useEffect } from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import styles from "./DatePicker.module.css"
import Calendar from "../Calendar"

/**
 * DatePicker Component
 */
const DatePicker = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const datePickerRef = useRef(null);

  const handleDateChange = date => {
    setSelectedDate(date);
    setShowCalendar(false);
  };

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  const handleClickOutside = event => {
    if (datePickerRef.current && !datePickerRef.current.contains(event.target)) {
      setShowCalendar(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.datePicker} ref={datePickerRef}>
      <input
        type="text"
        value={selectedDate}
        onClick={toggleCalendar}
        readOnly
        className={styles.input}
      />
      {showCalendar && (
        <div className={styles.calendarContainer}>
          <Calendar onDateSelect={handleDateChange} />
        </div>
      )}
    </div>
  );
};

export default DatePicker
