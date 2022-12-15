import React from "react";
import Data from "./Data";

const Buttons = ({ filterItem, setItem, filterItem2, setItem2, bucketListItems, bucketListItems2 }) => {
  return (
    <>
      <div>
        {bucketListItems.map((Val, id) => {
          return (
            <button
              className="btn-dark text-white p-1 px-2 mx-5 btn fw-bold"
              onClick={() => filterItem(Val)}
              key={id}
            >
              {Val}
            </button>
          );
        })}
       
        <button
          className="btn-dark text-white p-1 px-3 mx-5 fw-bold btn"
          onClick={() => setItem(Data)}
        >
          Show me all locations
        </button>


      </div>
      <div>
        {bucketListItems2.map((Val2, id) => {
          return (
            <button
              className="btn-dark text-white p-1 px-2 mx-5 btn fw-bold"
              onClick={() => filterItem2(Val2)}
              key={id}
            >
              {Val2}
            </button>
          );
        })}



      </div>

    </>
  );
};

export default Buttons;