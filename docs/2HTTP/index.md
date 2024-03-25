# 2 HTTP

Gliederung

[2.1 HTTP-Grundlagen und Internet-Kommunikation](2.1HTTP-GrundlagenundInternet-Kommunikation.md)<br>
[2.2 HTTP/1.1](2.2HTTP1.1.md)<br>
[2.3 HTTP/2](2.3HTTP2.md)<br>
[2.4 HTTP/3](2.4HTTP3.md)<br>
[2.5 Selbsttest zum gesamten Kapitel HTTP](2.5SelbsttestzumgesamtenKapitelHTTP.md)<br>
[2.6 Zusammenfassung Kapitel HTTP](2.6ZusammenfassungKapitelHTTP.md)

Es ist selbstverständlich, dass wir einen Browser öffnen und eine URL eingeben. Daraufhin erscheint die Seite, die vom Webserver geladen wird. Welche Informationen zwischen Browser und Webserver wirklich ausgetauscht werden, muss uns als Anwender nicht interessieren.

Anders ist es, wenn Internetapplikationen erstellt werden. Dann ist das Verständnis der Internetprotokolle entscheidend zum Verständnis der Funktionsweise der internetbasierten Client-Server-Kommunikation und es bildet die Grundlage der Internet-Programmierung. In diesem Kapitel wird die Kommunikation zwischen dem Client (Browser) und dem Webserver (via HTTP) ausführlich behandelt.

<div style="width: 50%; margin: auto;">
  <video controls>
    <source src="media/1-Webanfrage.mp4" type="video/mp4">
    Ihr Browser unterstützt das Video-Tag nicht.
  </video>
  <p style="text-align: center;"><em>Anfragen an einen Webserver: Dieses Video zeigt, wie Webanfragen funktionieren und wie der Datenverkehr zwischen einem Client und einem Server abläuft.</em></p>
</div>



!!! info "Lernziele"
    Sie lernen, wie die Kommunikation zwischen Client und Server stattfindet, um mögliche Fehler effizienter zu finden und um insgesamt bessere Internet-Applikationen zu erstellen.

!!! tip "Zeitumfang"
    Für die Bearbeitung dieses Kapitels werden Sie ungefähr **4 Stunden** benötigen.
