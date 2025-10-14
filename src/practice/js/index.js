import { $axios } from "./axiosHelper";
import { createErrorElement, createElements } from "./createElement.js";

window.addEventListener("DOMContentLoaded", () => {
  const listElement = document.getElementById("list");

  $axios("https://pokeapi.co/api/v2/pokemon/?limit=151")
    .then((response) => {
      for (const i in response.data.results) {
        console.log(i);
        $axios(response.data.results[i].url)
          .then((response) => {
            const imgPath =
              response.data.sprites.other["official-artwork"].front_default;
            const jaRequestUrl = response.data.species.url;
            $axios(jaRequestUrl)
              .then((response) => {
                const characterName = response.data.names[0].name;

                const characterList = document.createElement("li");
                characterList.classList.add("list-item");

                const imgElement = `<div class="character">
              <img src="${imgPath}" width="475" height="475" alt="" class="character__img">
            </div>`;
                const nameElement = `<p class="character__name">${characterName}</p>`;
                const fragment = createElements(imgElement + nameElement);

                characterList.appendChild(fragment);
                listElement.appendChild(characterList);
              })
              .catch(() => {
                formElement.after(
                  createErrorElement(
                    "エラーが発生しました。時間をおいて再度お試しください。"
                  )
                );
              });
          })
          .catch(() => {
            formElement.after(
              createErrorElement(
                "エラーが発生しました。時間をおいて再度お試しください。"
              )
            );
          });
      }
    })
    .catch((error) => {
      switch (error.response && error.response.status) {
        case 404:
          formElement.after(createErrorElement(error.message));
          break;
        default:
          formElement.after(
            createErrorElement(
              "エラーが発生しました。時間をおいて再度お試しください。"
            )
          );
          break;
      }
    });
});
