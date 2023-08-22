<h1>Summarizer</h1>
    <p>A simple web service to get the summary of any text you want. Enjoy quick and efficient summaries with the Summarizer service using Text Rank or Frequency methods!</p>
 
<h2>Technologies Used</h2>
    <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Express</li>
    </ul>

<h2>Features</h2>
    <ul>
        <li>Control how many sentences the summary contain.</li>
        <li>Select the desired method to summarize.
            <ul>
                <li>Frequency based algorithm: This type of summary works best for text that is not too complicated.
                    The advantage of this approach is that it more efficient than the textrank implementation.
                </li>
                <li>TextRank based algorithm: While this approach costs more in terms of time complexity,
                    it is better for  getting the summary of things like newspaper articles and essays.
                </li>
            </ul>    
        </li>
        <li>View the reduction percentage.</li>
        <li>View the Original Text to compare.</li>
    </ul>
    
<h2>Setup</h2>
    <p>Use the node package manager (<a href="https://www.npmjs.com/">npm</a>) to install the dependencies.</p>

<h5>Steps</h5>
    <ul>
        <li>Use gh repo clone girish-n7/summarizer command to clone this repo (or) download as zip.</li>
        <li>Use npm install command to install the dependencies once the repo is cloned.</li>
        <li>Use npm run dev command to run the service on your localhost.</li>
        <li>The service will usually be hosted on http://localhost:5173/</li>
    </ul>

<h2>Usage</h2>
    <ol>
        <li>Copy the text of any article, news or any other text.</li>
        <li>Paste the copied text in the input area provided.</li>
        <li>Specify the number of sentences the summary should contain (value defaults to 5).</li>
        <li>Click on SUMMARIZE and wait for few seconds.</li>
        <li>That's it! The summary and reduction percentage should be displayed on the page.</li>
        <li>Toggle the Hide/Show Original Text to view or hide the original text.</li>
    </ol>
    
<h2>Project Status</h2>
    <p>Online.</p>

<h2>Features that can be added</h2>
    <ul>
        <li>Ability to paste the link instead of text to extract the summary.</li>
    </ul>

<h2>Disclaimer</h2>
    <p>The summaries provided by this service are generated using automated algorithms. While efforts have been made to ensure accuracy, the summaries might not always reflect all the details in the original text. It's advisable to cross-reference with the original source for comprehensive understanding and verification.</p>
 
<h2>Contributing</h2>
    <p>Contributions are welcome! If you find any issues or want to enhance the app, feel free to open a pull request.</p>

<h2>Contact</h2>
    <p><a href="https://www.linkedin.com/in/girish-n-7075ba1a4">LinkedIn</a></p>
    <p><a href="https://github.com/girish-n7">Github</a></p>
