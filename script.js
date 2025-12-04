const btnEl = document.getElementById("btn");
const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");

const apiKey = "4Re1NEI5kNbmIoOIc5jhfA==2TMRQh4gemoi7kT0";
const apiURL = "https://api.api-ninjas.com/v2/randomquotes";

async function getQuote() {
    try {
        btnEl.innerText = "Loading...";
        btnEl.disabled = true;

        quoteEl.style.opacity = "0";

        const response = await fetch(apiURL, {
            headers: { "X-Api-Key": apiKey }
        });

        const data = await response.json();

        const text = data[0].quote;
        const author = data[0].author;

        quoteEl.innerText = text;
        authorEl.innerText = "~ " + author;

        // плавное появление
        quoteEl.style.animation = "none";
        void quoteEl.offsetWidth;
        quoteEl.style.animation = "fadeIn 0.6s forwards";

        btnEl.innerText = "New quote";
        btnEl.disabled = false;
    }
    catch (error) {
        quoteEl.innerText = "An error occurred. Please try again.";
        authorEl.innerText = "";
        btnEl.innerText = "New quote";
        btnEl.disabled = false;
    }
}

btnEl.addEventListener("click", getQuote);
