const express = require('express')
const moment = require('moment')
const port = 3000
const app = express()

app.get('/', (req, res)=>{
    console.log('an request happen in route \'/\'')
    res.send('Selamat Pagiii, From Rifki. Sekarang '+ moment().format('D MMMM YYYY, h:mm:ss a'))
})

app.listen(port, () => console.log(`hello world app listening on port ${port}!`))