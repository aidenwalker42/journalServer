const express = require('express')
const app = express()

app.use(express.json())

let entries = [
    {
        id: 0,
        date: 'January 1',
        content: 'Hello world'
    },
    {
        id: 1, 
        date: 'January 2',
        content: 'Two days in a row!'
    }, 
    {
        id: 2, 
        date: 'June 12',
        content: 'Whoops'
    }
]

let globalId = 3

app.get('/', function(req, res) {
    res.status(200).send(`<h1>Jurrni</h1><h2>Journaling your journies</h2>`)
})

app.get('/entries', function(req, res) {
    res.status(200).send(entries) //all new entries will be showed here as well because it is saved to the server
})

app.post('/entry', function(req, res) {
    let newEntry = {
        id: globalId, 
        date: req.body.date, 
        content: req.body.content
    } //the JSON object will fill in newEntry
    entries.push(newEntry)//newEntry object will be added to the end of the entries array
    globalId++ //increment global ID for the next entry
    res.status(200).send(entries) //show the entries array
})

app.listen(4500, function() {
    console.log('serving up port 4500')
})