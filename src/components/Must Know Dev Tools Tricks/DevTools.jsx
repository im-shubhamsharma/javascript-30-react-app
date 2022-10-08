import React, { useEffect, useRef } from "react";

const DevTools = () => {
  const pRef = useRef();

  function makeGreen(){
    const p = pRef.current;
    p.style.color = "#BADA55";
    p.style.fontSize = "50px";
  }

  useEffect(() => {



    const dogs = [
      { name: "Snickers", age: 2 },
      { name: "hugo", age: 8 },
    ];

    // Regular
    console.log("hello");

    // Interpolated
    console.log("Hello I am a %s string!", "💩");

    // Styled
    console.log('%c I am some great text', 'font-size:50px; background:red; text-shadow: 10px 10px 0 blue')

    // warning!
    console.warn("OH NOOO");

    // Error :|
    console.error("Shit!");

    // Info
    console.info("Crocodiles eat 3-4 people per year");

    // Testing
    const p = pRef.current;

    console.assert(p.classList.contains("ouch"), "That is wrong!");

    // clearing
    // console.clear();

    // Viewing DOM Elements
    // console.log(p);
    // console.dir(p);

    // console.clear();

    // Grouping together
    dogs.forEach((dog) => {
      console.groupCollapsed(`${dog.name}`);
      console.log(`This is ${dog.name}`);
      console.log(`${dog.name} is ${dog.age} years old`);
      console.log(`${dog.name} is ${dog.age * 7} dog years old`);
      console.groupEnd(`${dog.name}`);
    });

    // counting

    console.count("Shubham");
    console.count("Shubham");
    console.count("Sharma");
    console.count("Sharma");
    console.count("Shubham");
    console.count("Wolfee");
    console.count("Wolfee");
    console.count("Sharma");
    console.count("Sharma");
    console.count("Sharma");
    console.count("Sharma");
    console.count("Sharma");

    // timing
    console.time("fetching data");
    fetch("https://api.github.com/users/wesbos")
      .then((data) => data.json())
      .then((data) => {
        // console.timeEnd("fetching data");
        // console.log(data);
      });

    console.table(dogs);

    console.log(pRef.current);
  }, []);

  return (
    <div>
      <p
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
        }}
        ref={pRef}
        onClick={(e) => {
            e.target.textContent = "Now go look into JS Console";
            makeGreen();
        }}
      >
        XX Do not click here XX
      </p>
    </div>
  );
};

export default DevTools;
