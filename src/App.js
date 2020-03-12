import React from "react";
import TodoList from "./components/TodoList";
import "./App.css";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

function App() {
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className = "App-header">My to do list </Typography>
        </Toolbar>
      </AppBar>
      <TodoList />
    </div>
  );
}

export default App;
