// ─── SCROLL REVEAL ───
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 100);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));


// ─── TYPED ROLE ANIMATION ───
const roles = ['Full Stack Developer', 'ML Engineer', 'Gen AI Explorer', 'Problem Solver'];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

const heroRoleEl = document.getElementById('heroRole');

function typeRole() {
  const currentRole = roles[roleIndex];

  if (isDeleting) {
    heroRoleEl.textContent = currentRole.slice(0, charIndex--);
  } else {
    heroRoleEl.textContent = currentRole.slice(0, charIndex++);
  }

  // Finished typing — wait then start deleting
  if (!isDeleting && charIndex > currentRole.length) {
    setTimeout(() => { isDeleting = true; }, 1800);
  }

  // Finished deleting — move to next role
  if (isDeleting && charIndex < 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    charIndex = 0;
  }

  setTimeout(typeRole, isDeleting ? 60 : 100);
}

setTimeout(typeRole, 1000);


// ─── ACTIVE NAV ON SCROLL ───
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 120) {
      current = section.id;
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
});