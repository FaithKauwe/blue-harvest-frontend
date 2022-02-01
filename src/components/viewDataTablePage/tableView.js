import PropTypes from "prop-types";
import "./tableView.css";
import MainTable from "./mainTable";
// tableView is passing sample_data to mainTable through props
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

const TableView = ({}) => {
  return (
    <section>
      <h2>Migraine Symptoms</h2>
      <MainTable sample_data={sample_data}></MainTable>
    </section>
  );
};

export default TableView;
