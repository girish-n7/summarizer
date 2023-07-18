// import React from "react";

export default function Help() {
  return (
    <div className="help--container">
      <p className="help--head">
        Here&#8217;s how to use Summarizer to get the summary of any article you
        want: <hr className="help--hr" />
      </p>
      <ol className="help--instructions">
        <li>
          Copy the link of the article to be summarized.
          <br />
        </li>
        <li>
          Paste it in the URL input area provided.
          <br />
        </li>
        <li>
          Select how many sentences the summary should contain.
          <br />
        </li>
        <li>
          Click on Summarize and wait for a few seconds.
          <br />
          Note: It may take more than a few seconds based on the server
          busy-ness.
          <br />
        </li>
        <li>
          That&#8217;s it! You should see the summary displayed.
          <br />
          (You can also view the original article by clicking on the Show
          Original Article button.)
        </li>
      </ol>
    </div>
  );
}
