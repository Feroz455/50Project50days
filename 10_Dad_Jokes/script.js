const joke = document.querySelector("#joke");
const button = document.querySelector("#jokebtn");
// joke.innerText = "";

// const GenerateJoke = function () {
//   let config = {
//     header: {
//       Accept: "application/json",
//     },
//   };
//   joke.innerText = "";

//   fetch("https://icanhazdadjoke.com/slack", config)
//     .then((response) => response.json())
//     .then((data) => {
//       joke.innerText = data.attachments[0].text;
//     });
// };
// GenerateJoke();

// const GenerateJoke = function () {
//   const config = {
//     headers: {
//       Accept: "application/json",
//     },
//   };
//   joke.innerText = "";

//   fetch("https://icanhazdadjoke.com/", config)
//     .then((res) => res.json())
//     .then((data) => (joke.innerText = data.joke));
// };

const GenerateJoke = async function () {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  joke.innerText = "";

  const res = await fetch("https://icanhazdadjoke.com/", config);
  const data = await res.json();
  joke.innerText = data.joke;
};

button.addEventListener("click", GenerateJoke);
GenerateJoke();
