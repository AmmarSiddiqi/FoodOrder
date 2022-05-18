import { useRef, useState } from "react";
import Input from "../UI/Input";
import classes from "../../styles/meals/MealItemForm.module.scss";

const MealItemForm = (props) => {
  const amountInputRef = useRef();
  const [validAmount, setValidAmount] = useState(true);
  const handleSubmit = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim() === "" ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 6
    ) {
      setValidAmount(() => false);
    }

    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={classes.container} onSubmit={handleSubmit}>
      <Input
        label="Amount"
        ref={amountInputRef}
        input={{
          type: "number",
          id: "amount",
          name: "amount",
          min: 1,
          max: 6,
          defaultValue: 1,
          step: 1,
        }}
      ></Input>
      <button>+Add</button>
      {!validAmount && <p>Invalid Amount</p>}
    </form>
  );
};

export default MealItemForm;
