const charactersNode = document.querySelector(".characters");
const buttonsNode = document.querySelector(".pages");

let p = 1;
let charactersCount = 1;
let i = 0;

//fetch page 1 of characters
let loadAPI = function(p) {
  console.log(p);
  charactersNode.innerHTML = "";
  fetch(`https://swapi.co/api/people/?page=${p}`)
    .then(function(response) {
      return response.json();
    })
    .then(function(body) {
      //get total no. of char.
      charactersCount = body.count;
      const results = body.results;
      //iterate to name and films of characters.
      const names = results.forEach(function(item) {
        //get character name
        item.name;
        const characterName = document.createElement("li");
        characterName.innerHTML = `${item.name}`;
        charactersNode.appendChild(characterName);

        //get character films
        item.films;

        //fetch film APIs

        //fetch film titles

        //push title into parent character name
        const characterFilm = document.createElement("p");
        characterFilm.innerHTML = `${item.films}`;
        characterName.appendChild(characterFilm);
      });
      console.log(charactersCount);
      //generate buttons
      if (i === 0) {
        count(charactersCount);
      }
      i++;
    });
  //console.log(Math.ceil(charactersCount / 10));
};
//inital API load
loadAPI(p);

console.log(charactersCount);
//function to create buttons
function count(charactersCount) {
  //no. of pages to create
  let pageNumbers = charactersCount / 10;
  //iterate to create buttons
  for (p = 1; p <= Math.ceil(pageNumbers); p++) {
    const button = document.createElement("button");
    button.innerHTML = `${p}`;
    buttonsNode.appendChild(button);
    console.log(charactersCount);
  }
}
//listen to buttons; change p value
buttonsNode.addEventListener("click", function(event) {
  p = event.target.textContent;
  console.log(p);
  loadAPI(p);
});
