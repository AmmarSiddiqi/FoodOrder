import { getMeals } from "../../services/fakeMeal";
import MealItem from "./MealItem";
import Wrapper from "../UI/Wrapper";
const AvailableMeals = () => {
  const meals = getMeals();
  return (
    <section>
      <ul>
        <Wrapper>
          {meals.map((meal) => (
            <MealItem meal={meal} key={meal.id} />
          ))}
        </Wrapper>
      </ul>
    </section>
  );
};

export default AvailableMeals;
