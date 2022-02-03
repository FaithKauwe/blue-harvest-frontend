import "./factorsContainer.css";

const FactorsContainer = ({ dailyData, changeDailyData }) => {
  return (
    <section className="col">
      <div className="mb-1">
        <label htmlFor="sleep_input" className="form-label">
          Sleep(Hours)
        </label>
        <input
          id="sleep_input"
          name="sleep"
          className="form-control"
          value={dailyData.sleep}
          onChange={changeDailyData}
        ></input>
      </div>
      <div className="mb-1">
        <label htmlFor="exercise_input" className="form-label">
          Exercise(Minutes)
        </label>
        <input
          id="exercise_input"
          name="exercise"
          className="form-control"
          value={dailyData.exercise}
          onChange={changeDailyData}
        ></input>
      </div>
      <div className="mb-1">
        <label htmlFor="stress_input" className="form-label">
          Stress(0-10)
        </label>
        <input
          id="stress_input"
          name="stress"
          className="form-control"
          value={dailyData.stress}
          onChange={changeDailyData}
        ></input>
      </div>
      <div className="mb-1">
        <label htmlFor="caffeine_input" className="form-label">
          Caffeine(Servings)
        </label>
        <input
          id="caffeine_input"
          name="caffeine"
          className="form-control"
          value={dailyData.caffeine}
          onChange={changeDailyData}
        ></input>
      </div>
      <div className="mb-1">
        <label htmlFor="water_input" className="form-label">
          Water(Litres)
        </label>
        <input
          id="water_input"
          name="water"
          className="form-control"
          value={dailyData.water}
          onChange={changeDailyData}
        ></input>
      </div>
      <div className="mb-1">
        <label htmlFor="alcohol_input" className="form-label">
          Alcohol(Servings)
        </label>
        <input
          id="alcohol_input"
          name="alcohol"
          className="form-control"
          value={dailyData.alcohol}
          onChange={changeDailyData}
        ></input>
      </div>
    </section>
  );
};

export default FactorsContainer;
