import React from "react";
import { useEffect } from "react";
import "./HoldShift.style.css";

const Holdshift = () => {


  useEffect(() => {
    const allInput = document.querySelectorAll("input");

    let lastChecked;

    function checkMultiple(e) {
      //check if shiftkey is pressed and this is checked

      let inBetween = false;
      allInput.forEach((input) => {
        if (e.shiftKey && this.checked) {
          if (input === this || input === lastChecked) {
            inBetween = !inBetween;
          }
        }

        if (inBetween) {
          input.checked = true;
        }
      });

      lastChecked = this;
    }

    allInput.forEach((input) => input.addEventListener("click", checkMultiple));
  });

  return (
    <div className="holdshiftcontainer">
      <h2 style={{ textAlign: "center", fontFamily: "helvetica neue" }}>
        Hold shift to select multiple boxes
      </h2>
      <div className="inbox">
        <div className="item">
          <input type="checkbox" />
          <p>This is an inbox layout.</p>
        </div>
        <div className="item">
          <input type="checkbox" />
          <p>Check one item</p>
        </div>
        <div className="item">
          <input type="checkbox" />
          <p>Hold down your Shift key</p>
        </div>
        <div className="item">
          <input type="checkbox" />
          <p>Check a lower item</p>
        </div>
        <div className="item">
          <input type="checkbox" />
          <p>Everything in between should also be set to checked</p>
        </div>
        <div className="item">
          <input type="checkbox" />
          <p>Try to do it without any libraries</p>
        </div>
        <div className="item">
          <input type="checkbox" />
          <p>Just regular JavaScript</p>
        </div>
        <div className="item">
          <input type="checkbox" />
          <p>Good Luck!</p>
        </div>
        <div className="item">
          <input type="checkbox" />
          <p>Don't forget to tweet your result!</p>
        </div>
      </div>
    </div>
  );
};

export default Holdshift;
