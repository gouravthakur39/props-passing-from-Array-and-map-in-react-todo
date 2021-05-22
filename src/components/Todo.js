import { Fragment } from "react";
import classes from "../components/Todo.module.css";
import TodoItem from "./TodoItem";

const DUMMY_WORK = [
  {
    id: "1",
    workitem: "Take out all thrash",
  },

  {
    id: "2",
    workitem: "Go to college and collect certificates",
  },
  {
    id: "3",
    workitem: "Party planning for birthday",
  },
  {
    id: "4",
    workitem: "Learn reactjs from udemy",
  },
  {
    id: "6",
    workitem: "chintu ko maaro",
  },
];

const Todo = (props) => {
  const WorkList = DUMMY_WORK.map((workFromArray) => (
    <TodoItem key={workFromArray.id} work={workFromArray.workitem} />
  ));
  return (
    <Fragment>
      <div className={classes.todo}>
        <h3>Today's Work</h3>
        <ul>{WorkList}</ul>
      </div>
    </Fragment>
  );
};

export default Todo;
