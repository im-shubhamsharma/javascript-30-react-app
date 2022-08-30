import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import JSDrumKit from "./components/challenges/JSDrumKit/JSDrumKit";
import Clock from "./components/challenges/Clock/Clock";
import ProjectDetails from "./components/ProjectDetails/ProjectDetails";
import CSSvariableAndJS from "./components/challenges/CSSvariableAndJS/CSSvariableAndJS";

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
      </Routes>
    </div>
  );
}

export default App;
