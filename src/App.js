import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { MainItem, DetailItem, ItemInput } from "./Components/ListIndex";
import "./App.css";

function App() {
  return (
    <div>
      <h1>Project 2020-2</h1>
      <Router>
        <Route exact path="/" component={MainItem} />
        <Route path="/detailItem/:id" component={DetailItem} />
        <Route path="/iteminput" component={ItemInput} />
      </Router>
    </div>
  );
}

export default App;
