import Modal from "react-modal";

const NewMealModal = ({ newMealDisplay, changeNewMealDisplay }) => {
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
              <input type="text" name="name"></input>
            </div>
            <div>
              <label>New Meal Ingredients</label>
              <input type="text" name="ingredients"></input>
            </div>
          </div>
          <div className="modal-footer">
            <button onClick={() => changeNewMealDisplay(false)}>Cancel</button>
            <button>Submit</button>
          </div>
        </div>
      </Modal>
    </section>
  );
};

export default NewMealModal;
