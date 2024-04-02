document.addEventListener("DOMContentLoaded", function() {
    // Finde das h1-Element, das die Überschrift enthält
    const h1 = document.querySelector('h1');

    // Prüfe, ob sowohl das h1-Element als auch die Navigationslinks vorhanden sind
    if (h1) {
        const prevLink = document.querySelector('.md-footer__link--prev') ? document.querySelector('.md-footer__link--prev').cloneNode(true) : null;
        const nextLink = document.querySelector('.md-footer__link--next') ? document.querySelector('.md-footer__link--next').cloneNode(true) : null;

        // Erstelle Span-Container für die Pfeile
        const spanPrev = document.createElement('span');
        const spanNext = document.createElement('span');

        if (prevLink) {
            // Entferne den Text und passe die Klasse für das Aussehen an
            prevLink.querySelector('.md-footer__title').remove();
            prevLink.classList.add('custom-nav-link-prev');
            spanPrev.appendChild(prevLink);
        }

        if (nextLink) {
            // Entferne den Text und passe die Klasse für das Aussehen an
            nextLink.querySelector('.md-footer__title').remove();
            nextLink.classList.add('custom-nav-link-next');
            spanNext.appendChild(nextLink);
        }

        // Füge die Pfeile vor und nach dem h1-Text ein
        h1.insertBefore(spanPrev, h1.firstChild);
        h1.appendChild(spanNext);

        // Optional: CSS-Stile hinzufügen, um die Anordnung zu verbessern
        const styleTag = document.createElement('style');
        styleTag.innerHTML = `
            .custom-nav-link-prev, .custom-nav-link-next {
                margin: 0 10px; // Abstand zwischen Text und Pfeil
            }
            h1 {
                display: flex; // Ermöglicht die Ausrichtung der Pfeile neben dem Text
                align-items: center; // Zentriert die Pfeile vertikal zum Text
                justify-content: center; // Zentriert den gesamten Inhalt
            }
        `;
        document.head.appendChild(styleTag);
    }
});