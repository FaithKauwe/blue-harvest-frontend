import "./inputData.css";
import Modal from "react-modal";
import FactorsContainer from "./factorsContainer";
import SymptomsContainer from "./symptomsContainer";
import MealsContainer from "./mealsContainer";
// the state variables and state functions being passed through props
const InputData = ({
  inputIsDisplayed,
  changeInputDisplay,
  activeDate,
  changeDate,
  dailyData,
  changeDailyData,
}) => {
  return (
    <section>
      <Modal isOpen={inputIsDisplayed} className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h2>Date</h2>
          </div>
          <div className="modal-body row">
            <FactorsContainer
              dailyData={dailyData}
              changeDailyData={changeDailyData}
            ></FactorsContainer>
            <SymptomsContainer
              dailyData={dailyData}
              changeDailyData={changeDailyData}
            ></SymptomsContainer>
            <div className="col">
              <MealsContainer
                value={dailyData.food[0]}
                changeDailyData={changeDailyData}
                index={0}
              ></MealsContainer>
              <MealsContainer
                value={dailyData.food[1]}
                changeDailyData={changeDailyData}
                index={1}
              ></MealsContainer>
              <MealsContainer
                value={dailyData.food[2]}
                changeDailyData={changeDailyData}
                index={2}
              ></MealsContainer>
              <MealsContainer
                value={dailyData.food[3]}
                changeDailyData={changeDailyData}
                index={3}
              ></MealsContainer>
              <MealsContainer
                value={dailyData.food[4]}
                changeDailyData={changeDailyData}
                index={4}
              ></MealsContainer>
              <MealsContainer
                value={dailyData.food[5]}
                changeDailyData={changeDailyData}
                index={5}
              ></MealsContainer>
            </div>
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

export default InputData;
