import express from 'express'
import cors from 'cors'
import fs from 'fs'

const app = express()

app.use(express.json())
app.use(cors())

app.post('/db', (req, res) => {
    console.log(req.body)
    fs.appendFile('./db.txt', req.body.message + '\n', function (err) {
        if (err) return console.log(err);
    })
})
app.get('/', (req, res) => {
    res.send({message: "hello"})
})

app.get('/users', (req, res) => {
    const data = JSON.parse(fs.readFileSync('./data.json'));
    res.send({
        users: data.users,
        posts: data.posts
    });
})
app.listen(4000, () => console.log('Server is running'))