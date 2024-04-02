document.addEventListener("DOMContentLoaded", function() {
    // Teil 1: Navigation an der Überschrift
    const h1 = document.querySelector('h1');
    if (h1) {
        const prevLink = document.querySelector('.md-footer__link--prev') ? document.querySelector('.md-footer__link--prev').cloneNode(true) : null;
        const nextLink = document.querySelector('.md-footer__link--next') ? document.querySelector('.md-footer__link--next').cloneNode(true) : null;

        // Erstelle Span-Container für die Pfeile
        const spanPrev = document.createElement('span');
        const spanNext = document.createElement('span');

        if (prevLink) {
            prevLink.querySelector('.md-footer__title').remove();
            prevLink.classList.add('custom-nav-link-prev');
            spanPrev.appendChild(prevLink);
        }

        if (nextLink) {
            nextLink.querySelector('.md-footer__title').remove();
            nextLink.classList.add('custom-nav-link-next');
            spanNext.appendChild(nextLink);
        }

        // Füge die Pfeile vor und nach dem h1-Text ein
        h1.insertBefore(spanPrev, h1.firstChild);
        h1.appendChild(spanNext);
    }

    // Teil 2: Schalter für den "Tafel-Style"
    var switchContainer = document.querySelector('.md-header__inner');
    if (switchContainer) {
        var customSwitch = document.createElement('a');
        customSwitch.textContent = ' Tafel-Style';
        customSwitch.id = 'style-switch';
        customSwitch.href = '#';

        customSwitch.addEventListener('click', function(event) {
            event.preventDefault();
            document.body.classList.toggle('custom-style');
        });

        switchContainer.appendChild(customSwitch);
    }

    // Optional: Gemeinsame CSS-Stile hinzufügen
    const styleTag = document.createElement('style');
    styleTag.innerHTML = `
        .custom-nav-link-prev, .custom-nav-link-next {
            margin: 0 10px;
        }
        h1 {
            display: flex;
            align-items: center;
            justify-content: center;
        }
    `;
    document.head.appendChild(styleTag);
});
