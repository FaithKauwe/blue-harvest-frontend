import "./inputData.css";
import Modal from "react-modal";
import { useState, useEffect } from "react";
import FactorsContainer from "./factorsContainer";
import SymptomsContainer from "./symptomsContainer";
import MealsContainer from "./mealsContainer";
import NewMealModal from "./newMealModal";

// the state variables and state functions being passed through props
const InputData = ({
  inputIsDisplayed,
  changeInputDisplay,
  activeDate,
  changeDate,
  dailyData,
  changeDailyData,
  dailyDataToBE,
  userFood,
  newMealName,
  changeNewMealName,
  newMealIngredients,
  changeNewMealIngredients,
  newMealToBE,
  newMealDisplay,
  changeNewMealDisplay,
}) => {
  Modal.setAppElement("#root");

  return (
    <section>
      <Modal isOpen={inputIsDisplayed} className="modal-dialog">
        <NewMealModal
          newMealDisplay={newMealDisplay}
          changeNewMealDisplay={changeNewMealDisplay}
          newMealName={newMealName}
          newMealIngredients={newMealIngredients}
          changeNewMealName={changeNewMealName}
          changeNewMealIngredients={changeNewMealIngredients}
          newMealToBE={newMealToBE}
        ></NewMealModal>
        <div className="modal-content">
          <div className="modal-header">
            <h2>
              Data For {activeDate.getDate()}
              {"."}
              {activeDate.toLocaleString("default", { month: "short" })}
              {"."}
              {activeDate.getFullYear()}
            </h2>
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
                userFood={userFood}
              ></MealsContainer>
              <MealsContainer
                value={dailyData.food[1]}
                changeDailyData={changeDailyData}
                index={1}
                userFood={userFood}
              ></MealsContainer>
              <MealsContainer
                value={dailyData.food[2]}
                changeDailyData={changeDailyData}
                index={2}
                userFood={userFood}
              ></MealsContainer>
              <MealsContainer
                value={dailyData.food[3]}
                changeDailyData={changeDailyData}
                index={3}
                userFood={userFood}
              ></MealsContainer>
              <MealsContainer
                value={dailyData.food[4]}
                changeDailyData={changeDailyData}
                index={4}
                userFood={userFood}
              ></MealsContainer>
              <MealsContainer
                value={dailyData.food[5]}
                changeDailyData={changeDailyData}
                index={5}
                userFood={userFood}
              ></MealsContainer>
              <button onClick={() => changeNewMealDisplay(true)}>
                Add New Meal
              </button>
            </div>
          </div>
          <div className="modal-footer">
            <button onClick={() => changeInputDisplay(false)}>Cancel</button>
            <button onClick={dailyDataToBE}>Submit</button>
          </div>
        </div>
      </Modal>
    </section>
  );
};

export default InputData;
