function openMenu() {
    document.getElementById("submenu").style.height = "250px";
}

function closeMenu() {
    document.getElementById("submenu").style.height = "0";
}

document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });

    document.querySelectorAll('.widgets > div').forEach((div) => {
      observer.observe(div);
    });
  });