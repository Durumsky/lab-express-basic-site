const express = require ('express');
const app = express();
const port = 3000;

//register the public folder to acces the static assets in the client

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/home.html')
})

app.get('/works', (req, res, next) => {
    res.sendFile(__dirname + '/views/works.html')
})


app.get('/about', (req, res, next) => {
    res.sendFile(__dirname + '/views/about.html')
})

app.get('/gallery', (req, res, next) => {
    res.sendFile(__dirname + '/views/gallery.html')
})


app.listen(port, () => {
    console.log(`listening on port ${port}`)
})