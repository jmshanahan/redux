import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import store from "./store";
//This is actually bringing in the action creator.

// const todoChangeHaldler = val => store.dispatch(updateCurrent(val));

// const render = () => {
// const state = store.getState();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);
// };
// render();
// store.subscribe(render);
// setTimeout(() => {
//   store.dispatch({
//     type: "TODO_ADD",
//     payload: { id: 4, name: "New Todo", isComplete: false }
//   });
// }, 2000);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
