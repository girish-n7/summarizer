import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Help from "./components/Help";
import Summary from "./components/Summary";
import Error from "./components/Error";

export default function App() {
  const [summary, setSummary] = React.useState({
    summary: "Please wait ...",
    original_text: "Please wait ...",
    reduction_percentage: "Please wait ...",
    sentiment: "Please wait ...",
  });

  function updateSummary(newSummary) {
    setSummary(newSummary);
  }

  return (
    <div>
      <Header />
      <Routes>
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
      <Footer />
    </div>
  );
}
