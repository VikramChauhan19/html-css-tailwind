import React from "react";
import data from "./data";
import Tours from "./components/Tours"; //default export
import { useState } from "react"; //named export thats why curly braces

const App = () => {
  const [tours, setTours] = useState(data);

  function removeTourHandler(id) {
    const newTour = tours.filter((tour) => {
      return tour.id !== id; //filtering out the tour with the given id
    });
    setTours(newTour);
  }

  if (tours.length === 0) {
    return (
      <div className="refresh">
        <h2>No Tours Left</h2>
        <button className="btn-white" onClick={() => setTours(data)}>Refresh</button>
      </div>
    );
  }

  return (
    <div className="app">
      <Tours tours={tours} removeTourHandler={removeTourHandler}></Tours>
    </div>
  );
};

export default App;
