document.addEventListener("DOMContentLoaded", function() {
    // Container für die Navigationspfeile erstellen
    const navContainer = document.createElement('div');
    navContainer.className = 'custom-nav-links';
    navContainer.style.display = 'flex';
    navContainer.style.justifyContent = 'space-between';
    navContainer.style.padding = '10px 0'; // Vertikalen Padding anpassen
    navContainer.style.marginBottom = '10px !important'; // Direkten Abstand nach unten anpassen

    // Prüfen, ob die Navigationslinks vorhanden sind
    const prevLink = document.querySelector('.md-footer__link--prev');
    const nextLink = document.querySelector('.md-footer__link--next');

    if (prevLink && nextLink) {
        // Pfeile zum Container hinzufügen, indem sie geklont werden
        navContainer.appendChild(prevLink.cloneNode(true));
        navContainer.appendChild(nextLink.cloneNode(true));

        // Container direkt unter dem Header einfügen
        const header = document.querySelector('.md-header');
        if (header) {
            header.parentNode.insertBefore(navContainer, header.nextSibling);
        }

        // Optional: Text aus den Pfeilen entfernen, um nur die Symbole anzuzeigen
        const linkTexts = navContainer.querySelectorAll('.md-footer__title');
        linkTexts.forEach(text => text.remove()); // Entfernt den Text komplett
    }

    // Stil zum Anpassen des Abstands hinzufügen
    const styleTag = document.createElement('style');
    styleTag.innerHTML = `
        .custom-nav-links + * {
            margin-top: 0 !important;
        }
        .md-content__inner {
            padding-top: 20px !important; // Verringert den Abstand zum Inhaltsanfang
        }
    `;
    document.head.appendChild(styleTag);
});




/* Sourcecode für ToDo und Done

document.addEventListener('DOMContentLoaded', function() {
  // Funktion zum Aktualisieren der Buttons
  const updateButtons = () => {
      const state = localStorage.getItem(window.location.pathname) || 'unread';
      const buttons = document.querySelectorAll('.read-status-button');
      buttons.forEach(button => {
          if (state === 'read') {
              button.innerHTML = '&#9745; Done'; // Angekreuztes Kästchen
              button.style.color = 'green'; // Grüne Farbe für "gelesen"
          } else {
              button.innerHTML = '&#9744; ToDo'; // Leeres Kästchen
              button.style.color = 'black'; // Gelbe Farbe für "ungelesen"
          }
      });
  };

  // Funktion zum Erstellen eines Buttons
  const createButton = () => {
      const button = document.createElement('button');
      button.className = 'read-status-button'; // Eine gemeinsame Klasse für beide Buttons
      button.style.border = 'none';
      button.style.background = 'none';
      button.style.cursor = 'pointer';

      // Füge einen Event Listener hinzu, um den Zustand zu wechseln
      button.addEventListener('click', function() {
          const currentState = localStorage.getItem(window.location.pathname) || 'unread';
          if (currentState === 'unread') {
              localStorage.setItem(window.location.pathname, 'read');
          } else {
              localStorage.removeItem(window.location.pathname);
          }
          updateButtons(); // Aktualisiere den Zustand beider Buttons
      });

      return button;
  };

  // Erstelle und füge die Buttons beim Laden hinzu
  const contentArea = document.querySelector('.md-content__inner') || document.body;
  const readButtonTop = createButton();
  const readButtonBottom = createButton();
  contentArea.insertBefore(readButtonTop, contentArea.firstChild);
  contentArea.appendChild(readButtonBottom);

  // Setze den anfänglichen Zustand der Buttons
  updateButtons();
});

*/