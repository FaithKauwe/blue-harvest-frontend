import "./mealsContainer.css";
const userFood = {
  oatmeal: "ingredients, ...",
  steak: "ingredients ...",
  "tuna sandwich": "ingredients",
};
const MealsContainer = ({}) => {
  return (
    <section className="mb-5">
      <select>
        <option>SelectMeal</option>
        {Object.keys(userFood).map((key, index) => {
          return (
            <option key={index} value={index}>
              {key}
            </option>
          );
        })}
      </select>
    </section>
  );
};

export default MealsContainer;
