document.addEventListener('DOMContentLoaded', function() {
    var switchContainer = document.querySelector('.md-header__inner'); // Stelle sicher, dass dies der Container ist, in den du den Schalter einfügen möchtest.
    var customSwitch = document.createElement('a');
    customSwitch.textContent = ' Tafel-Style';
    customSwitch.id = 'style-switch'; // Stelle sicher, dass diese ID einzigartig ist und im weiteren Code korrekt verwendet wird.
    customSwitch.href = '#'; // Verhindert, dass der Link die Seite neu lädt.

    // Schalter-Event
    customSwitch.addEventListener('click', function(event) {
        event.preventDefault(); // Verhindert das Neuladen der Seite
        document.body.classList.toggle('custom-style'); // Umschalten der Klasse für den benutzerdefinierten Stil
    });

    // Schalter zum Dokument hinzufügen
    switchContainer.appendChild(customSwitch);
});
