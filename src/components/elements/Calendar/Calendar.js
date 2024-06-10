const ptBR = {
  daysOfWeek: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
  months: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
};

const generateCalendar = (year, month) => {
  const totalDays = 42;
  const firstDayOfMonth = new Date(year, month - 1, 1);

  const startDay = firstDayOfMonth.getDay();

  const daysInPreviousMonth = new Date(year, month - 1, 0).getDate();

  const calendarDays = [];

  for (let i = startDay - 1; i >= 0; i--) {
    const date = new Date(year, month - 2, daysInPreviousMonth - i);
    calendarDays.push({
      date: date.getDate(),
      currentMonth: false,
      fullDate: date.toISOString().split('T')[0],
    });
  }

  const daysInCurrentMonth = new Date(year, month, 0).getDate();
  for (let i = 1; i <= daysInCurrentMonth; i++) {
    const date = new Date(year, month - 1, i);
    calendarDays.push({
      date: date.getDate(),
      currentMonth: true,
      fullDate: date.toISOString().split('T')[0],
    });
  }

  const nextMonthDays = totalDays - calendarDays.length;
  for (let i = 1; i <= nextMonthDays; i++) {
    const date = new Date(year, month, i);
    calendarDays.push({
      date: date.getDate(),
      currentMonth: false,
      fullDate: date.toISOString().split('T')[0],
    });
  }

  return { month: calendarDays, ...ptBR, currentDay: new Date() };
}

export default generateCalendar;
