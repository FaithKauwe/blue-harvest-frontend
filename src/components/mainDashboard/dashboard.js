import { useState } from "react";
import "./dashboard.css";
import InputData from "../inputDataPage/inputData";

const Dashboard = ({}) => {
  // blankData is the initital state for dailyData and changeDailyData
  const blankData = {
    food: [
      "SelectMeal",
      "SelectMeal",
      "SelectMeal",
      "SelectMeal",
      "SelectMeal",
      "SelectMeal",
    ],
    sleep: "",
    exercise: "",
    caffeine: "",
    alcohol: "",
    water: "",
    stress: "",
    headache: "",
    nausea: "",
    ibs: "",
    dizzy: "",
    energy: "",
    seasonal: "",
  };

  // setting state for Dashboard details, for each useState: first item in [] is the variable
  // being created and the second item is the function to change it
  // this state is for inputData Modal
  const [inputIsDisplayed, changeInputDisplay] = useState(false);
  // this state is for queryData Modal // false is the state this starts with, when changed to true, the modal will populate
  const [queryIsDisplayed, changeQueryDisplay] = useState(false);
  // this state is for changing the date through mainDashboard, new Date gets today's date as a date object
  const [activeDate, changeDate] = useState(new Date());
  // this state holds all 18 data entries for inputData, starts as an empty dict
  const [dailyData, changeDailyData] = useState(blankData);
  // updateDailyData is a helper function for changeDailyData
  const updateDailyData = (event, index) => {
    console.log(event.target.value);
    console.log(event.target.name);
    console.log(index);
  };
  return (
    <section>
      <InputData
        // assigning the props. left side of = is what the state or function is called in InputData
        // right side of = is what the state/function is called in Dashboard, in this case, both use the same name
        inputIsDisplayed={inputIsDisplayed}
        activeDate={activeDate}
        dailyData={dailyData}
        changeInputDisplay={changeInputDisplay}
        changeDate={changeDate}
        changeDailyData={updateDailyData}
      ></InputData>
      {/* onClick is the action being listened for, changeInputDisplay is the 
      function I want performed when the click is registered */}
      {/* changeInputDisplay has to be wrapped in () and
          anonymous function or it will get called every time the page renders*/}
      <button onClick={() => changeInputDisplay(true)}>Input Data</button>
    </section>
  );
};

export default Dashboard;
