import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";
import SwitchPage from "./components/SwitchPage";

export default function App() {
  //create default values for the summary page to use
  let [summary, setSummary] = useState({
    summary: "Please wait ...",
    original_text: "Please wait ...",
    reduction_percentage: "Please wait ...",
  });

  // theme
  let [darkTheme, setDarkTheme] = useState(false);

  //toggle theme
  function handleTheme() {
    return setDarkTheme((prevState) => !prevState);
  }

  //set the properties in the root div to change theme
  const theme = document.querySelector(":root").style;

  useEffect(() => {
    theme.setProperty("--text", darkTheme ? "#ebeefa" : "#0a1024");
    theme.setProperty("--background", darkTheme ? "#242425" : "#ebeefa");
    theme.setProperty("--primary-button", darkTheme ? "#b598f1" : "#8b66e8");
    theme.setProperty("--accent", darkTheme ? "#cfb9f6" : "#9831b4");
  });

  //to update the summary on receiving response from backend
  function updateSummary(newSummary) {
    setSummary(newSummary);
  }

  return (
    <div>
      <Header darkTheme={darkTheme} handleTheme={handleTheme} />
      <SwitchPage summary={summary} updateSummary={updateSummary} />
      <Footer />
    </div>
  );
}
