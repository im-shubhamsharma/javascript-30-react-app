import { Routes, Route } from "react-router-dom";
import ProjectsFeed from "../pages/Projects/ProjectsFeed";
import JSDrumKit from "../components/JSDrumKit/JSDrumKit";
import Clock from "../components/Clock/Clock";
import CSSvariableAndJS from "../components/CSSvariableAndJS/CSSvariableAndJS";
import ArrayCardioDay1 from "../components/ArrayCardioDay1/ArrayCardioDay1"
import FlexPanel from "../components/FlexPanels/FlexPanel";
import AjaxTypeAhead from "../components/AjaxTypeAhead/AjaxTypeAhead";
import ArrayCardioDay2 from "../components/ArrayCardioDay2/ArrayCardioDay2"
import HtmlCanvas from "../components/HtmlCanvas/HtmlCanvas";
import DevTools from "../components/Must Know Dev Tools Tricks/DevTools";

import React from "react";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ProjectsFeed />} />
      <Route path="/JSDrumKit" element={<JSDrumKit />} />;
      <Route path="/Clock" element={<Clock />} />;
      <Route path="/variable" element={<CSSvariableAndJS />} />;
      <Route path="/array1" element={<ArrayCardioDay1 />} />;
      <Route path="/flexPanel" element={<FlexPanel />} />;
      <Route path="/ajaxType" element={<AjaxTypeAhead />} />;
      <Route path="/array2" element={<ArrayCardioDay2 />} />;
      <Route path="/canvas" element={<HtmlCanvas />} />;
      <Route path="/devtools" element={<DevTools />} />;
    </Routes>
  );
};

export default AllRoutes;
