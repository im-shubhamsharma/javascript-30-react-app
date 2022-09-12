import React, {useState} from "react";
import "./CSSvariableAndJS.css";

function CSSvariableAndJS(props) {
  
   const [inputData, setinputData] = useState({
     width: 80,
     height: 80,
     blur: 0,
     base: "#C74B50",
   });

   function handleChange(event){
      const {name, value} = event.target;
      setinputData(prevData => (
        {
            [name] : value 
        }
      ))
   }


  let allInputs = document.querySelectorAll("input");

  function handleUpdate() {
    const suffix = this.dataset.value || "";
    document.documentElement.style.setProperty(
      `--${this.name}`,
      this.value + suffix
    );
  }

  allInputs.forEach((input) => {
    input.addEventListener("change", handleUpdate);
    input.addEventListener("mousemove", handleUpdate);
  });

  return (
    <div className="bodyContainer">
      <div className="mainContainer">
        <h1>
          Update <span className="title">CSS</span> Variables with{" "}
          <span className="title">JS</span>
        </h1>

        <div className="input">
          <label>
            Width&nbsp;&nbsp;
            <input
              className="input-range"
              type="range"
              name="width"
              min="0"
              max="100"
              value={inputData.width}
              data-value="%"
              onChange={handleChange}
            />
          </label>

          <label>
            Height&nbsp;&nbsp;
            <input
              type="range"
              name="height"
              min="0"
              max="100"
              value={inputData.height}
              data-value="%"
              onChange={handleChange}
            />
          </label>

          <label>
            Blur&nbsp;&nbsp;
            <input
              type="range"
              name="blur"
              min="0"
              max="10"
              value={inputData.blur}
              data-value="px"
              onChange={handleChange}
            />
          </label>

          <label>
            Base Color&nbsp;&nbsp;
            <input
              type="color"
              name="base"
              value={inputData.base}
              onChange={handleChange}
              style={{height:"40px", padding:0, border:"none"}}
            />
          </label>
        </div>

        <div className="image">
          <img src="https://picsum.photos/800/500" />
        </div>
      </div>
    </div>
  );
}

export default CSSvariableAndJS;
