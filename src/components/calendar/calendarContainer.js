import Calendar from "./calendarHeader";
import "./calendarContainer.css";

const CalendarContainer = ({
  setMonth,
  activeDate,
  setActiveDate,
  dailyData,
}) => {
  const toDisplay = (
    <div>
      <p>DataExists</p>
    </div>
  );
  const notToDisplay = (
    <div>
      <p>No Data</p>
    </div>
  );
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="content w-100">
              {/* This is the calendar component */}
              <Calendar
                setActiveDate={setActiveDate}
                setMonth={setMonth}
                activeDate={activeDate}
              ></Calendar>
              <div className="meals-container">
                {/* This is the side bar that contains food entries for activeDate */}
                <h2>
                  {activeDate.getDate()}
                  {"."}
                  {activeDate.toLocaleString("default", { month: "short" })}
                  {"."}
                  {activeDate.getFullYear()}
                </h2>
                <section>{dailyData.exists ? toDisplay : notToDisplay}</section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalendarContainer;
