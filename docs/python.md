
Das Beispiel sollte sich auf 4.9.5 beziehen. Ich bekomme aber einen internal Sercer Error

??? abstract "PHP versus Python: dieses Programm in Python auf dem Apache Webserver mit FastCGI"

    Zu allererst: `python3 --version` ermittelt, ob auf dem Server Python installiert ist. Falls nicht, dann mit `apt-get install python3` installieren.

    apt install python3-pip

    chmod +x /var/www/html/python/index.py


    In fcgid.conf die Ändung .py anfügen.  `AddHandler fcgid-script .fcgi .py`


    1. Installieren Sie `mod_fcgid` (dieses Modul ist die Verbindung zwischen dem Apache-Webserver und dem Python-Script ohne Flask her).

        a) Überprüfen Sie, ob das Modul `mod_fcgid` in `/etc/apache2/mods-enabled` vorhanden ist. 
            Falls ja: weiter mit Schritt 2.

        b) Installieren Sie das Modul mit `apt-get install libapache2-mod-fcgid` und aktivieren Sie es mit `a2enmod fcgid`.
 

    2. Erstellen Sie ein Verzeichnis `/var/www/html/python`

    3. Konfigurieren Sie Apache, um auf das Unterverzeichnis zuzugreifen und zwar in /etc/apache2/sites-available/000-default.conf oder der entsprechenden Datei auf Ihrem Server.

        ```Apache2 
        
        # UNTERHALB DIESER ZEILEN

        <VirtualHost *:443>
        ServerAdmin webmaster@localhost
        DocumentRoot /var/www/html

        # DIESE ZEILEN ERGAENZEN

        Alias /python /var/www/html/python
        <Directory "/var/www/html/python">
            Options +ExecCGI
            AddHandler fcgid-script .fcgi .py
            Require all granted
        </Directory>
        ```    
    
    apt install python3-pip

    chmod +x /var/www/html/python/index.py


    In fcgid.conf die Ändung .py anfügen.  `AddHandler fcgid-script .fcgi .py`



    4. Starten Sie den Webserver neu mit `systemctl restart apache2`
    

        Ein Hello-world ausprobieren

        ```Python linenums="1"
        #!/usr/bin/python3
        import cgi

        def main():
            print("Content-type: text/html\n")
            print("<html>")
            print("<head>")
            print("<title>Hello World</title>")
            print("</head>")
            print("<body>")
            print("<h1>Hello World!</h1>")
            print("</body>")
            print("</html>")

        if __name__ == "__main__":
            main()
        ```


    5. Legen Sie die das nachfolgende Script mit dem Dateinamen `index.py` in das Verzeichnis `/var/www/html/python`


        ```Python linenums="1"
        #!/usr/bin/python3
        import cgi
        import json
        import os

        def main():
            print("Content-type: text/html\n\n")
            form = cgi.FieldStorage()
            file_path = "formulardaten.json"

            if form:
                # Daten im JSON-Format speichern
                existing_data = []
                if os.path.exists(file_path):
                    with open(file_path, 'r') as file:
                        existing_data = json.load(file)

                # Konvertiere die Feldspeicher-Daten in ein einfaches Dictionary
                post_data = {key: form.getvalue(key) for key in form.keys()}
                existing_data.append(post_data)

                with open(file_path, 'w') as file:
                    json.dump(existing_data, file, indent=4)

                print(f"<h1>Daten auslesen</h1>")
                print("Ihre Daten wurden im JSON-Format gespeichert.<br>")
            else:
                print(f"<h1>Beispielformular</h1>")

            # Formular anzeigen
            print("<form method='post'>")
            print("<label for='vorname'>Vorname: </label>")
            print("<input type='text' name='vorname' id='vorname'><br><br>")
            print("<label for='nachname'>Name: </label>")
            print("<input type='text' name='nachname' id='nachname'><br><br>")
            print("<input type='submit' value='Formular abschicken'></form>")

            # Gespeicherte Daten im JSON-Format auslesen
            if os.path.exists(file_path):
                with open(file_path, 'r') as file:
                    print("<br>Gespeicherte Daten im JSON-Format:<br>")
                    print("<pre>" + cgi.escape(json.dumps(json.load(file), indent=4)) + "</pre>")
            else:
                print("<br>Noch keine Daten im JSON-Format gespeichert.<br>")

            print("</body></html>")

        if __name__ == "__main__":
            main()
        ```

    6. Aufrufen mit https://IhreURL/python/index.py

