import "./mealsContainer.css";
const userFood = {
  oatmeal: "ingredients, ...",
  steak: "ingredients ...",
  "tuna sandwich": "ingredients",
};
const MealsContainer = ({ value, changeDailyData, index }) => {
  return (
    <section className="mb-5">
      <select
        name="food" // "food" is the key for this piece of state
        value={value} // value is the starting state
        onChange={(event) => changeDailyData(event, index)}
      >
        <option>SelectMeal</option>
        {Object.keys(userFood).map((key, index) => {
          return (
            <option key={index} value={key}>
              {key}
            </option>
          );
        })}
      </select>
    </section>
  );
};

export default MealsContainer;
