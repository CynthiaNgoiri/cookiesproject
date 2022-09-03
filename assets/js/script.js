document.addEventListener("DOMContentLoaded", () => {
      alert('Welcome to Cookie World')
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "58f4f307c6mshc449bff27fbaa20p18adbfjsn958b41eb22c9",
        "X-RapidAPI-Host": "edamam-food-and-grocery-database.p.rapidapi.com",
      },
    };
  
    fetch(
      "https://edamam-food-and-grocery-database.p.rapidapi.com/parser?ingr=apple",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        document.querySelector(
          "#chocochips"
        ).textContent = `${response.hints[0].food.category} 
          FAT:${response.hints[0].food.nutrients.FAT}`;
  
        document.querySelector(
          "#chocochips2"
        ).textContent = `${response.hints[0].food.category} 
          FAT:${response.hints[1].food.nutrients.FAT}`;
  
        document.querySelector(
          "#chocochips3"
        ).textContent = `${response.hints[0].food.category} 
          FAT:${response.hints[2].food.nutrients.FAT}`;
  
        document.querySelector(
          "#chocochips4"
        ).textContent = `${response.hints[0].food.category} 
          FAT:${response.hints[3].food.nutrients.FAT}`;
      })
      .catch((err) => console.error(err));
  });
  
  document.querySelector("#getStartedButton").addEventListener("click", () => {
    alert("Thank you for choosing Cookie World!");
    console.log("Thank you for choosing Cookie World!");
  });

const comment = document.getElementById("form");
comment.addEventListener("submit", event => {
event.preventDefault();
alert("Your message has been received,we will get back to shortly")
})