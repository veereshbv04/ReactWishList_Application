import React, { useState } from "react";
import { DisplayList } from "./DisplayList";

export function WishList() {
  const [userText, setUserText] = useState(" ");
  const [arr, setArray] = useState([]);

  function onClickHandler(event) {
    event.preventDefault();
    console.log(userText);

    setArray([...arr, userText]);
    console.log(arr);
    setUserText(" ");
  }

  return (
    <div>
      <form>
        <input
          placeholder="Add Wish"
          type="text"
          value={userText}
          onInput={(e) => setUserText(e.target.value)}
          required
        />
        <button
          type="submit"
          onClick={onClickHandler}
          style={{ cursor: "pointer" }}
        >
          Add
        </button>
      </form>
      <DisplayList itemList={arr} setArrayFunction={setArray} />
    </div>
  );
}
