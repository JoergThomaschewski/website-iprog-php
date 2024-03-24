document.addEventListener('DOMContentLoaded', function() {
  // Funktion zum Aktualisieren der Buttons
  const updateButtons = () => {
      const state = localStorage.getItem(window.location.pathname) || 'unread';
      const buttons = document.querySelectorAll('.read-status-button');
      buttons.forEach(button => {
          if (state === 'read') {
              button.innerHTML = '&#9745;'; // Angekreuztes Kästchen
              button.style.color = 'green'; // Grüne Farbe für "gelesen"
          } else {
              button.innerHTML = '&#9744;'; // Leeres Kästchen
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
