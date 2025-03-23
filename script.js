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
