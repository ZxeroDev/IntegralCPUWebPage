var cards = document.querySelectorAll(".card");

cards.forEach(function (card) {
  card.addEventListener("mousemove", function () {
    card.style.transform = "scale(1.05) rotate(1deg)";
  });

  card.addEventListener("mouseleave", function () {
    card.style.transform = "scale(1) rotate(0deg)";
  });
});
