fetch('header.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('header-include').innerHTML = data;
 
    const currentPage = window.location.pathname.split("/").pop();
 
    requestAnimationFrame(() => {
      const navLinks = document.querySelectorAll(".nav-menu li a");
      navLinks.forEach(link => {
        const href = link.getAttribute("href");
        if (href && currentPage === href.replace("./", "")) {
          link.classList.add("active");
        }
      });
    });
  });