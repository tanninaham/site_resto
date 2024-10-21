// script.js

document.querySelectorAll('.menu > li').forEach(item => {
    item.addEventListener('click', event => {
        // Toggle pour afficher ou masquer le sous-menu
        const submenu = item.querySelector('.submenu');
        if (submenu) {
            submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
        }
    });
});
