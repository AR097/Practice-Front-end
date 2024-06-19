document.addEventListener('DOMContentLoaded', (event) => {//evento para troca de modo
    const themeToggleButton = document.getElementById('button-togglemode');
    const themeIcon = document.getElementById('icon');
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme === 'dark') {// Se o tema estiver no modo escuro
        document.body.classList.add('dark-mode');
        themeIcon.src = 'src/moon-svgrepo-com.svg';  // Ícone de lua para modo escuro
    }

    themeToggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');

        if (document.body.classList.contains('dark-mode')) {//se dark mode
            localStorage.setItem('theme', 'dark');// Salva o estado do tema
            themeIcon.src = 'src/moon-svgrepo-com.svg';  // altera o icone do tema escuro
        } else {
            localStorage.setItem('theme', 'light');
            themeIcon.src = 'src/sun-svgrepo-com.svg';  // Ícone do tema claro
        }
    });
});