??? abstract "PHP versus Python: dieses Programm in Python auf dem Apache Webserver mit Flask"

    Flask ist die moderne, abstraktere Variante des Python-Scripts
    
    Zu allererst: `python3 --version` ermittelt, ob auf dem Server Python installiert ist. Falls nicht, dann mit `apt-get install python3` installieren. Dann Flask installieren `pip install flask`.

    1. Installieren Sie `mod_wsgi` (dieses Modul ist die Verbindung zwischen dem Apache-Webserver und dem Python-Script).

        a) Überprüfen Sie, ob das Modul `mod_wsgi` in `/etc/apache2/mods-enabled` vorhanden ist. 
            Falls ja: weiter mit Schritt 2.

        b) Installieren Sie das Modul mit `sudo apt-get install libapache2-mod-wsgi-py3` und aktivieren Sie es mit `sudo a2enmod wsgi`.
 

    2. Erstellen Sie ein Verzeichnis `/var/www/html/python` und erstellen Sie in diesem Verzeichnis eine Datei index.wsgi

        ```Python linenums="1"
        import sys
        sys.path.insert(0, '/var/www/html/python')
        from index import app as application
        ```

    3. Konfigurieren Sie Apache, um auf das Unterverzeichnis zuzugreifen und zwar in /etc/apache2/sites-available/000-default.conf

        ```Apache2 linenums="1"
        <VirtualHost *:80>
        ServerAdmin webmaster@localhost
        DocumentRoot /var/www/html

        WSGIDaemonProcess python_app python-path=/var/www/html/python
        WSGIScriptAlias /python /var/www/html/python/index.wsgi

        <Directory /var/www/html/python>
            WSGIProcessGroup python_app
            WSGIApplicationGroup %{GLOBAL}
            Require all granted
        </Directory>

        ErrorLog ${APACHE_LOG_DIR}/error.log
        CustomLog ${APACHE_LOG_DIR}/access.log combined
        </VirtualHost>
        ```    
    
    4. Starten Sie den Webserver neu mit `systemctl restart apache2`

    5. Legen Sie die Flask-Anwendung mit dem Dateinamen `index.py` in das Verzeichnis `/var/www/html/python`

        ```Python linenums="1"
        from flask import Flask, request, render_template_string
        import json
        import os

        app = Flask(__name__)

        # HTML Templates als Multiline-Strings
        form_page = """
        <!DOCTYPE html>
        <html lang="de">
        <head><title>{{ title }}</title></head>
        <body>
            <h1>{{ headline }}</h1>
            <form method="post">
                <label for="vorname">Vorname: </label>
                <input type="text" name="vorname" id="vorname"><br><br>
                <label for="nachname">Name: </label>
                <input type="text" name="nachname" id="nachname"><br><br>
                <input type="submit" value="Formular abschicken">
            </form>
        </body>
        </html>
        """

        data_page = """
        <!DOCTYPE html>
        <html lang="de">
        <head><title>{{ title }}</title></head>
        <body>
            <h1>Daten auslesen</h1>
            Ihre Daten wurden im JSON-Format gespeichert.<br>
            <br>Gespeicherte Daten im JSON-Format:<br>
            {{ data }}
        </body>
        </html>
        """

        file_path = "formulardaten.json"

        @app.route('/', methods=['GET', 'POST'])
        def form():
            if request.method == 'POST':
                # Daten im JSON-Format speichern
                existing_data = []
                if os.path.exists(file_path):
                    with open(file_path, 'r') as file:
                        existing_data = json.load(file)
                
                existing_data.append(request.form)
                with open(file_path, 'w') as file:
                    json.dump(existing_data, file, indent=4)
                
                with open(file_path, 'r') as file:
                    data = file.read()

                return render_template_string(data_page, title="Formulardaten Speichern und Auslesen im JSON-Format", data=data)
            
            return render_template_string(form_page, title="Formulardaten Speichern und Auslesen im JSON-Format", headline="Beispielformular")

        if __name__ == '__main__':
            app.run(debug=True)
        ```

    6. Aufrufen mit https://IhreURL/python/index.py



