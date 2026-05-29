const cards = document.querySelectorAll(
  ".card, .feature, .team-card, .install-card, .trap-card, .tech-card, .monitor-card"
);

cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-8px)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)";
  });
});



const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");

    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 90,
        behavior: "smooth",
      });
    }
  });
});



const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.style.background = "rgba(5, 8, 22, 0.92)";
    navbar.style.boxShadow = "0 0 18px rgba(0,255,255,.08)";
  } else {
    navbar.style.background = "rgba(0,0,0,.2)";
    navbar.style.boxShadow = "none";
  }
});


function animateValue(id, start, end, duration) {
  const obj = document.getElementById(id);

  if (!obj) return;

  let startTimestamp = null;

  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;

    const progress = Math.min(
      (timestamp - startTimestamp) / duration,
      1
    );

    obj.innerHTML = (
      progress * (end - start) + start
    ).toFixed(1);

    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };

  window.requestAnimationFrame(step);
}

animateValue("cpuValue", 0, 5.8, 2000);
animateValue("integralValue", 0, 23.4, 2500);