function toggleArticle(button) {
  const article = button.closest('article');
  const fullArticle = article.querySelector('.fullArticle');
  fullArticle.classList.toggle('hidden');
  fullArticle.classList.toggle('visible');
}

function getFutureDate(offsetYears) {
  const today = new Date();
  const futureYear = today.getFullYear() + offsetYears;

  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };

  const futureDate = new Date(
    futureYear,
    today.getMonth(),
    today.getDate()
  );

  return futureDate.toLocaleDateString('en-US', options);
}

document.addEventListener("DOMContentLoaded", () => {
  const dateEl = document.getElementById("future-date");
  dateEl.textContent = getFutureDate(206);
});
