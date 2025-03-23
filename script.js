document.addEventListener("DOMContentLoaded", function () {
  const seeBtn = document.querySelector(".btn");

  seeBtn.addEventListener("click", function () {
      alert("Hello, I am Vikram K, a passionate Full-Stack Developer! 🚀");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  let resumeBtn = document.getElementById("resumeBtn");
  resumeBtn.onclick = function (event) {
      event.preventDefault();
      alert("Resume is not available for download at the moment.\n\nWhich resume do you want? 😂\nCall this number: 100 📞");
  };
});

// Smooth Scrolling
document.querySelectorAll('.navbar ul li a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      document.getElementById(targetId).scrollIntoView({ 
          behavior: 'smooth'
      });
  });
});

// Back to Top
const backToTopBtn = document.getElementById('backtop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
      backToTopBtn.style.display = 'block';
  } else {
      backToTopBtn.style.display = 'none';
  }
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

const navBar = document.querySelector('.navbar ul');
const toggleBtn = document.createElement('div');

toggleBtn.innerHTML = '&#9776;';
toggleBtn.style.fontSize = '2rem';
toggleBtn.style.color = 'white';
toggleBtn.style.cursor = 'pointer';
toggleBtn.style.display = 'none';
toggleBtn.style.position = 'absolute';
toggleBtn.style.top = '10px';
toggleBtn.style.right = '20px';

document.querySelector('.navbar').appendChild(toggleBtn);

toggleBtn.addEventListener('click', () => {
  navBar.classList.toggle('active');
});

window.addEventListener('resize', () => {
  if (window.innerWidth <= 768) {
      toggleBtn.style.display = 'block';
      navBar.style.display = 'none';
  } else {
      toggleBtn.style.display = 'none';
      navBar.style.display = 'flex';
  }
});

window.dispatchEvent(new Event('resize')); 
const img = document.querySelector('.img img');
const btn = document.querySelector('.btn');

btn.addEventListener('mouseover', () => {
  img.style.opacity = '1';
});

btn.addEventListener('mouseout', () => {
  img.style.opacity = '0';
});

document.querySelectorAll('.social-icon').forEach(icon => {
  icon.addEventListener('mouseover', () => {
      icon.style.transform = 'scale(1.2)';
  });

  icon.addEventListener('mouseout', () => {
      icon.style.transform = 'scale(1)';
  });
});
