/*Поиск в хедере*/
document.addEventListener("DOMContentLoaded", function () {
  const searchIcon = document.getElementById("searchIcon");
  const searchContainer = document.getElementById("searchContainer");
  const searchInput = document.getElementById("searchInput");

  searchContainer.addEventListener("click", function (event) {
      event.stopPropagation();
      searchContainer.classList.toggle("active");
      if (searchContainer.classList.contains("active")) {
          searchInput.focus();
      }
  });

  document.addEventListener("click", function (event) {
      if (!searchContainer.contains(event.target) && searchInput.value === "") {
          searchContainer.classList.remove("active");
      }
  });

  searchInput.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
          searchContainer.classList.remove("active");
          searchInput.value = "";
      }
  });
});

/*Сабмит формы поиска*/
document.querySelector(".search-button").addEventListener("click", function() {
  const query = document.getElementById("search-input").value;
  if (query) {
    // Например, отправить запрос на сервер через Fetch API
    fetch(`/search?q=${encodeURIComponent(query)}`)
      .then(response => response.json())
      .then(data => {
        console.log(data); // обработка результатов
      });
  }
});
/*Вывод примененного фильтра в Let's start learing section*/
document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".all-filter-btn");
  const categoryText = document.getElementById("selected-category");

  filterButtons.forEach(button => {
    button.addEventListener("click", function () {
      // Get the text of the clicked button
      const selectedCategory = this.textContent.trim();

      // Update the text in the footer
      categoryText.textContent = selectedCategory;
    });
  });
});
