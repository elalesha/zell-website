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

// Reveal on scroll animation
const reveals = document.querySelectorAll('.reveal');
const obs = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ 
    if(e.isIntersecting) e.target.classList.add('visible');
  });
},{threshold:.12});
reveals.forEach(r=>obs.observe(r));

// Auto-update footer year
const year = document.getElementById("year");
if(year){
    year.textContent = new Date().getFullYear();
}