import React from "react";
import "./styles.css";

export function DisplayList({ itemList, setArrayFunction }) {
  // console.log(props.itemList);
  // console.log(props.setArrayFunction);

  const deleteItem = (item) => {
    console.log(itemList);
    const newList = itemList.filter((el) => {
      return el !== item;
    });
    setArrayFunction(newList);
  };

  return (
    <div>
      <h2>
        {itemList.map((item) => {
          return (
            <div className="itemDiv" key={item}>
              <p>{item} </p>
              <button
                onClick={() => deleteItem(item)}
                style={{ backgroundColor: "orange" }}
                style={{ cursor: "pointer" }}
              >
                X
              </button>
            </div>
          );
        })}
      </h2>
    </div>
  );
}
