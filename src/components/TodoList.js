import React, { useState } from "react";
import ReactTable from "react-table-v6";
import "react-table-v6/react-table.css";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Tooltip from "@material-ui/core/Tooltip";

const Todolist = () => {
  const [todo, setTodo] = useState({ desc: "", date: "" });
  const [todos, setTodos] = useState([]);

  const addTodo = event => {
    event.preventDefault();
    setTodos([{ desc: todo.desc, date: todo.date }, ...todos]);
    setTodo({ desc: "", date: "" });
  };

  const inputChanged = event => {
    setTodo({ ...todo, [event.target.name]: event.target.value });
  };

  const handleDelete = event => {
    event.preventDefault();
    setTodos(todos.filter((_, index) => index !== parseInt(event.target.id)));
  };

  const columns = [
    {
      Header: "Date",
      accessor: "date" // String-based value accessors!
    },
    {
      Header: "Description",
      accessor: "desc"
    },
    {
      Cell: ({ index }) => (
        <Button
          color="secondary"
          size="small"
          id={index}
          onClick={handleDelete}
        >
          Delete
        </Button>
      ),
      filterable: false,
      sortable: false
    }
  ];

  return (
    <div>
      <form>
        <label>Data: </label>
        <input
          type="date"
          name="date"
          value={todo.date}
          onChange={inputChanged}
        />
        <label>Description: </label>
        <input
          type="text"
          name="desc"
          value={todo.desc}
          onChange={inputChanged}
          placeholder="description"
        />
        <Tooltip title="Add to do things">
          <IconButton color="primary" onClick={addTodo}>
            <AddCircleIcon fontSize="large" />
          </IconButton>
        </Tooltip>
      </form>
      <ReactTable filterable={true} data={todos} columns={columns} />
    </div>
  );
};

export default Todolist;
