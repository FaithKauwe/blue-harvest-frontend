import Modal from "react-modal";
import "./queryDataModal.css";

const QueryDataModal = ({
  queryIsDisplayed,
  changeQueryDisplay,
  queryOptions,
  changeQueryOptions,
}) => {
  return (
    <section>
      <Modal isOpen={queryIsDisplayed} className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h2>Query Options</h2>
          </div>
          <div className="modal-body">
            <label>Symptom</label>
            <select
              name="symptom"
              onChange={(event) => changeQueryOptions(event)}
              value={queryOptions.symptom}
            >
              <option>IBS</option>
              <option>Nausea</option>
              <option>Headache</option>
              <option>Dizziness</option>
              <option>Energy</option>
              <option>Seasonal Illness</option>
            </select>
            <label>Severity Threshold</label>
            <select
              name="severity"
              onChange={(event) => changeQueryOptions(event)}
              value={queryOptions.severity}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
            </select>

            <input
              type="checkbox"
              id="food"
              name={"food"}
              onChange={changeQueryOptions}
              checked={queryOptions.food}
            ></input>
            <label htmlFor="food">Food</label>
            <input
              type="checkbox"
              id="water"
              name={"water"}
              onChange={changeQueryOptions}
              checked={queryOptions.water}
            ></input>
            <label htmlFor="water">Water</label>
            <input
              type="checkbox"
              id="alcohol"
              name={"alcohol"}
              onChange={changeQueryOptions}
              checked={queryOptions.alcohol}
            ></input>
            <label htmlFor="alcohol">Alcohol</label>
            <input
              type="checkbox"
              id="sleep"
              name={"sleep"}
              onChange={changeQueryOptions}
              checked={queryOptions.sleep}
            ></input>
            <label htmlFor="sleep">Sleep</label>
          </div>
          <div className="modal-footer">
            <button>Cancel</button>
            <button>Submit</button>
          </div>
        </div>
      </Modal>
    </section>
  );
};

export default QueryDataModal;
