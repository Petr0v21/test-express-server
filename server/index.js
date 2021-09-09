import express from 'express'
import cors from 'cors'
import fs from 'fs'

const app = express()

app.use(express.json())
app.use(cors())

app.post('/db', (req, res) => {
    console.log(req.body)
    fs.appendFile('server/db.txt', req.body.message + '\n', function (err) {
        if (err) return console.log(err);
    })
})

app.listen(3000, () => console.log('Server is running'))