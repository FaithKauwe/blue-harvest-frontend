import "./App.css";
import TableView from "./components/viewDataTablePage/tableView";
import Dashboard from "./components/mainDashboard/dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
const sample_data = {
  daily_list: [
    {
      date: "2022-01-01",
      food: {
        oatmeal: "ingredients, ...",
        steak: "ingredients, ...",
        "tuna sandwich": "ingredients, ...",
      },
      sleep: 6,
      exercise: 60,
      caffeine: 1,
      alcohol: 2,
      water: 2,
      stress: 5,
      // "headache": 4,
      // "nausea": 3,
      // "ibs": 6,
      // "dizzy": 4,
      // "energy": 7,
      // "seasonal": 5
    },
    {
      date: "2022-01-02",
      food: {
        oatmeal: "ingredients, ...",
        steak: "ingredients, ...",
        "tuna sandwich": "ingredients, ...",
      },
      sleep: 6,
      exercise: 60,
      caffeine: 1,
      alcohol: 2,
      water: 2,
      stress: 5,
      // headache: 4,
      // nausea: 3,
      // ibs: 6,
      // dizzy: 4,
      // energy: 7,
      // seasonal: 5,
    },
    {
      date: "2022-01-03",
      food: {
        oatmeal: "ingredients, ...",
        steak: "ingredients, ...",
        "tuna sandwich": "ingredients, ...",
      },
      sleep: 6,
      exercise: 60,
      caffeine: 1,
      alcohol: 2,
      water: 2,
      stress: 5,
      // headache: 4,
      // nausea: 3,
      // ibs: 6,
      // dizzy: 4,
      // energy: 7,
      // seasonal: 5,
    },
  ],
};
function App() {
  const [tableData, setTableData] = useState(sample_data);

  return (
    <section>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Dashboard
                tableData={tableData}
                setTableData={setTableData}
              ></Dashboard>
            }
          ></Route>
          <Route
            path="/table-view"
            element={<TableView tableData={tableData}></TableView>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </section>
  );
}

export default App;
