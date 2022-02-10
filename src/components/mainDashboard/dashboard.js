import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./dashboard.css";
import InputData from "../inputDataPage/inputData";
import QueryDataModal from "../queryDataPage/queryDataModal";
import axios from "axios";

const Dashboard = ({ tableData, setTableData }) => {
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
  let navigate = useNavigate();
  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);
  // setting state for Dashboard details, for each useState: first item in [] is the variable
  // being created and the second item is the function to change it
  // this state is for inputData Modal
  const [inputIsDisplayed, changeInputDisplay] = useState(false);
  // this state is for queryData Modal // false is the state this starts with, when changed to true, the modal will populate
  const [queryIsDisplayed, changeQueryDisplay] = useState(false);
  // this state is for changing the date through mainDashboard, new Date gets today's date as a date object
  const [activeDate, changeDate] = useState(currentDate);
  // this state holds all 18 data entries for inputData, starts as an empty dict
  const [dailyData, changeDailyData] = useState(blankData);
  const [userFood, populateUserFood] = useState();

  const [inputDate, userChangeDate] = useState(
    activeDate.toISOString().split("T")[0]
  );
  // these two states track the input boxes in newMealModal as a user enters new meal name and ingredients
  const [newMealName, updateNewMealName] = useState("");
  const [newMealIngredients, updateNewMealIngredients] = useState("");
  const [newMealDisplay, changeNewMealDisplay] = useState(false);

  // submitDate is the function which gets called when user clicks submit after input a new date
  const submitDate = (event) => {
    event.preventDefault();
    // inputDate will be a string in ISO format
    changeDate(
      new Date(
        inputDate.slice(0, 4),
        inputDate.slice(5, 7) - 1,
        inputDate.slice(8, 10)
      )
    );
  };
  const inputChange = (event) => {
    userChangeDate(event.target.value);
  };

  useEffect(() => {
    axios // the axios request uses a split function to truncuate the datetime object to this format YYYY-MM-DD
      // this axios request is tied to the BE endpoint which returns data that has already been entered for a day (NOT based on query options)
      .get(
        `http://127.0.0.1:5000/daily_tracker/${
          activeDate.toISOString().split("T")[0]
        }`
      )
      .then((result) => {
        changeDailyData(result.data);
      });
  }, [activeDate]); // each time activeDate is changed, it will call useEffect and this function is now tied to only activeDate
  useEffect(() => {
    getUserFood();
  }, []);
  // getUserFood is a helper function for populateUserFood which uses an axios call to access
  // the CommonFood Table in the BE
  const getUserFood = () => {
    axios.get(`http://127.0.0.1:5000/common_food`).then((result) => {
      populateUserFood(result.data);
    });
  };
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
  };
  // queryDataToBE is helper function that sends the queryOptions(selected by user)
  // to the back end and closes the modal

  const queryDataToBE = () => {
    axios
      .get(`http://127.0.0.1:5000/daily_tracker`, {
        params: {
          symptom: queryOptions.symptom,
          severity: queryOptions.severity,
          food: queryOptions.food,
          water: queryOptions.water,
          alcohol: queryOptions.alcohol,
          sleep: queryOptions.sleep,
        },
      })
      .then((result) => {
        setTableData(result.data);
      });
    changeQueryDisplay(false);
    navigate("/table-view", { state: { name: "raeon" }, replace: true });
  };
  // dailyDataToBE is a helper function that sends the dailyData(updated by user)
  // to the back end and closes the modal
  const dailyDataToBE = () => {
    axios.post(
      `http://127.0.0.1:5000/daily_tracker/${
        activeDate.toISOString().split("T")[0]
      }`,
      {
        ibs: dailyData.ibs,
        dizzy: dailyData.dizzy,
        water: dailyData.water,
        alcohol: dailyData.alcohol,
        sleep: dailyData.sleep,
        exercise: dailyData.exercise,
        caffeine: dailyData.caffeine,
        stress: dailyData.stress,
        headache: dailyData.headache,
        nausea: dailyData.nausea,
        energy: dailyData.energy,
        seasonal: dailyData.seasonal,
      }
    );
    // Using .map to loop through food items, checking if data has been entered
    // and if so, posting the food name to BE meal table
    dailyData.food.map((name) => {
      if (name !== "SelectMeal") {
        axios.post(
          `http://127.0.0.1:5000/meal/${
            activeDate.toISOString().split("T")[0]
          }`,
          {
            food_name: name,
          }
        );
      }
    });
    changeInputDisplay(false);
  };
  // helper function on submit from newMealModal, send new meal name and ingredients to BE
  const newMealToBE = () => {
    axios.post("http://127.0.0.1:5000/common_food", {
      food_name: newMealName,
      ingredients: newMealIngredients,
    });
    getUserFood();
    changeNewMealDisplay(false);
  };
  const changeNewMealName = (event) => {
    updateNewMealName(event.target.value);
  };
  const changeNewMealIngredients = (event) => {
    updateNewMealIngredients(event.target.value);
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
        dailyDataToBE={dailyDataToBE}
        userFood={userFood}
        newMealName={newMealName}
        changeNewMealName={changeNewMealName}
        newMealIngredients={newMealIngredients}
        changeNewMealIngredients={changeNewMealIngredients}
        newMealToBE={newMealToBE}
        newMealDisplay={newMealDisplay}
        changeNewMealDisplay={changeNewMealDisplay}
      ></InputData>
      <QueryDataModal
        queryIsDisplayed={queryIsDisplayed}
        changeQueryDisplay={changeQueryDisplay}
        queryOptions={queryOptions}
        changeQueryOptions={updateQueryOptions}
        queryDataToBE={queryDataToBE}
      ></QueryDataModal>
      {/* onClick is the action being listened for, changeInputDisplay is the 
      function I want performed when the click is registered */}
      {/* changeInputDisplay has to be wrapped in () and
          anonymous function or it will get called every time the page renders*/}
      <button onClick={() => changeInputDisplay(true)}>Input Data</button>
      <button onClick={() => changeQueryDisplay(true)}>Query Data</button>
      <form onSubmit={submitDate}>
        <label>Change Date</label>
        <input value={inputDate} onChange={inputChange}></input>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Dashboard;
