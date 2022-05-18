import classes from "../../styles/common/Button.module.scss";

const Button = (props) => {
  const { label, ...rest } = props;
  return <button {...rest}>{label}</button>;
};

export default Button;
