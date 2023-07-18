/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home({ updateSummary }) {
  let url = "http://localhost:3000/";
  const navigate = useNavigate();

  const [input, setInput] = React.useState({
    url: "",
    num_sentences: 5,
  });

  function inputChange(event) {
    const { name, value } = event.target;
    setInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        url: input.url,
        num_sentences: input.num_sentences,
      }),
      redirect: "follow",
    })
      .then((response) => response.json())
      .then((result) => updateSummary(result))
      .catch((error) => console.log(error));
    navigate("/summary");
  }

  return (
    <div className="home--container">
      <p className="input--prompt">Paste the article's url to summarize</p>
      <form action="" onSubmit={handleSubmit}>
        <div className="input--options">
          <input
            className="input--url"
            type="url"
            name="url"
            value={input.url}
            placeholder="http://www.example.com/index.html"
            autoFocus
            onChange={inputChange}
          ></input>
          <div className="input--sentence__prompt">
            <div className="sentence--prompt">
              <p>How many sentences do you want?</p>
            </div>
            <div className="sentence--selector">
              <input
                className="input--sentences"
                type="number"
                name="num_sentences"
                value={input.num_sentences}
                onChange={inputChange}
              ></input>
            </div>
          </div>
        </div>
        <div className="input--button">
          <button type="submit">SUMMARIZE</button>
        </div>
      </form>
    </div>
  );
}
