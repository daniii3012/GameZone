# DefGameZone
## Instrucciones de uso
El proyecto esta realizado en *NodeJS* y *Angular*. La base de datos esta implementada en *MySQL*
### NodeJS
Se puede descargar *NodeJS* desde su página princial https://nodejs.org/es/
### Angular
Para desplegar la pagina web es necesario instalar el CLI de Angular *(Angular CLI)*, esto se hara por medio de *NodeJS* mediante la consola de comandos  
npm install -g @angular/cli
### Base de Datos
La base de datos a importar se encuentra dentro de la carpeta *database*.
Para crear la base de datos es necesario un servicio de *MySQL*, en este caso usaremos la herramienta *XAMPP* que puede ser descargada desde su página principal https://www.apachefriends.org/es/index.html  Una vez en el panel de control se iniciara el modulo de *Apache* y *MySQL*, luego se dirigira a http://localhost/phpmyadmin/ se creara la base de datos *gamezone* y desde el la parte de *Import* se importara el archivo *gamezoneDB.sql* y se presionara *Go*.  
### Inicializacion del proyecto
Primero se iniciara el servidor que conectara la página web con la base de datos, para ello se dirigira a la carpeta server y en la consola de comandos se ejecutara lo siguiente:  
npm run dev  
  
Luego se iniciara el proyecto de angular, se dirigira a la carpeta cliente, allí mediante la consola de comandos ejecutara:  
npm install  
  
Posteriormente se instalara *Materialize CSS*, esto con el fin de que la página funcione correctamente, se ejecutara:  
npm install materialize-css --save  
npm install angular2-materialize --save  
  
Y por ultimo se iniciara el proyecto:  
ng serve  
  
Ahora podra ver la página web en http://localhost:4200/
