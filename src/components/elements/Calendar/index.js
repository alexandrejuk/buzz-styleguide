import React, { useState } from 'react';
import classNames from 'classnames';
import styles from './Calendar.module.css';
import generateCalendar from './Calendar';
import Icon from '../Icon/Icon';

/**
 * Calendar Component
 */
const Calendar = ({ onDateSelect }) => {
  const [year, setYear] = useState(2024);
  const [monthDate, setMonthDate] = useState(6);
  const [selectedDate, setSelectedDate] = useState(null); // Estado para armazenar a data selecionada

  const { month, daysOfWeek, currentDay, months } = generateCalendar(year, monthDate);
  const dateOfYear = currentDay.getDate();
  const monthOfYear = currentDay.getMonth();
  const yearOfDate = currentDay.getFullYear();

  const active = date => (
    dateOfYear === date
    && monthOfYear === monthDate - 1
    && year === yearOfDate
  );

  const handlePrevMonth = () => {
    if (monthDate === 1) {
      setMonthDate(12);
      setYear(year - 1);
    } else {
      setMonthDate(monthDate - 1);
    }
  };

  const handleNextMonth = () => {
    if (monthDate === 12) {
      setMonthDate(1);
      setYear(year + 1);
    } else {
      setMonthDate(monthDate + 1);
    }
  };

  // Função para marcar a data selecionada
  const handleDateSelect = date => {
    setSelectedDate(date.fullDate);
    onDateSelect(date.fullDate);
  };

  const isSelected = date => selectedDate === date.fullDate;

  return (
    <div className={styles.calendar}>
      <div className={styles.calendarHeader}>
        <div>{months[monthDate - 1]} {year}</div>
        <div className={styles.calendarHeaderActions}>
          <button 
            className={styles.calendarHeaderAction}
            onClick={handlePrevMonth}
          >
            <Icon name='arrowOutlineLeft' />
          </button>
          <button 
            className={styles.calendarHeaderAction}
            onClick={handleNextMonth}
          >
            <Icon name='arrowOutlineRight' />
          </button>
        </div>
      </div>
      <div className={styles.calendarContentDays}>
        {daysOfWeek.map((day, index) => (
          <div
            className={styles.calendarDaysOfWeek}
            key={index}
          >
            {day}
          </div>
        ))}
        {month.map((date, index) => (
          <div
            className={classNames(styles.calendarDays, {
              [styles.active]: active(date.date),
              [styles.notCurrentMonth]: !date.currentMonth,
              [styles.selected]: isSelected(date)
            })}
            key={index}
            onClick={() => handleDateSelect(date)}
          >
            {date.date}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
