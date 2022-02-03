import "./symptomsContainer.css";
const SymptomsContainer = ({ dailyData, changeDailyData }) => {
  return (
    <section className="col">
      <div className="mb-1">
        <label htmlFor="ibs_input" className="form-label">
          IBS(0-10)
        </label>
        <input
          id="ibs_input"
          className="form-control"
          name={"ibs"}
          value={dailyData.ibs}
          onChange={changeDailyData}
        ></input>
      </div>
      <div className="mb-1">
        <label htmlFor="nausea_input" className="form-label">
          Nausea(0-10)
        </label>
        <input
          id="nausea_input"
          name={"nausea"}
          className="form-control"
          value={dailyData.nausea}
          onChange={changeDailyData}
        ></input>
      </div>
      <div className="mb-1">
        <label htmlFor="headache_input" className="form-label">
          Headache(0-10)
        </label>
        <input
          id="headache_input"
          name={"headache"}
          className="form-control"
          value={dailyData.headache}
          onChange={changeDailyData}
        ></input>
      </div>
      <div className="mb-1">
        <label htmlFor="dizziness_input" className="form-label">
          Dizziness(0-10)
        </label>
        <input
          id="dizziness_input"
          name={"dizzy"}
          className="form-control"
          value={dailyData.dizzy}
          onChange={changeDailyData}
        ></input>
      </div>
      <div className="mb-1">
        <label htmlFor="energy_input" className="form-label">
          Energy Level(0-10)
        </label>
        <input
          id="energy_input"
          name={"energy"}
          className="form-control"
          value={dailyData.energy}
          onChange={changeDailyData}
        ></input>
      </div>
      <div className="mb-1">
        <label htmlFor="seasonal_input" className="form-label">
          Seasonal Illness(0-10)
        </label>
        <input
          id="seasonal_input"
          name={"seasonal"}
          className="form-control"
          value={dailyData.seasonal}
          onChange={changeDailyData}
        ></input>
      </div>
    </section>
  );
};
export default SymptomsContainer;
