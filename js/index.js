// Implement the functionality to display a random sentence from the array when the image is clicked
const sentences = [
    "Hi there!",
    "How are you?",
    "I'm Boran!",
    "Let's connect!",
    "Keep smiling!",
    "Stay positive!",
    "You are amazing!",
    "Never give up!",
    "Dream big!",
    "Make it happen!",
    "Stay focused!",
    "You got this!",
  ];

const image = document.querySelector(".portfolio-image");
const textContainer = document.getElementById("text-container");

image.addEventListener("click", (event) => {
textContainer.innerHTML = "";
const randomIndex = Math.floor(Math.random() * sentences.length);
const randomSentence = sentences[randomIndex];
textContainer.innerHTML += `<p>${randomSentence}</p>`;
});