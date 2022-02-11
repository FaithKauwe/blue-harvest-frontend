const CalendarDay = ({ today, date, setActiveDate, activeDate }) => {
  return (
    // Each day of the calendar
    // If today evaluates true, gets class assignment .active-date
    // onClick, the activeDate will move to that date
    // Value is the formattedDate from upper component
    <td
      className={"table-date " + (today ? "active-date" : "")}
      onClick={() =>
        setActiveDate(
          new Date(activeDate.getFullYear(), activeDate.getMonth(), date)
        )
      }
    >
      {date}
    </td>
  );
};

export default CalendarDay;
