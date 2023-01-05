var quotes = [
  {
    author: "Oscar Wilde",
    desc: "Be yourself; everyone else is already taken",
  },
  {
    author: "Robert Frost",
    desc: "In three words I can sum up everything Ive learned about life: it goes on",
  },
  {
    author: " Wilde",
    desc: "Be yourself; everyone else is already taken",
  },
  {
    author: " Frost",
    desc: "In three words I can sum up everything Ive learned about life: it goes on",
  },
];

function generateQuote() {
  var index = Math.floor(Math.random() * quotes.length);

  document.getElementById("demo").innerHTML = `<div>
    <h2>${quotes[index].author}</h2>
    <p>${quotes[index].desc}</p>
  </div>`;
}
