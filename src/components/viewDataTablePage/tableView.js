import PropTypes from "prop-types";
import "./tableView.css";
import MainTable from "./mainTable";
// tableView is passing sample_data to mainTable through props

const TableView = ({ tableData }) => {
  return (
    <section className="table-view">
      <h2>Migraine Symptoms</h2>
      <MainTable tableData={tableData}></MainTable>
    </section>
  );
};

export default TableView;
