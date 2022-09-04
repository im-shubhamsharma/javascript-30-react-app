import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import JSDrumKit from "./components/challenges/JSDrumKit/JSDrumKit";
import Clock from "./components/challenges/Clock/Clock";
import ProjectDetails from "./components/ProjectDetails/ProjectDetails";
import CSSvariableAndJS from "./components/challenges/CSSvariableAndJS/CSSvariableAndJS";
import ArrayCardioDay1 from "./components/challenges/ArrayCardioDay1/ArrayCardioDay1";
import FlexPanel from "./components/challenges/FlexPanels/FlexPanel";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Projects />
              <Header />
            </>
          }
        />
        <Route path="/JSDrumKit" element={<JSDrumKit />} />
        <Route path="/clock" start={true} element={<Clock />} />
        <Route path="/variable" element={<CSSvariableAndJS />} />
        <Route path="/array1" element={<ArrayCardioDay1 />} />
        <Route path="/flexPanel" element={<FlexPanel />} />
      </Routes>
    </div>
  );
}

export default App;
