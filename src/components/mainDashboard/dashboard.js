import { useState } from "react";
import "./dashboard.css";
import InputData from "../inputDataPage/inputData";
import QueryDataModal from "../queryDataPage/queryDataModal";

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
  // setting the intial state for queryOptions, as a dict
  const blankQueryOptions = {
    symptom: "IBS",
    severity: "1",
    food: false,
    water: false,
    alcohol: false,
    sleep: false,
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
    // create deep copy of dailyData
    var tempData = { ...dailyData };

    if (event.target.name === "food") {
      tempData[event.target.name][index] = event.target.value;
    } else {
      tempData[event.target.name] = event.target.value;
    }
    //calling function changeDailyData, passing tempData, which now
    // has the user's selections
    changeDailyData(tempData);
    console.log(event.target.value);
    console.log(event.target.name);
    console.log(index);
  };
  const [queryOptions, changeQueryOptions] = useState(blankQueryOptions);
  // updateQueryOptions is a helper function for changeQueryOptions, that
  // will change the state of queryOptions based on what updateQueryOptions
  // registers the user choosing
  const updateQueryOptions = (event) => {
    // create deep copy of queryOptions
    var tempData = { ...queryOptions };
    if (
      (event.target.name === "symptom") |
      (event.target.name === "severity")
    ) {
      tempData[event.target.name] = event.target.value;
    } else {
      tempData[event.target.name] = event.target.checked;
    }
    changeQueryOptions(tempData);
    console.log(event.target.name);
    console.log(event.target.value);
    console.log(event.target.checked);
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
      <QueryDataModal
        queryIsDisplayed={queryIsDisplayed}
        changeQueryDisplay={changeQueryDisplay}
        queryOptions={queryOptions}
        changeQueryOptions={updateQueryOptions}
      ></QueryDataModal>
      {/* onClick is the action being listened for, changeInputDisplay is the 
      function I want performed when the click is registered */}
      {/* changeInputDisplay has to be wrapped in () and
          anonymous function or it will get called every time the page renders*/}
      <button onClick={() => changeInputDisplay(true)}>Input Data</button>
      <button onClick={() => changeQueryDisplay(true)}>Query Data</button>
    </section>
  );
};

export default Dashboard;
