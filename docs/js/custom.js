document.addEventListener("DOMContentLoaded", function() {
    // Teil 1: Navigation an der Überschrift
    const h1 = document.querySelector('h1');
    if (h1) {
        const prevLink = document.querySelector('.md-footer__link--prev') ? document.querySelector('.md-footer__link--prev').cloneNode(true) : null;
        const nextLink = document.querySelector('.md-footer__link--next') ? document.querySelector('.md-footer__link--next').cloneNode(true) : null;

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

        h1.insertBefore(spanPrev, h1.firstChild);
        h1.appendChild(spanNext);
    }

    var switchContainer = document.querySelector('.md-header__inner');
    if (switchContainer) {
        var customSwitch = document.createElement('a');
        customSwitch.textContent = ' Tafel-Style';
        customSwitch.id = 'style-switch';
        customSwitch.href = '#';

        customSwitch.addEventListener('click', function(event) {
            event.preventDefault();
            document.body.classList.toggle('custom-style');
            localStorage.setItem('isTafelStyle', document.body.classList.contains('custom-style'));
        });

        switchContainer.appendChild(customSwitch);
    }

    if (localStorage.getItem('isTafelStyle') === 'true') {
        document.body.classList.add('custom-style');
    }

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
        .read-status-button {
            font-size: 0.85em;  /* Kleinere Schriftgröße für die ToDo/Done-Schaltfläche */
        }
        .last-updated {
            font-size: 0.75em;  /* Noch kleinere Schriftgröße für das Datum */
        }
    `;
    document.head.appendChild(styleTag);

    // Teil 2: ToDo und Done Funktion
    const updateButtons = () => {
        const state = localStorage.getItem(window.location.pathname) || 'unread';
        document.querySelectorAll('.read-status-button').forEach(button => {
            button.innerHTML = state === 'read' ? '&#9745; Done' : '&#9744; ToDo';
            button.style.color = state === 'read' ? 'green' : 'black';
        });
    };

    const createButton = () => {
        const button = document.createElement('button');
        button.className = 'read-status-button';
        button.style.border = 'none';
        button.style.background = 'none';
        button.style.cursor = 'pointer';

        button.addEventListener('click', () => {
            const currentState = localStorage.getItem(window.location.pathname) || 'unread';
            localStorage.setItem(window.location.pathname, currentState === 'unread' ? 'read' : 'unread');
            updateButtons();
        });

        return button;
    };

    const contentArea = document.querySelector('.md-content__inner') || document.body;
    contentArea.insertBefore(createButton(), contentArea.firstChild);
    contentArea.appendChild(createButton());

    // Datum der letzten Aktualisierung mit `document.lastModified` ermitteln
    const lastModified = new Date(document.lastModified);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = lastModified.toLocaleDateString('de-DE', options);

    // Element erstellen und Datum anzeigen
    const lastUpdatedText = "Letzte Aktualisierung: " + formattedDate;
    const lastUpdatedElement = document.createElement('p');
    lastUpdatedElement.textContent = lastUpdatedText;
    lastUpdatedElement.style.textAlign = 'center';  // Optional: Zentriert den Text
    lastUpdatedElement.style.fontStyle = 'italic';  // Optional: Kursiv darstellen
    lastUpdatedElement.className = 'last-updated';  // Klassenzuweisung für die kleinere Schriftgröße

    contentArea.appendChild(lastUpdatedElement);  // Fügt das Datum am Ende des Inhaltsbereichs ein

    updateButtons();
});
