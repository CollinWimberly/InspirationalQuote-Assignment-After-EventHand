const quotes = [
    {
        text: "me and your enlarged prostate",
        author: "Ryan Dean Vrobel",
        image: "media/Ryan Dean Vrobel.png"
    },
    {
        text: "frickin turd",
        author: "Nathan Daniel Woodring",
        image: "media/Nathan Daniel Woodring.jpg"
    },
    {
        text: "fin fin fin",
        author: "Lukah Zion Youngs",
        image: "media/Lukah Zion Youngs.jpg"
    },
    {
        text: "These little girls are so God damn exhilarating.",
        author: "Jonathan Davis",
        image: "media/Jonathan Davis.jpg"
    },
    {
        text: "When they fall asleep, I take my advantage.",
        author: "Walker Matheson Owens",
        image: "media/Voltorb The Meager.jpg"
    }
];

const imgElement = document.getElementById("quote-image");
const textElement = document.getElementById("quote-text");
const authorElement = document.getElementById("quote-author");
const button = document.getElementById("new-quote");

button.addEventListener("click", () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    textElement.textContent = `"${randomQuote.text}"`;
    authorElement.textContent = `- ${randomQuote.author}`;
    imgElement.src = randomQuote.image;
});
