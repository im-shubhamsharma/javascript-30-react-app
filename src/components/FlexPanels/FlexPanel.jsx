import React, { useEffect } from "react";
import "./FlexPanel.css";

function FlexPanel(props) {
  const data = [
    { id: 1, text: ["Hey", "Let's", "Dance"] },
    { id: 2, text: ["Give", "Take", "Receive"] },
    { id: 3, text: ["Experience", "It", "Today"] },
    { id: 4, text: ["Give", "All", "You Can"] },
    { id: 5, text: ["Life", "In", "Motion"] },
  ];

  function toggleOpen() {
    this.classList.toggle("open");
  }

  function toggleOpenActive(e) {
    if (e.propertyName.includes("flex")) {
      this.classList.toggle("open-active");
    }
  }

  useEffect(() => {
    const allPanels = document.querySelectorAll(".panel");

    allPanels.forEach((panel) => panel.addEventListener("click", toggleOpen));
    allPanels.forEach((panel) =>
      panel.addEventListener("transitionend", toggleOpenActive)
    );
  }, []);

  const dataArrElem = data.map((panel) => (
    <div key={panel.id} className={`panel panel${panel.id}`}>
      <p>{panel.text[0]}</p>
      <p>{panel.text[1]}</p>
      <p>{panel.text[2]}</p>
    </div>
  ));

  return (
    <div className="panel-body">
      <div className="panels">{dataArrElem}</div>
    </div>
  );
}

export default FlexPanel;
