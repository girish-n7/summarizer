# Summarizer

A simple web service to get the summary of any text you want. Enjoy quick and efficient summaries with the Summarizer service using Text Rank or Frequency methods!

## Technologies Used

- HTML
- CSS
- JavaScript
- React
- Express

## Features

- Control how many sentences the summary contain.
- Select the desired method to summarize.
  - Frequency based algorithm: This type of summary works best for text that is not too complicated.
    The advantage of this approach is that it more efficient than the textrank implementation.
  - TextRank based algorithm: While this approach costs more in terms of time complexity,
    it is better for getting the summary of things like newspaper articles and essays.
- View the reduction percentage.
- Option to view the Original Text to compare.

## Setup

Use the node package manager (npm) to install the dependencies.

- Clone this repo

```console
git clone https://github.com/girish-n7/summarizer.git
```

(or) download this repo as zip

- Install the dependencies once the repo is cloned.

```console
npm install
```

- Run the service on your localhost

```console
npm run dev
```

- The service will usually be hosted on http://localhost:5173/

## Usage

1. Copy the text of any article, news or any other text.
2. Paste the copied text in the input area provided.
3. Specify the number of sentences the summary should contain (value defaults to 5).
4. Click on SUMMARIZE and wait for few seconds.
5. That's it! The summary and reduction percentage should be displayed on the page.
6. Toggle the Hide/Show Original Text to view or hide the original text.

## Project Status

Online.

## Features that can be added

Ability to paste the link instead of text to extract the summary.

## Disclaimer

The summaries provided by this service are generated using automated algorithms. While efforts have been made to ensure accuracy, the summaries might not always reflect all the details in the original text. It's advisable to cross-reference with the original source for comprehensive understanding and verification.

## Contributing

Contributions are welcome! If you find any issues or want to enhance the app, feel free to open a pull request.

## Contact

[LinkedIn](https://www.linkedin.com/in/girish-n-7075ba1a4)

[Github](https://github.com/girish-n7)
