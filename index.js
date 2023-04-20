const cards = document.querySelectorAll(".card2");

cards.forEach((card) => {
    card.addEventListener("click", () => {
    const front = card.querySelector(".front");
    const back = card.querySelector(".back");
    front.classList.add("hide");
    back.classList.remove("hide");
    });
});