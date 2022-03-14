// const obj = require('./lib')
// console.log(obj.subject)

// const fs = require('fs')
// fs.readFile('abc.txt', function (err, data) {
//     console.log(data.toString())
// })

// const path = require('path')

// console.log(path.normalize('categories////products///productDetails///4///?=6'))

// console.log(path.join('categpories', 'products', 'productid', '123', 'kuchaur'))

// console.log(path.extname('post.php'))

// console.log(path.resolve(__filename))

// const http = require('http')
// const homeP = fs.readFileSync('index.html')
// const server = http.createServer(function (req, res) {
//     if (req.url === '/getPerson' && req.method == 'GET') {
//         const person = { fullname: 'Ali Hamza', age: 22, gender: 'Male', city: 'Banu' }
//         res.write(JSON.stringify(person))
//     }
//     else if (req.url === '/getName' && req.method == 'GET')
//         res.write(JSON.stringify({ name: 'KD' }))
//     else if (req.url == '/home')
//         res.end(homeP)
// })

// server.listen(3000, function () {
//     console.log('Server is listening at port# 3000')
// })

const express = require('express')
const app = express()
const path = require('path')
const ejs = require('ejs')
const mysql = require('mysql')

// const EventEmitter = require('events')
// const eventEmitter = new EventEmitter()

// eventEmitter.on('shuru', function () {
//     console.log('shuru hogya')
// })

app.use(express.static('public'))
app.set('view engine', 'ejs')

const db = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'hr'
}
const con = mysql.createConnection(db)

app.get('/getEmployees', function (req, res) {
    con.query('SELECT * FROM employees', function (err, rows) {
        if (err)
            throw err;

        eventEmitter.emit('shuru')
        res.send(rows)
    })

})


app.get('/getPerson', function (req, res) {
    const person = { fullname: 'Ali Hamza', age: 22, gender: 'Male', city: 'Banu' }
    res.json(person)
})


app.get('/home', function (req, res) {
    // res.sendFile(path.resolve(__dirname, 'index.html'))
    const products = [{ name: 'A', company: 'X' }, { name: 'B', company: 'Y' }, { name: 'C', company: 'Z' }]
    res.render('index', { products })
})

app.get('/about', function (req, res) {
    res.sendFile(path.resolve(__dirname, 'about.html'))
})

app.listen(3000, function () {
    console.log('Server is listening at port# 3000')
})


