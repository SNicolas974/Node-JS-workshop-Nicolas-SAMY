const http = require('http');
const url = require('url');


http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'})
  if (req.url == ('/acceuil.html')) {
    res.write("<!DOCTYPE html><html><body><h1>Bienvenue sur l'acceuil</h1></body></html>");
    console.log("Vous êtes a l'acceuil");
  }
  if (req.url == ('/Logo.html')) {
    res.write('<!DOCTYPE html><html><body><p><img src="https://www.cidj.com/sites/default/files/styles/full_offre/public/2021-10/Epitech-Technology-logo.gif?itok=1zuGzxJz" /></p></body></html>');
    console.log("Vous êtes au logo");
  }
  if (req.url == ('/profile.html')) {
    res.write("<!DOCTYPE html><html><body><h1>Bienvenue sur votre profile</h1></body></html>");
    console.log("vous êtes sur votre profile");
  }
  res.end();
}).listen(3001);

console.log("Serveur creer");
