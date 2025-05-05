# 6 Reguläre Ausdrücke mit PHP

Gliederung

[6.1 PHP-Funktionen für reguläre Ausdrücke](6.1PHPFunktionenfuerregulaereAusdruecke.md)<br>
[6.2 Syntax regulärer Ausdrücke](6.2SyntaxregulaererAusdruecke.md)<br>
[6.3 Praktische Beispiele und Übungen](6.3PraktischeBeispieleundUebungen.md)<br>
[6.4 Fortgeschrittene Sonderthemen](6.4FortgeschritteneSonderthemen.md)<br>
[6.5 Selbsttest zur regulären Ausdrücken](6.5SelbsttestzumgesamtenKapitelregulaereAusdruecke.md)


Reguläre Ausdrücke finden sich in fast allen Programmiersprachen. Sie werden immer wieder auf Probleme stoßen, die sich mit regulären
Ausdrücken sehr einfach und kompakt lösen lassen. Reguläre Ausdrücke (= Suchmuster und Mustervergleiche) sind ein
sehr wichtiges Werkzeug um mit Zeichenketten umzugehen. Sie werden beispielsweise eingesetzt um die Korrektheit von Eingaben zu validieren oder um in Texten nach Strings zu suchen und diese zu ersetzen.

!!! example "Beispiel"
    Stellen Sie sich vor, Sie haben ein Formular erstellt um eine PLZ abzufragen. Wie können Sie sicher sein, dass Nutzer:innen wirklich 5 Ziffern für eine PLZ eingeben? Auf Client-Seite sollte eine entsprechende Abfrage mit JavaScript erstellt werden. Diese Abfrage verwendet natürlich einen regulären Ausdruck. Dann ist auf jeden Fall auf Serverseite nochmals eine Abfrage zu erstellen, da nicht alle Clients JavaScript eingeschaltet haben und um Angriffe über das Formularfeld zu verhindern. Dabei nutzen Sie reguläre Ausdrücke in PHP.

!!! danger "Sicherheit"
    Wer in PHP nicht auf **Sicherheit** achtet, der öffnet damit potentiellen Angreifern sehr leicht den Server.
    PHP-Programmierungen sind sehr oft „das Einfallstor“ für Angreifer. Die wichtigste Regel ist: **Traue nie einer gesendeten Eingabe**. Das heißt, dass die Werte aus jedem Formularfeld, egal ob Textfeld, Checkbox, Radiobutton oder was auch immer, auf Gültigkeit überprüft werden müssen. Das Mittel für diese Überprüfungen sind **reguläre Ausdrücke**.

Wenn Sie einen spielerischen Zugang (wie Sudoku) zu den Regulären Ausdrücken mögen, dann ist diese Seite genau richtig: **[Regex Cross­word](https://regexcrossword.com/)**. Mein Fazit: sehr cool!!!! 

!!! info "Lernziele"
    In diesem Kapitel erlernen Sie den Umgang mit regulären Ausdrücken. Nach dem Durcharbeiten des Kapitels sind Sie in der Lage beliebige reguläre Ausdrücke in Ihre PHP-Programme mit einzubauen um die Sicherheit ihrer Programmierung zu erhöhen. Für die Bearbeitung dieses Kapitels werden Sie ungefähr 10 Stunden benötigen.

!!! tip "Weitere Literatur – Bücher und Artikel"
    - Stubblebine, Tony; Klicman, Peter; Schulten, Lars (2008): Reguläre Ausdrücke. Kurz & gut. O'Reilly Verlag
    - Jeffrey E.F. Friedl, „Reguläre Ausdrücke“, O'Reilly Verlag
    - Goyvaerts, Jan; Levithan, Steven: Reguläre Ausdrücke Kochbuch. O'Reilly Verlag.
    - Wiedl, Wolfgang: „Reguläre Ausdrücke“; Galileo Computing
    - [SelfHTML - Regulärer Ausdruck](https://wiki.selfhtml.org/wiki/Regulärer_Ausdruck)