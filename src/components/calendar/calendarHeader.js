import CalendarCells from "./calendarCells";
import "./calendar.css";

// list of months to be displayed above the calendar table for selection
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const Calendar = ({ activeDate, setMonth, setActiveDate }) => {
  // Functions to advance or retard the activeDate year if the arrows are clicked
  const advanceYear = () => {
    setActiveDate(
      new Date(activeDate.getFullYear() + 1, activeDate.getMonth())
    );
  };
  const decreaseYear = () => {
    setActiveDate(
      new Date(activeDate.getFullYear() - 1, activeDate.getMonth())
    );
  };

  // empty list to hold all the month name tags in the table header
  var monthHeader = [];
  for (let i = 0; i < 12; i++) {
    // if the month is activeDate, include .active-month
    if (i === activeDate.getMonth()) {
      monthHeader.push(
        <td className="month active-month" key={i} onClick={setMonth}>
          {months[i]}
        </td>
      );
    } else {
      monthHeader.push(
        <td className="month" key={i} onClick={setMonth}>
          {months[i]}
        </td>
      );
    }
  }

  return (
    <div className="calendar-container">
      <div className="calendar">
        <div className="year-header">
          {/* Set the chevrons/arrows to change year */}
          <span
            className="left-button fa chevron left"
            id="prev"
            onClick={decreaseYear}
          ></span>
          <span className="year" id="label">
            {activeDate.getFullYear()}
          </span>
          <span
            className="right-button fa chevron right"
            id="next"
            onClick={advanceYear}
          ></span>
        </div>
        <table className="months-table w-100">
          {/* Month names in header (gets the data from the loop above) */}
          <tbody>
            <tr className="months-row">{monthHeader}</tr>
          </tbody>
        </table>
        <table className="days-table w-100">
          <tbody>
            <tr>
              {/* Days of week in header */}
              <td className="day">Sun</td>
              <td className="day">Mon</td>
              <td className="day">Tue</td>
              <td className="day">Wed</td>
              <td className="day">Thu</td>
              <td className="day">Fri</td>
              <td className="day">Sat</td>
            </tr>
          </tbody>
        </table>
        <div className="frame">
          {/* Main calendar component */}
          <CalendarCells
            setActiveDate={setActiveDate}
            activeDate={activeDate}
          ></CalendarCells>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
