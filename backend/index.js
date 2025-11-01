import express from 'express'
import router from './routes/router.js'

const app = express()
const port = 3000

app.use(router)

app.listen(port,() =>{
    console.log(`Start port ${port}`)
})