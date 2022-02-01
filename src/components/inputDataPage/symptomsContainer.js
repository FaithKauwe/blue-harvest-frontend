import "./symptomsContainer.css";
const SymptomsContainer = ({}) => {
  return (
    <section className="col">
      <div className="mb-1">
        <label for="ibs_input" className="form-label">
          IBS(0-10)
        </label>
        <input id="ibs_input" className="form-control"></input>
      </div>
      <div className="mb-1">
        <label for="nausea_input" className="form-label">
          Nausea(0-10)
        </label>
        <input id="nausea_input" className="form-control"></input>
      </div>
      <div className="mb-1">
        <label for="headache_input" className="form-label">
          Headache(0-10)
        </label>
        <input id="headache_input" className="form-control"></input>
      </div>
      <div className="mb-1">
        <label for="dizziness_input" className="form-label">
          Dizziness(0-10)
        </label>
        <input id="dizziness_input" className="form-control"></input>
      </div>
      <div className="mb-1">
        <label for="energy_input" className="form-label">
          Energy Level(0-10)
        </label>
        <input id="energy_input" className="form-control"></input>
      </div>
      <div className="mb-1">
        <label for="seasonal_input" className="form-label">
          Seasonal Illness(0-10)
        </label>
        <input id="seasonal_input" className="form-control"></input>
      </div>
    </section>
  );
};
export default SymptomsContainer;
