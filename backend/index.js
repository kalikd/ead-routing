
const express = require('express')
const path = require('path')
const mysql = require('mysql')

const app = express()

app.use(express.static('public'))
require('ejs')

app.set('view engine', 'ejs')

const conString = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'hr'
}

app.get('/getData', function (req, res) {
    const con = mysql.createConnection(conString)
    con.query('SELECT * FROM employees', function (err, data) {
        if (err)
            return res.status(500).json({ error: err });

        res.status(200).json(data)
    })

})

app.get('/getPerson', function (req, res) {
    const person = { fullname: 'Ali Hamza', age: 22, gender: 'Male', city: 'Banu' }
    res.json(person)
})

app.get('/home', function (req, res) {
    //res.sendFile(path.resolve(__dirname, 'index.html'))
    const products = [{ name: 'A', company: 'ZZZZ' }, { name: 'B', company: 'Y' }, { name: 'C', company: 'Z' }]
    //res.render('index', { products })
    res.render('index', { name: 'HB', city: 'KHI', products })
})

app.get('/about', function (req, res) {
    //res.sendFile(path.resolve(__dirname, 'about.html'))
    res.render('about')
})

app.listen(3000, function () {
    console.log('Server is listening at port# 3000')
})


