import "./App.css";
import TableView from "./components/viewDataTablePage/tableView";
import Dashboard from "./components/mainDashboard/dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [tableData, setTableData] = useState({
    daily_list: false,
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Dashboard setTableData={setTableData}></Dashboard>}
        ></Route>
        <Route
          path="/table-view"
          element={<TableView tableData={tableData}></TableView>}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
