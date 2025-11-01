import express from 'express'
const app = express()
const port = 3000

app.get('/',(req,res)=>{
    res.send('Hello World!')
})

app.get('/itthikon',(req,res)=>{
    res.send('Itthikon!')
})

app.listen(port,() =>{
    console.log(`Start port ${port}`)
})