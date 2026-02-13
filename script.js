// ===== SCRIPT.JS =====
// JavaScript untuk animasi, toggle menu, dan reveal scroll

console.log("JavaScript berhasil terhubung!");

// Toggle Mobile Menu
function toggleMobile(){
  const el = document.getElementById('mobileNav');
  const btn = document.querySelector('.mobile-toggle');
  const visible = el.style.display === 'block';
  el.style.display = visible ? 'none' : 'block';
  btn.setAttribute('aria-expanded', String(!visible));
}
 
// Media Mobile 
function toggleMenu() {
  const menu = document.getElementById("mobileMenu");

  if (menu.style.display === "flex") {
    menu.style.display = "none";
  } else {
    menu.style.display = "flex";
  }
}


// Reveal on scroll animation
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  reveals.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    const elementBottom = el.getBoundingClientRect().bottom;

    if (elementTop < windowHeight - 100 && elementBottom > 0) {
      el.classList.add("active");
    } else {
      el.classList.remove("active"); // ini bikin animasi balik lagi
    }
  });
}

window.addEventListener("scroll", revealOnScroll);


// Auto-update footer year
const year = document.getElementById("year");
if(year){
    year.textContent = new Date().getFullYear();
}
