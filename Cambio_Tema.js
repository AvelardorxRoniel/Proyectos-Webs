document.addEventListener('DOMContentLoaded', (event) => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        
        // Cambia el icono
        const icon = themeToggle.querySelector('i');
        if (body.classList.contains('dark-theme')) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }

        console.log('Tema cambiado'); // Para verificar que el evento se está disparando
    });

    // Añade esto al final del archivo
    function setTransitionDuration() {
        document.documentElement.style.setProperty('--transition-duration', '0.3s');
        setTimeout(() => {
            document.documentElement.style.setProperty('--transition-duration', '0s');
        }, 300);
    }

    themeToggle.addEventListener('click', setTransitionDuration);
});

document.addEventListener('DOMContentLoaded', () => {
    const hero = document.getElementById('hero-section');
    
    hero.addEventListener('mousemove', (e) => {
        const rect = hero.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        hero.style.setProperty('--mouse-x', `${x}px`);
        hero.style.setProperty('--mouse-y', `${y}px`);
        
        hero.classList.add('illuminated');
    });
    
    hero.addEventListener('mouseleave', () => {
        hero.classList.remove('illuminated');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.querySelector('.custom-cursor');
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
    
    document.addEventListener('mousedown', () => {
        cursor.style.transform = 'scale(0.8)';
    });
    
    document.addEventListener('mouseup', () => {
        cursor.style.transform = 'scale(1)';
    });
    
    document.querySelectorAll('a, button').forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(1.5)';
        });
        
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
        });
    });
});
