function showPage(id) {
  const pages = document.querySelectorAll(".page");

  pages.forEach((page) => {
    page.style.display = "none";
  });

  document.getElementById(id).style.display = "block";
}
