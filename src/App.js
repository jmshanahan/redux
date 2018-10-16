import React, { Component } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Message from "./components/Message";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-header">
          <p>Welcome to react with redux</p>
        </h1>
        <div className="Todo-App">
        <Message className="message" message="Hello there"/>
          <TodoForm />
          <TodoList />
        </div>
      </div>
    );
  }
}

// export default App;
// const mapStateToProps = state => state;
// const mapDispatchToProps = { updateCurrent };
// const ConnectedApp = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(App);
export default App;
