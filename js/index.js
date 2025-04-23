const sentences = [
    "Hi there!",
    "How are you?",
    "Welcome to my website!",
    "Have a great day!",
    "Keep smiling!",
    "Believe in yourself!",
    "Stay positive!",
  ];

const image = document.getElementById("image");
const textContainer = document.getElementById("text-container");

image.addEventListener("click", (event) => {
textContainer.innerHTML = "";
const randomIndex = Math.floor(Math.random() * sentences.length);
const randomSentence = sentences[randomIndex];
textContainer.innerHTML += `<p>${randomSentence}</p>`;
});