/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React from "react";

export default function Summary({ summaryObject }) {
  // const summaryList = summaryObject.summary.map((list) => {
  //   return <li>{list}</li>;
  // });

  const [originalText, setOriginalText] = React.useState(false);

  function handleClick() {
    setOriginalText((prevState) => !prevState);
  }

  return (
    <div className="summary--container">
      <p>
        <b>Reduction Percentage:</b> {summaryObject.reduction_percentage}
      </p>
      {/* {summaryObject.article_authors && (
        <p>
          <b>Authors:</b> {authorsList}
        </p>
      )} */}
      <hr className="summary--hr" />
      <p>
        <b>Summary: </b>
      </p>
      <div className="list--container">{summaryObject.summary}</div>
      <hr className="summary--hr" />
      <div className="summary--button">
        <button onClick={handleClick}>
          {originalText ? "Hide" : "Show"} Original Text
        </button>
      </div>
      <div>
        {originalText && (
          <p>
            <b>Original Text: </b>
            {summaryObject.original_text}
          </p>
        )}
      </div>
    </div>
  );
}
