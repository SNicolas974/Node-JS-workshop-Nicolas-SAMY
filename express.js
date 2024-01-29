const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
})
app.get('/acceuil', (req, res) => {
    res.send("<!DOCTYPE html><html><body><h1>Bienvenue sur l'acceuil</h1></body></html>")
    console.log("Vous etes a l'acceuil")
})
app.get('/Logo', (req, res) => {
    res.send('<!DOCTYPE html><html><body><p><img src="https://www.cidj.com/sites/default/files/styles/full_offre/public/2021-10/Epitech-Technology-logo.gif?itok=1zuGzxJz" /></p></body></html>')
    console.log("Vous etes au logo")
})
app.get('/profile', (req, res) => {
    res.send("<!DOCTYPE html><html><body><h1>Bienvenue sur votre profile</h1></body></html>")
    console.log("Vous etes sur votre profile")
})
