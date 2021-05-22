import { Fragment } from "react";
import classes from "../components/TodoItem.module.css";

const Todo = (props) => {
  return (
    <Fragment>
      <div className={classes.todoitem}>
        <h5>{props.work}</h5>
      </div>
    </Fragment>
  );
};

export default Todo;
