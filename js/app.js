const moonIcon = document.querySelector('.fa-moon');
const body = document.body;
const nav = document.querySelector('.nav')
const header = document.querySelector('.header')
const aboutSection = document.querySelector('.about-me')
const projectsSection = document.querySelector('.conteiner-projects')
const contactSection = document.querySelector('.conteiner-contact')
const footer = document.querySelector('.footer')
const hdrContact = document.querySelectorAll('.header-contact')
const span = document.querySelectorAll('.color-night');
const iconsContainer = document.querySelectorAll('.icon-container');
const project = document.querySelectorAll('.project');
const contactAnchors = document.querySelectorAll('.contact-ancor');
const spanAbaut =document.querySelectorAll('.prgph-color-abt')
const changeLangButton = document.querySelector('.change-lang');
const elementsToTranslate = document.querySelectorAll('.translate');

moonIcon.addEventListener('click', function () {
    body.classList.toggle('body-day')
    nav.classList.toggle('nav-day');
    hdrContact.forEach(el => {
        el.classList.toggle('hdr-contact-day');
    });

    span.forEach(el => {
        el.classList.toggle('color-day');
    });

    iconsContainer.forEach(el => {
        el.classList.toggle('icon-cont-day');
    });

    project.forEach(el => {
        el.classList.toggle('project-day');
    });

    contactAnchors.forEach(anchor => {
        anchor.classList.toggle('contact-ancor-day');
    });

    spanAbaut.forEach(anchor => {
        anchor.classList.toggle('span-abt-day');
    });

    header.classList.toggle('day-mode');
    aboutSection.classList.toggle('about-day');
    projectsSection.classList.toggle('day-mode');
    contactSection.classList.toggle('contact-day');

    if (moonIcon.classList.contains('fa-moon')) {
        moonIcon.classList.remove('fa-moon');
        moonIcon.classList.add('fa-sun')
    } else {
        moonIcon.classList.remove('fa-sun');
        moonIcon.classList.add('fa-moon')
    }
})

// Change language
changeLangButton.addEventListener('click', toggleLanguage);

function toggleLanguage () {
    if(document.documentElement.lang === 'es') {
        document.documentElement.lang = 'en';
        console.log('cambio a ingles');
        translateElmtToEng();
        applySpanStyles(); // Aplicar estilos al cambiar el idioma
        changeLangButton.textContent = 'ES'
    } else {
        document.documentElement.lang = 'es'
        console.log('cambio a español');
        translateElmtToSpa();
        applySpanStyles(); // Aplicar estilos al cambiar el idioma
        changeLangButton.textContent = 'EN'
    }

}
function applySpanStyles() {
    const isSpanish = document.documentElement.lang === 'es';

    spanAbaut.forEach(span => {
        if (isSpanish) {
            span.classList.toggle('prgph-color-abt', body.classList.contains('body-day'));
            span.classList.toggle('span-abt-day', body.classList.contains('body-day'));
        } else {
            span.classList.toggle('prgph-color-abt', false);
            span.classList.toggle('span-abt-day', false);
        }
    });
}


function translateElmtToSpa() {
    // Encabezados y parrafos
    document.querySelector('.h2').textContent = 'Acerca de mi';
    document.querySelector('.about-paragraph').textContent = 'Hola, mi nombre es Juan Ezequiel. Tengo más de 3 años de experiencia como desarrollador frontend en el campo del desarrollo web. Soy originario de Argentina 🇦🇷. Me especializo en desarrollar productos únicos y aplicaciones web funcionales. Además, estoy constantemente buscando oportunidades para seguir aprendiendo y mejorando mis habilidades.';

    //Titutlos y elementos especificos
    document.querySelector('.h3-cert').textContent = 'Certificados';
    document.querySelector('.h3-techn').textContent = 'Tecnologias';
    document.querySelector('.title-projects').textContent = 'Mis Proyectos';
    document.querySelector('.prgph-pokedex').textContent = 'Pokedex hecha con la API de Pokémon con datos detallados sobre criaturas y movimientos y estadisticas';
    document.querySelector('.title-contact').textContent = 'Contacto';
    document.querySelector('.prgph-contact').textContent = '¡Contáctame directamente o envíame un mensaje usando el formulario a continuación!';
    document.querySelector('.contact-name').textContent = 'Nombre:';
    document.querySelector('.contact-email').textContent = 'Email:';
    document.querySelector('.contact-message').textContent = 'Mensaje:';
    document.querySelector('.contact-send').textContent = 'Enviar Mensaje';
    document.querySelector('.paragraph-footer').textContent = '© 2024 Todos los derechos resevados';

    spanAbaut.forEach(span => {
        span.textContent = span.dataset.es; // Usamos el texto en español almacenado en el atributo data-es
        // Asegurarse de que se elimine la clase span-abt-day
    });

    document.querySelectorAll('.links').forEach(link => {
        switch (link.textContent) {
            case 'Home':
            link.textContent = 'Inicio'
            break;
            case 'About':
            link.textContent = 'Acerca'
            break;
            case 'Projects':
            link.textContent = 'Proyectos'
            break;
            case 'Contact':
            link.textContent = 'Contacto'
            break;

        }
    })
}

function translateElmtToEng() {
    // Headers and paragraphs
    document.querySelector('.h2').textContent = 'About Me';
    document.querySelector('.about-paragraph').textContent = 'Hello, my name is Juan Ezequiel. I have more than 3 years of experience as a frontend developer in the field of web development. I am originally from Argentina 🇦🇷. I specialize in developing unique products and functional web applications. Additionally, I am constantly looking for opportunities to continue learning and improving my skills.';

    // Titles and specific elements
    document.querySelector('.h3-cert').textContent = 'Certificates';
    document.querySelector('.h3-techn').textContent = 'Technologies';
    document.querySelector('.title-projects').textContent = 'My Projects';
    document.querySelector('.prgph-pokedex').textContent = 'Pokedex made with the Pokémon API with detailed data on creatures, moves, and statistics.';
    document.querySelector('.title-contact').textContent = 'Contact';
    document.querySelector('.prgph-contact').textContent = 'Contact me directly or send me a message using the form below!';
    document.querySelector('.contact-name').textContent = 'Name:';
    document.querySelector('.contact-email').textContent = 'Email:';
    document.querySelector('.contact-message').textContent = 'Message:';
    document.querySelector('.contact-send').textContent = 'Send Message';
    document.querySelector('.paragraph-footer').textContent = '© 2024 All rights reserved';

    spanAbaut.forEach(span => {
        span.textContent = span.dataset.en; // Usamos el texto en inglés almacenado en el atributo data-en
        // Asegurarse de que se elimine la clase span-abt-day
    });

    document.querySelectorAll('.links').forEach(link => {
        switch (link.textContent) {
            case 'Inicio':
            link.textContent = 'Home'
            break;
            case 'Acerca':
            link.textContent = 'About'
            break;
            case 'Proyectos':
            link.textContent = 'Projects'
            break;
            case 'Contacto':
            link.textContent = 'Contact'
            break;

        }
    })
}


