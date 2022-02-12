import Calendar from "./calendarHeader";
import "./calendarContainer.css";

const CalendarContainer = ({
  setMonth,
  activeDate,
  setActiveDate,
  dailyData,
}) => {
  const toDisplay = (
    <section>
      <div className="row">
        <p>
          <u>Daily Data:</u>
        </p>
      </div>
      <div className="row">
        <p>Sleep: {dailyData.sleep}</p>
      </div>
      <div className="row">
        <p>Exercise: {dailyData.exercise}</p>
      </div>
      <div className="row">
        <p>Caffeine: {dailyData.caffeine}</p>
      </div>
      <div className="row">
        <p>Alcohol: {dailyData.alcohol}</p>
      </div>
      <div className="row">
        <p>Water: {dailyData.water}</p>
      </div>
    </section>
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
                <h2 className="mb-5">
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
