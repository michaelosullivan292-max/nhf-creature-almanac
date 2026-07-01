const searchInput = document.getElementById("search");
const cards = document.querySelectorAll(".card");
const filterButtons = document.querySelectorAll(".filters button");

let currentFilter = "all";

function updateCards() {
    const searchText = searchInput.value.toLowerCase();

    cards.forEach(function (card) {
        const name = card.querySelector("h3").textContent.toLowerCase();
        const category = card.getAttribute("data-category");

        const matchesSearch = name.includes(searchText);
        const matchesFilter = currentFilter === "all" || category === currentFilter;

        if (matchesSearch && matchesFilter) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

searchInput.addEventListener("input", updateCards);

filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        currentFilter = button.getAttribute("data-filter");
        updateCards();
    });
});
