export default function Help() {
  return (
    <div className="help--container">
      <p className="help--head">
        Here&#8217;s how to use Summarizer to get the summary of any text you
        want: <hr className="help--hr" />
      </p>
      <ol className="help--instructions">
        <li>
          <span className="help--instructions__bold">Input Text: </span> Paste
          the text into the provided area.
          <br />
        </li>
        <li>
          <span className="help--instructions__bold">Choose Method: </span>
          Select your preferred summarization method: <br />
          <ul>
            <li>
              Frequency Method: Highlights sentences with most frequent words.
            </li>
            <li>
              Text Rank Method: Analyzes text structure to identify key
              sentences.
            </li>
          </ul>
        </li>
        <li>
          <span className="help--instructions__bold">
            Choose Summary Length:{" "}
          </span>
          Select the number of sentences for the summary.
          <br />
        </li>
        <li>
          <span className="help--instructions__bold">Generate Summary: </span>
          Click &#34;Summarize&#34; to get the summary.
          <br />
        </li>
        <li>
          <span className="help--instructions__bold">View Summary: </span>
          Read the concise summary provided.
          <br />
        </li>
        <li>
          <span className="help--instructions__bold">Copy Summary: </span>
          Select and copy the summary for your use.
          <br />
        </li>
        <li>
          <span className="help--instructions__bold">Note on Accuracy: </span>
          Summaries may not capture all details.
          <br />
        </li>
        <li>
          <span className="help--instructions__bold">Use Wisely: </span>
          Ideal for quick insights, not for critical decisions.
          <br />
        </li>
        <li>
          <span className="help--instructions__bold">Done: </span>
          Enjoy quick and effective text summaries!
          <br />
        </li>
      </ol>
      <div className="help--disclaimer">
        <p>
          <span className="disclaimer--head">
            Disclaimer: Accuracy and Correctness
          </span>
          <br />
          The summarization provided by this app is generated through automated
          algorithms. While utmost effort has been dedicated to ensuring the
          accuracy and correctness of the summaries, it&#8217;s important to
          note that the output might not always reflect nuanced or complex
          details present in the original text. The summaries should be used as
          a tool to quickly grasp the main ideas, but they may not be suitable
          for critical decisions or scholarly purposes without further
          verification. Users are advised to cross-reference with the original
          source for comprehensive understanding and to verify accuracy.
        </p>
      </div>
    </div>
  );
}
