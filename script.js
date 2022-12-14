
// Object Array to hold jokes, reactions
// jokes are collected from [till 36] https://bestlifeonline.com/funny-short-jokes/
// emojis https://getemoji.com/
let jokes = [
  {
    joke: "What kind of exercise do lazy people do? Diddly-squats.",
    reaction: "Hopefully, you got it ππππ"
  },
  {
    joke: "I invented a new word!\nPlagiarism!",
    reaction: "π€ͺ Don't slap π¬"
  },
  {
    joke: "What do you call a pony with a cough? A little horse!",
    reaction: "π€£ poor mathematician"
  },
  {
    joke: "What is Forrest Gump's password? 1Forrest1.",
    reaction: "π€« don't share"
  },
  {
    joke: "Helvetica and Times New Roman walk into a bar.</br>'Get out of here!' shouts the bartender. 'We donβt serve your type.'",
    reaction: "π€ why so!"
  },
  {
    joke: "Why did the M&M go to school? He wanted to be a Smartie.",
    reaction: "π"
  },
  {
    joke: "What did one traffic light say to the other? Stop looking at me, I'm changing!",
    reaction: "π"
  },
  {
    joke: "What do you call bears with no ears? <b>B.</b>",
    reaction: "π€£"
  },
  {
    joke: "What's a foot long and slippery? A slipper!",
    reaction: "π"
  },
  {
    joke: "What's red and moves up and down? A tomato in an elevator!",
    reaction: "π€£"
  },
  {
    joke: "What is sticky and brown? A stick!",
    reaction: "π€£"
  },
  {
    joke: "How does a rabbi make coffee? Hebrews it!",
    reaction: "π€£"
  },
  {
    joke: "Rest in peace boiling water.You will be mist!",
    reaction: "π€£"
  },
  {
    joke: "How do you throw a space party? You planet!",
    reaction: "π€£"
  },
  {
    joke: "Want to hear a construction joke? Oh never mind, I'm still working on that one.",
    reaction: "π€£"
  },
  {
    joke: "Why don't scientists trust atoms? Because they make up everything!",
    reaction: "π€£"
  },
  {
    joke: "I hate Russian dollsβ¦ they're so full of themselves!",
    reaction: "π€£"
  },
  {
    joke: "Talk is cheap? Have you ever talked to a lawyer?",
    reaction: "π€£"
  },
  {
    joke: "Why did the gym close down? It just didn't work out!",
    reaction: "π€£"
  },
  {

    joke: "Two artists had an art contest.It ended in a draw!",
    reaction: "π π π π€£"
  },
  {
    joke: "A plateau is the highest form of flattery.",
    reaction: "π"
  },
  {
    joke: "I have a fear of speed bumps.But I am slowly getting over it.",
    reaction: "π€£"
  },
  {
    joke: "You can only get spoiled milk from a pampered cow.",
    reaction: "π"
  },
  {
    joke: "What do you call a boomerang that doesn't come back? A stick!",
    reaction: "π"
  },
  {
    joke: "You know what I saw today? Everything I looked at.",
    reaction: "π π π π€ͺ"
  },
  {
    joke: "Why do French people eat snails?<br>They don't like fast food!",
    reaction: "π Not so bad joke"
  },
  {
    joke: "What are a shark's two most favorite words? Man overboard!",
    reaction: "π¦"
  },
  {
    joke: "If we shouldn't eat at night, why do they put a light in the fridge?",
    reaction: "π€"
  },
  {
    joke: "Have you ever tried eating a clock? It's really time-consuming, especially if you go for seconds.",
    reaction: "π°οΈ"
  },
  {
    joke: "Why are ghosts such bad liars? Because they are easy to see through.",
    reaction: "Any ghost here π¨"
  },
  {
    joke: "It's cleaning day so naturally, I've already polished off a whole chocolate bar.",
    reaction: "π«"
  },
  {
    joke: "What did the buffalo say when his son left for college? Bison!",
    reaction: "π"
  },
  {
    joke: "Here, I bought you a calendar. Your days are numbered now.",
    reaction: "π€£"
  },
  {
    joke: "Where do fish sleep? In the riverbed.",
    reaction: "π"
  },
  {
    joke: "What did one plate say to his friend? Tonight, dinner's on me!",
    reaction: "π½οΈ π€£"
  },
  {
    joke: "Where are average things manufactured? The satisfactory.",
    reaction: "π"
  },
  {
    joke: "I tried to sure the airport for misplacing my luggage. I lost my case.",
    reaction: "π π€ͺ"
  }
];

//Function to randomly select a joke value and return a random joke object from the jokes array
function getRandomjoke() {
  let randomNumber = Math.floor(Math.random() * (jokes.length));
  let randomJoke = jokes[randomNumber];
  return randomJoke;
}

//Function to select random rgb color value
function getRandomColor() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  let randomColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
  return randomColor;
}

//Function to call the getRandomjoke function and stores the returned joke object in a letiable
//Constructs a string containing the different properties of the joke object 
function printJoke() {
  let jokes = getRandomjoke();
  let jokeContainer = document.getElementById("joke-box");
  let jokeString = `<p class="joke">${jokes.joke}</p><p class="reaction">${jokes.reaction}`
  jokeContainer.innerHTML = jokeString;

  //assigns random color value to document background color 
  document.body.style.backgroundColor = getRandomColor();
}

//joke automatically refreshes every 15 seconds
window.setInterval(function() {
  printJoke();
}, 15000);

//Event listener on Loadjoke button to generate new joke		
document.getElementById("loadJoke").addEventListener("click", printJoke, false);