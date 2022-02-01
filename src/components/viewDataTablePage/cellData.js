import PropTypes from "prop-types";
import "./cellData.css";

const CellData = ({ cellData, index, dateKey }) => {
  if (dateKey !== "food") {
    return <td key={index}>{cellData}</td>;
    //cellData is the value of each dateKey key.  In this case, it will be
    // "food".  The value of food key is a dict, so meeds (key, index) syntax so map can
    // identify the keys and indexes
  } else {
    return (
      <td key={index}>
        {Object.keys(cellData).map((key, index) => {
          return <p key={index}>{key}</p>;
        })}
      </td>
    );
  }
};

export default CellData;
