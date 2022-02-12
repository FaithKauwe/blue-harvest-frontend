import PropTypes from "prop-types";
import "./tableView.css";
import MainTable from "./mainTable";
import { Link } from "react-router-dom";

// tableView is passing table_data to mainTable through props
const TableView = ({ tableData }) => {
  // const [dataExists, setDataExists] = useState(false);
  let body;
  if (tableData.daily_list !== false) {
    body = <MainTable tableData={tableData}></MainTable>;
  } else {
    body = <h3>No data to display, please adjust your query parameters!</h3>;
  }

  return (
    <section className="table-view">
      <header className="container-fluid">
        <h2 className="row justify-content-center">Factors</h2>
      </header>

      <nav className="nav justify-content-center">
        <div className="nav-item">
          <Link className="nav-link" to="/">
            Back to Dashboard
          </Link>
        </div>
      </nav>
      {body}
    </section>
  );
};

export default TableView;
