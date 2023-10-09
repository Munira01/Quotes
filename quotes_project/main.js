const API_url = "https://jacintodesign.github.io/quotes-api/data/quotes.json"

const box = document.querySelector(".box")
const button = document.querySelector(".buttonBox")

async function getQuotes(){
    const request = await fetch(API_url);
    const response = await request.json();
    const rounded = Math.floor(Math.random() * response.length) 
    const h2 = document.querySelector(".h2Text")
    h2.textContent = response[rounded].text;
}

getQuotes()

button.addEventListener("click", ()=> {
    getQuotes()
})