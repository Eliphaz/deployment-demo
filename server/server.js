const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()
app.use(cors())
app.use(express.json())

app.use(express.static(path.join(__dirname, '../public')))
app.use('/static/photos', express.static(path.join(__dirname, '../static/photos')))

// app.get('/', (req,res)=>{
//     res.sendFile(path.join(__dirname, '../public/index.html'))
// })

// app.get('/styles', (req,res)=>{
//     res.sendFile(path.join(__dirname,'../public/index.css'))
// })

// app.get('/js', (req,res)=>{
//     res.sendFile(path.join(__dirname,'../public/index.js'))
// })

const port = process.env.PORT || 4005

app.listen(port, () =>{
    console.log(`docked at port ${port}`)
})