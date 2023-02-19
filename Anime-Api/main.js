const btn = document.querySelector("#btn");
const animecharacter = document.querySelector(".hidden");
const input = document
  .querySelector("#input")
  .addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      const input = document.querySelector("#input");
      let value = input.value;

      AnimeApi(value);
      console.log(value);
    }
  });

btn.addEventListener("click", (e) => {
  e.preventDefault();
  const input = document.querySelector("#input");
  let value = input.value;

  AnimeApi(value);
  console.log(value);
});
async function AnimeApi(animeName) {
  let response = await fetch(
    `https://animechan.vercel.app/api/quotes/anime?title=${animeName}`
  );
  let quote = await response.json();

  printDomeElement(quote);
}

function printDomeElement(quotesList) {
  if (quotesList.lenght == 0) {
    return;
  }

  quotesList.forEach((element) => {
    animecharacter.insertAdjacentHTML(
      "beforeend",
      `
          <div class="textel">
            <p>Anime: ${element?.anime}</p>
            <p>Character: ${element?.character}</p>
            <p>Quote: ${element?.quote}</p>
          </div>`
    );
  });
}
