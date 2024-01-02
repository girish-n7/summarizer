/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { useNavigate } from "react-router-dom";
import FetchSummary from "./FetchSummary";

export default function Home({ updateSummary }) {
  const navigate = useNavigate();

  const [input, setInput] = React.useState({
    text: "",
    num_sentences: 5,
    selectedMethod: "frequencyMethod",
  });

  //update inputs req for summary using useState

  function inputChange(event) {
    const { name, value } = event.target;
    setInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  //call backend service to fetch summary

  function handleSubmit(event) {
    event.preventDefault();

    FetchSummary(input)
      .then((response) => response.json())
      .then((result) => updateSummary(result))
      .catch((error) => console.log(error));
    navigate("/summary");
  }

  return (
    <div className="home--container">
      <p className="input--prompt">Paste the text to summarize</p>
      <div className="input--options">
        <textarea
          className="input--text"
          rows={3}
          type="text"
          name="text"
          value={input.text}
          placeholder="Paste your text here"
          required
          autoFocus
          onChange={inputChange}
        ></textarea>
        <div className="input--sentence__prompt">
          <p className="sentence--prompt">How many sentences do you want?</p>
          <div className="sentence--selector">
            <input
              className="input--sentences"
              type="number"
              name="num_sentences"
              value={input.num_sentences}
              min="3"
              max="9"
              onChange={inputChange}
            ></input>
          </div>
        </div>
        <div className="input--method">
          <p>Select Method</p>
          <p
            className="input--method__info"
            title="See How to use section for more info"
          >
            ?
          </p>
          <label>
            <input
              type="radio"
              className="input--method__button"
              name="selectedMethod"
              value="frequencyMethod"
              onChange={inputChange}
              checked={input.selectedMethod === "frequencyMethod"}
            />
            Frequency Method
          </label>
          <label>
            <input
              type="radio"
              className="input--method__button"
              name="selectedMethod"
              value="textRankMethod"
              onChange={inputChange}
              checked={input.selectedMethod === "textRankMethod"}
            />
            Text Rank Method
          </label>
        </div>
      </div>
      <button className="input--button" onClick={handleSubmit}>
        Summarize
      </button>
    </div>
  );
}
