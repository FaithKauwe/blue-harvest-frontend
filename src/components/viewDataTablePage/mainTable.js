import PropTypes from "prop-types";
import "./mainTable.css";
import HeaderItem from "./headerItem";

const MainTable = ({ sample_data }) => {
  // headers is a variable which will store the results of the map function, a list of headerItem components
  // with each component having a different header name
  // Object.keys returns a list of keys fr sample_data object, and map() needs a list
  const headers = Object.keys(sample_data.daily_list[0]).map((key, index) => {
    return <HeaderItem key={index} headerName={key} index={index}></HeaderItem>;
  });

  return (
    <section className="container-md">
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>{headers}</tr>
          </thead>
          <tbody>
            <tr>
              <td>Day 1</td>
              <td>Food</td>
              <td>3</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default MainTable;
