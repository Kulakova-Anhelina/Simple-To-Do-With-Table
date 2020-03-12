import React, { useState } from "react";
import ReactTable from "react-table-v6";
import "react-table-v6/react-table.css";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Tooltip from "@material-ui/core/Tooltip";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";

const Todolist = () => {
  const currentDate = new Date() ;
  const [todo, setTodo] = useState({ desc: "", date: currentDate });
  const [todos, setTodos] = useState([]);

  const addTodo = event => {
    event.preventDefault();
    setTodos([{ desc: todo.desc, date: todo.date.toLocaleDateString()}, ...todos]);
    setTodo({ desc: "", date: currentDate });
  };

  const inputChanged = event => {
    setTodo({ ...todo, [event.target.name]: event.target.value });
  };

  const handleDateChange = date => {
    setTodo({...todo, date: date});
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
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container justify="space-around">
          <KeyboardDatePicker
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="Date"
            style={{ marginRight: 10 }}
            value={todo.date}
            onChange={handleDateChange}
          />
        </Grid>
      </MuiPickersUtilsProvider>
      <TextField
        label="Description:"
        style={{ marginRight: 10 }}
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
      <ReactTable filterable={true} data={todos} columns={columns} />
    </div>
  );
};

export default Todolist;
