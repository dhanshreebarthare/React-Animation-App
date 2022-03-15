import React, { Component, useState } from "react";
import { XyzTransitionGroup, XyzTransition } from "@animxyz/react";
import "./index.css";
import "@animxyz/core";

function Animation() {

    const [counter, setCounter] = useState(3);

    function AddElement () {
        setCounter((counter) => counter + 1);
    }

    function DeleteElement () {
        setCounter((counter) => counter - 1);
    }
    
    
  return (
    <div className="App">
      <div className="example-wrap flex-col">
        <XyzTransitionGroup
          appear
          className="example-grid"
          xyz="fade small out-down out-rotate-right appear-stagger">
          {[...Array(counter)].map((_, index) => (
            <div className="square" key={index} />
          ))}
        </XyzTransitionGroup>

        <div className="flex-row">
          <button onClick={AddElement} className="example-button">
            Add Element
          </button>
          <button onClick={DeleteElement} className="example-button">
            Remove Element
          </button>
        </div>
      </div>
    </div>
  );
}

export default Animation;
