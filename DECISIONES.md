# Daniel Antuan Zamora Huerta — Portafolio Web
Sitio web personal y portafolio profesional construido con HTML5 semántico, CSS3 modular (mobile-first) y JavaScript vanilla. Diseñado para ser accesible, ultra rápido, elegante y completamente adaptativo.

## Demo en Vivo
> **Enlace al portafolio:** [https://tu-usuario.github.io/portafolio](https://tu-usuario.github.io/portafolio) 

---

## Auditoría de Calidad (Google Lighthouse)
El sitio fue optimizado y auditado bajo los criterios de rendimiento, accesibilidad, buenas prácticas y SEO de Google Lighthouse, alcanzando la puntuación máxima perfecta:

-  **Performance:** 100 / 100
-  **Accessibility:** 100 / 100
-  **Best Practices:** 100 / 100
-  **SEO:** 100 / 100

---

## Características Principales
- **HTML5 Semántico:** Estructura validada con etiquetas semánticas (`<main>`, `<header>`, `<nav>`, `<section>`, `<article>`, `<video>`).
- **CSS3 Moderno:** Arquitectura modular basada en Custom Properties (Variables CSS), CSS Grid, Flexbox y diseño Mobile-First.
- **JavaScript ES6+ Vanilla:** Lógica sin librerías externas para alternar modo oscuro/claro por defecto, menú interactivo y navegación accesible por teclado.
- **100% Accesible (WCAG AA):** Soporte completo para lectores de pantalla, gestión de foco visual, enlace de salto al contenido (*skip link*) y cierre de componentes con la tecla `Escape`.
- **Cero Layout Shift (CLS = 0):** Dimensiones explícitas (`width` y `height`) en imágenes, carga diferida (`loading="lazy"`) y precarga optimizada de video (`preload="metadata"`).

---

## Decisiones de Diseño y Arquitectura

### 1. Secciones del Sitio
El portafolio se estructura en 6 secciones estratégicas:

* **Inicio:** Presentación directa con mi nombre, foto de perfil, frase inspiradora y botones de acción rápida (*Contáctame* y *Mi GitHub*). Es el primer impacto visual.
* **Sobre mí:** Breve reseña personal sobre mi pasión por la investigación, el descubrimiento, la computación y las ciencias exactas.
* **Proyectos:** Selección de trabajos destacados:
  1. **Traductor Braille:** Aplicación para traducir texto a lenguaje braille enfocada en accesibilidad e inclusión.
  2. **Smart Dustbin:** Prototipo de bote de basura automatizado con clasificación de residuos mediante visión por computadora.
  3. **Animación Digital:** Proyecto de animación 2D en bucle optimizado con la etiqueta `<video>`.
* **Habilidades:** Enfoque honesto sin inflar competencias: HTML5 semántico, CSS3 (Flexbox y Grid), JavaScript (nivel básico), Git y GitHub.
* **Experiencias:** Trayectoria académica destacada, promedio de 10.0 en educación secundaria y certificación de inglés de la Universidad de Cambridge (nivel B1 a B2).
* **Contacto:** Correo electrónico, perfil de GitHub y formulario directo sin solicitar ni exponer información confidencial.

---

### 2. Paleta de Colores y Modo Claro / Oscuro
Elegí un esquema oscuro por defecto para reducir el cansancio visual y un acento verde que aporta frescura y buenas vibras:

| Modo | Fondo | Texto Principal | Color de Acento (Verde) |
| :--- | :---: | :---: | :---: |
| **Oscuro (Predeterminado)** | `#0B1220` | `#E2E8F0` | `#34D399` |
| **Claro** | `#F8FAFC` | `#0F172A` | `#047857` |

* **Relaciones de Contraste (WCAG AA):** En el modo claro utilizo un verde más oscuro (`#047857`) para evitar la pérdida de legibilidad que tendría el verde claro sobre fondo blanco. El contraste del texto supera los 15:1 y el color principal supera la proporción mínima de 4.5:1 exigida por las pautas de accesibilidad.

---

### 3. Tipografía y CSS Modular
* **Fuente del Sistema:** Utilizo `system-ui, sans-serif` porque garantiza una lectura limpia y relajada sin requerir descargas de fuentes externas, optimizando drásticamente la velocidad de carga (*First Contentful Paint*).
* **Estructura de Archivos CSS:** Código organizado modularmente en 7 archivos según especificidad:
  1. `00-reset.css` — Normalización y reseteo de estilos.
  2. `01-variables.css` — Custom Properties para colores y fuentes.
  3. `02-tipografia.css` — Jerarquías de texto y encabezados.
  4. `03-layout.css` — Estructura general y contenedores.
  5. `04-componentes.css` — Tarjetas, botones y formulario.
  6. `05-utilidades.css` — Clases auxiliares y utilidades de accesibilidad (`.skip-link`).
  7. `06-responsive.css` — Adaptabilidad mediante Media Queries.

---

### 4. Layout y Responsive Design
* **Enfoque Mobile-First:** Diseñado primero para pantallas pequeñas (320px) y escalado progresivamente hasta un contenedor centrado de máximo 1100 px.
* **Flexbox & Grid:** Flexbox para el menú de navegación y alineaciones rápidas; CSS Grid para las tarjetas de proyectos (1 columna en móviles, adaptativo en pantallas grandes).

---

### 5. Privacidad
Al ser un repositorio y sitio web de acceso público, omito datos sensibles personales (número telefónico, dirección física). El contacto se gestiona de manera segura a través del formulario y correo electrónico.

---

## Tecnologías Utilizadas
* **Frontend:** HTML5 Semántico, CSS3 (Custom Properties, Flexbox, Grid), JavaScript Vanilla (ES6+).
* **Herramientas & Calidad:** Git, GitHub, VS Code (Live Server), Google Chrome DevTools, Google Lighthouse.

---

## Contacto
* **GitHub:** https://github.com/dnieelh
* **Correo:** zamora.huerta.danielantuan@gmail.com
* **LinkedIn:** https://www.linkedin.com/in/daniel-antuan-zamora-huerta-265018420