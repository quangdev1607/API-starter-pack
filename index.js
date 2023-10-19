//-------------------------------Require-------------------------------------------
const express = require('express')

const notFoundMiddleware = require('./middlewares/notFoundMiddleware')
const errorHandlerMiddleware = require('./middlewares/errorHandlerMiddleware')

const app = express()
//-------------------------------DB------------------------------------------------

//-------------------------------General-------------------------------------------

//-------------------------------Routes--------------------------------------------
app.get('/', (req, res) => {
    res.send("Hello my first job")
})
//-------------------------------Error Handlers-------------------------------------
app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)


//-------------------------------Connect-------------------------------------------

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})