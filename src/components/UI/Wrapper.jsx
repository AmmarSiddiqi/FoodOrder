import classes from "../../styles/UI/Wrapper.module.scss";

const Wrapper = (props) => {
  return <div className={classes.Container}>{props.children}</div>;
};

export default Wrapper;
