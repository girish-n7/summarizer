/* eslint-disable react/prop-types */

import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Summary from "./Summary";
import Contact from "./Contact";
import Help from "./Help";
import Error from "./Error";

export default function SwitchPage({ summary, updateSummary }) {
  return (
    <Routes key={location.pathname}>
      <Route
        exact
        path="/"
        element={<Home updateSummary={updateSummary} />}
      ></Route>
      <Route
        exact
        path="/summary"
        element={<Summary summaryObject={summary} />}
      ></Route>
      <Route exact path="/contact" element={<Contact />}></Route>
      <Route exact path="/help" element={<Help />}></Route>
      <Route exact path="*" element={<Error />}></Route>
    </Routes>
  );
}
