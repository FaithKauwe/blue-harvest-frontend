import "./factorsContainer.css";

const FactorsContainer = ({}) => {
  return (
    <section className="col">
      <div className="mb-1">
        <label for="sleep_input" className="form-label">
          Sleep(Hours)
        </label>
        <input id="sleep_input" className="form-control"></input>
      </div>
      <div className="mb-1">
        <label for="exercise_input" className="form-label">
          Exercise(Minutes)
        </label>
        <input id="exercise_input" className="form-control"></input>
      </div>
      <div className="mb-1">
        <label for="stress_input" className="form-label">
          Stress(0-10)
        </label>
        <input id="stress_input" className="form-control"></input>
      </div>
      <div className="mb-1">
        <label for="caffeine_input" className="form-label">
          Caffeine(Servings)
        </label>
        <input id="caffeine_input" className="form-control"></input>
      </div>
      <div className="mb-1">
        <label for="water_input" className="form-label">
          Water(Litres)
        </label>
        <input id="water_input" className="form-control"></input>
      </div>
      <div className="mb-1">
        <label for="alcohol_input" className="form-label">
          Alcohol(Servings)
        </label>
        <input id="alcohol_input" className="form-control"></input>
      </div>
    </section>
  );
};

export default FactorsContainer;
