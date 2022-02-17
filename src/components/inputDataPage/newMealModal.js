import Modal from "react-modal";

const NewMealModal = ({
  newMealDisplay,
  changeNewMealDisplay,
  newMealName,
  changeNewMealName,
  newMealIngredients,
  changeNewMealIngredients,
  newMealToBE,
}) => {
  Modal.setAppElement("#root");
  return (
    <section>
      <Modal isOpen={newMealDisplay} className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h2>New Common Meal</h2>
          </div>
          <div className="modal-body">
            <div>
              <label>Name of New Meal</label>
              <input
                name="name"
                maxLength="15"
                value={newMealName}
                onChange={changeNewMealName}
              ></input>
            </div>
            <div>
              <label>New Meal Ingredients</label>
              <input
                name="ingredients"
                value={newMealIngredients}
                onChange={changeNewMealIngredients}
              ></input>
            </div>
          </div>
          <div className="modal-footer">
            <button onClick={() => changeNewMealDisplay(false)}>Cancel</button>
            <button onClick={newMealToBE}>Submit</button>
          </div>
        </div>
      </Modal>
    </section>
  );
};

export default NewMealModal;
