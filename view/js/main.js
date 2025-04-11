document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("menu-toggle").addEventListener("click", function () {
    document.getElementById("mobile-menu").classList.toggle("menu-open");
  });

  document.getElementById("close-btn").addEventListener("click", function () {
    document.getElementById("mobile-menu").classList.remove("menu-open");
  });
});

function startGame() {
  const overlay = document.getElementById("overlay");
  overlay.style.display = "none";
}

function toggleFullscreen() {
  const iframe = document.getElementById("lessons-content");
  const button = document.getElementById("fullscreen-btn");

  iframe.classList.toggle("fullscreen-iframe");

  if (iframe.classList.contains("fullscreen-iframe")) {
    button.textContent = "Kapat";
  } else {
    button.textContent = "Tam Ekran";
  }
}

document.addEventListener("keydown", function (event) {
  const iframe = document.getElementById("lessons-content");
  const button = document.getElementById("fullscreen-btn");

  if (
    event.key === "Escape" &&
    iframe.classList.contains("fullscreen-iframe")
  ) {
    iframe.classList.remove("fullscreen-iframe");
    button.textContent = "Tam Ekran";
  }
});