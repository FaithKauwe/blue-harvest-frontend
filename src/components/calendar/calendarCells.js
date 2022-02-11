import { addDays, format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, isSameDay } from 'date-fns';
import CalendarDay from './calendarDay';

const CalendarCells = ({activeDate, setActiveDate }) => {
  // Data for use in table formulation
  const monthStart = startOfMonth(activeDate);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);
  
  // Rows contain the days, days contain the CalendarDay components
  const rows = [];
  let days = [];
  // day starts at startOfWeek and increments from there
  let day = startDate;
  // formatted day mirrors day but with formatting for display
  let formattedDate = "";

  // Nested loop to move through days of the month (day)
  while (day <= endDate) {
    // Only add 7 days per row
    for (let i = 0; i < 7; i++) {
      // Set the formatted date for display
      formattedDate = format(day, "d");
      // Add the number day component
      days.push(
        <CalendarDay activeDate={activeDate} setActiveDate={setActiveDate} today={isSameDay(day, activeDate)} date={formattedDate} key={day}></CalendarDay>
      );
      // increment to next day
      day = addDays(day, 1);
    };
    // Insert row of days into the array as tr (key=last day of the row)
    rows.push(
      <tr className='table-row' key={day}>
        {days}
      </tr>
    );
    // Empty the days array for the next row
    days = [];
  };

  return (
  <table className="dates-table w-100">
    <tbody className="tbody" key="cal table">
      {/* Rows established above inserted into primary table here */}
      {rows}
    </tbody>
  </table>
  )
};
    
export default CalendarCells;