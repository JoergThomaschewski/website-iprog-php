# 8 Pattern - Entwurfsmuster

Gliederung


[8.1 Unterschiedliche Arten von Pattern](8.1UnterschiedlicheArtenvonPattern.md)<br>
[8.2 Das Burger-Restaurant](8.2DasBurgerRestaurant.md)<br>
[8.3 Template Pattern (dt. Schablone)](8.3TemplatePattern.md)<br>
[8.4 Decorator Pattern (dt. Dekorierer)](8.4DecoratorPattern.md)<br>
[8.5 Strategy Pattern (dt. Strategie)](8.5StrategyPattern.md)<br>
[8.6 Composite Pattern (dt. Kompositum)](8.6CompositePattern.md)<br>
[8.7 Factory Pattern (dt. Fabrik)](8.7FactoryPattern.md)<br>
[8.8 Builder Pattern (dt. Erbauer)](8.8BuilderPattern.md)<br>
[8.9 Fazit und Reflektion](8.9FazitundReflektion.md)<br>

In diesem Kapitel lernen Sie einige **[Design Pattern (Entwurfsmuster)](https://de.wikipedia.org/wiki/Entwurfsmuster_(Buch))** der *Gang of four* kennen. Hierzu wurde das Beispiel eines Burger-Restaurants gewählt und in jedem Unterkapitel wird ein Pattern vorgestellt, sodass am Ende eine komplexere Softwareanwendung für ein Burger-Restaurant entsteht. Sie finden deswegen den Quelltext zu jedem Schritt in jedem Unterkapitel.

Die hier erstellte Software begleitet die Entwicklung eines Burger-Restaurants vom kleinen Foodtruck bis zum eigenen Restaurant mit größerer Auswahl.

Die Beispiele wurden so programmiert, dass diese prinzipiell auch mit einem PHP-Framework umsetzbar wären und daher wird keine schöne Web-Oberfläche verwendet. Auch wird auf die Validierung und das Maskieren der Eingabe verzichtet (Vorsicht, denn dies ist eine große Sicherheitslücke), damit die Komplexität der Beispiele möglichst gering bleibt. Diese Software ist weit davon entfernt in einem Produktionsbetrieb Verwendung zu finden!

!!! tip "Wichtig"
    Nun sind wir an einem Punkt angelangt, an dem Sie **unbedingt mit PHPStorm arbeiten** müssen, oder einer vergleichbaren Entwicklungsumgebung. Ein einfacher Editor wie *Notepad++* reicht jetzt definitiv nicht aus. Am Ende dieses Kapitels werden Sie eine kleine Webanwendung erstellt haben, die 35 PHP Dateien (34 Klassen und das Hauptprogramm) umfasst, die alle miteinander verbunden sind. Den Überblick über diese Dateimenge können Sie nur mit einer Entwicklungsumgebung behalten.

!!! info "Zeitumfang"
    Für die Bearbeitung dieses Kapitels werden Sie ungefähr **20 Stunden** benötigen.
