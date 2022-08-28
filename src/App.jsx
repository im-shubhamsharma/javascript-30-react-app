import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import JSDrumKit from "./components/challenges/JSDrumKit/JSDrumKit";
import Clock from "./components/challenges/Clock/Clock";
import ProjectDetails from "./components/ProjectDetails/ProjectDetails";

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
        <Route path="/clock" element={<Clock />} />
      </Routes>
    </div>
  );
}

export default App;
