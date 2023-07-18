/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React from "react";

export default function Summary({ article }) {
  const summaryList = article.summary.map((list) => {
    return <li>{list}</li>;
  });

  const authorsList = article.article_authors.map((author) => {
    return `${author}, `;
  });

  const [originalArticle, setOriginalArticle] = React.useState(false);

  function handleClick() {
    setOriginalArticle((prevState) => !prevState);
  }

  return article.key === 1 ? (
    <div className="summary--container">
      <p>Invalid URL</p>
    </div>
  ) : (
    <div className="summary--container">
      <p>
        <b>Article Title:</b> {article.article_title}
      </p>
      {article.article_pub_date && (
        <p>
          <b>Published:</b> {article.article_pub_date}
        </p>
      )}
      {article.article_authors && (
        <p>
          <b>Authors:</b> {authorsList}
        </p>
      )}
      <hr className="summary--hr" />
      <p>
        <b>Summary: </b>
      </p>
      <div className="list--container">
        <ul>{summaryList}</ul>
      </div>
      <hr className="summary--hr" />
      <div className="summary--button">
        <button onClick={handleClick}>
          {originalArticle ? "Hide" : "Show"} Original Article
        </button>
      </div>
      {originalArticle && (
        <div>
          <div className="article--img">
            <img src={article.article_image} alt="" />
          </div>
          <p>
            <b>Original Article: </b>
            {article.article_text}
          </p>
        </div>
      )}
    </div>
  );
}
