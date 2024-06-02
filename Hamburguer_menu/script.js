document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const menuheader = document.querySelector('.menuheader');

    hamburger.addEventListener('click', function() {
        menuheader.classList.toggle('show');
    });
});