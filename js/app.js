// --- MENÚ HAMBURGUESA ---
const btnMenu = document.querySelector('#menu-toggle');
const menu = document.querySelector('#menu');

if (btnMenu && menu) {
    btnMenu.addEventListener('click', () => {
        menu.classList.toggle('abierto'); 
    });

    // Accesibilidad: Cerrar menú desplegable al presionar 'Escape'
    document.addEventListener('keydown', (evento) => {
        if (evento.key === 'Escape' && menu.classList.contains('abierto')) {
            menu.classList.remove('abierto');
            btnMenu.focus(); // Devuelve el foco al botón del menú
        }
    });
}

// --- MODO OSCURO / CLARO (DEFAULT: OSCURO) ---
document.addEventListener('DOMContentLoaded', () => {
    const toggleDarkMode = document.querySelector('#dark-mode-toggle');

    if (localStorage.getItem('theme') !== 'light') {
        document.documentElement.classList.add('dark');
    }

    if (toggleDarkMode) {
        toggleDarkMode.addEventListener('click', () => {
            document.documentElement.classList.toggle('dark');
            
            if (document.documentElement.classList.contains('dark')) {
                localStorage.setItem('theme', 'dark');
            } else {
                localStorage.setItem('theme', 'light');
            }
        });
    }
});