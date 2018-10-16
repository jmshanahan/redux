import React, { Component } from "react";
import {BrowserRouter as Router, Route} from "react-router-dom"
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Message from "./components/Message";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-header">
          <p>Welcome to react with redux</p>
        </h1>
        <Router>
        <div className="Todo-App">
          <Message className="message" message="Hello there"/>
          <TodoForm />
          <Route path="/:filter?" render={({match})=>(
            <TodoList filter={match.params.filter}/>
          )}/>
          <Footer/>
        </div>
        </Router>
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
