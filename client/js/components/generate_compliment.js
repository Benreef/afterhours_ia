
function renderCompliment() {
  document.querySelector('#page').innerHTML = `
    <div id="quoteContainer">
      <p id="quote"></p>
      <button id="newQuoteButton">New Quote</button>
    </div>
  `
}

// Get references to HTML elements
const quoteContainer = document.getElementById('quoteContainer');
const quoteText = document.getElementById('quote');
const newQuoteButton = document.getElementById('newQuoteButton');

// Function to generate a random quote
function generateRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  return randomQuote;
}

// Event listener for the "New Quote" button click
newQuoteButton.addEventListener('click', () => {
  const randomQuote = generateRandomQuote();
  quoteText.textContent = randomQuote;
});

// Initial quote display
quoteText.textContent = generateRandomQuote();


const compliments = [
  "Your wit is so sharp, I'm surprised there aren't caution signs around you.",
  "High five = ^5",
  "I'm convinced you have a secret stash of jokes hidden somewhere because you're always armed and funny.",
  "It's almost beer o'clock",
  "Your jokes are so good that even Siri laughs when you tell them.",
  "If life were a game, you would be the master of playful banter and mischievous antics.",
  "Your comedic timing is so on point, I suspect you have a built-in laugh track.",
  "It's not a bug, it's an undocumented feature!",
  "I would love to change the world, but they won't give me the source code.",
  "There are only 10 types of people in the world: those who understand binary, and those who don't.",
  "Guide for asking with efficiency",
  "Please review",

  //caffeine related
  "Programmers are tools for converting caffeine into code.",
  "Coffee: because coding without caffeine is like trying to drive with the parking brake on.",
  "I don't need an alarm clock, I have caffeine-infused code running through my veins.",
  "Java: the only language that gets better with coffee.",
  "Behind every great coder is an even greater amount of caffeine.",
  "Coffee and code: the perfect blend for productivity (and jitters).",
  "I'm not addicted to coffee, I'm just in a committed relationship.",
  "Debugging without caffeine is like trying to find a needle in a haystack with oven mitts on."
  ];