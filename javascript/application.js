import Mustache from "mustachejs";

console.log("hello from application.js")
const results = document.getElementById("results")
console.log(Mustache.render("<h1>{{title}}</h1>", {"title": "Hi from Mustache"}))

fetch("http://www.omdbapi.com/?s=harry potter&apikey=adf1f2d7")
.then(response => response.json())
.then((data) => {
  console.log(data)
  // do something with the data
  const template = document.getElementById('movieCardTemplate').innerHTML
  data.Search.forEach((movie) => {

    const output = Mustache.render(template, movie);
    results.insertAdjacentHTML("beforeend", output);

    })
  })
