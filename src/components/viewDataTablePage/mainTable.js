import PropTypes from "prop-types";
import "./mainTable.css";
import HeaderItem from "./headerItem";
import CellData from "./cellData";

const MainTable = ({ tableData }) => {
  // headers is a variable which will store the results of the map function, a list of headerItem components
  // with each component having a different header name
  // Object.keys returns a list of keys fr tableData object, and map() needs a list
  const headers = Object.keys(tableData.daily_list[0]).map((key, index) => {
    return <HeaderItem key={index} headerName={key} index={index}></HeaderItem>;
  });
  const rowsOfCells = tableData.daily_list.map((dateDict, index) => {
    return (
      <tr key={index}>
        {Object.keys(dateDict).map((dateKey, index) => {
          return (
            <CellData
              key={index}
              index={index}
              cellData={dateDict[dateKey]}
              dateKey={dateKey}
            ></CellData>
          );
        })}
      </tr>
    );
  });
  return (
    <section className="container-md">
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>{headers}</tr>
          </thead>
          <tbody>{rowsOfCells}</tbody>
        </table>
      </div>
    </section>
  );
};

export default MainTable;
