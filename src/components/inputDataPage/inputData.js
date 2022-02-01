import "./inputData.css";
import Modal from "react-modal";
import FactorsContainer from "./factorsContainer";
import SymptomsContainer from "./symptomsContainer";
import MealsContainer from "./mealsContainer";
const InputData = ({}) => {
  return (
    <section>
      <Modal isOpen={true} className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h2>Date</h2>
          </div>
          <div className="modal-body row">
            <FactorsContainer></FactorsContainer>
            <SymptomsContainer></SymptomsContainer>
            <div className="col">
              <MealsContainer></MealsContainer>
              <MealsContainer></MealsContainer>
              <MealsContainer></MealsContainer>
              <MealsContainer></MealsContainer>
              <MealsContainer></MealsContainer>
              <MealsContainer></MealsContainer>
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
