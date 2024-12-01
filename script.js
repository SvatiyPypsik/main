// Мобильное меню
const menuToggle = document.getElementById('menuToggle');
const navlinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navlinks.classList.toggle('open');
})

// Плавный скроллинг
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop - 50,
            behavior: 'smooth',
        })
    })
})