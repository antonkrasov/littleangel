const express = require('express')
const config = require('config')
const mongoose = require('mongoose')

const app = express()

app.use(express.json())

app.use('/api/auth', require('./routes/auth.routes'))

const start = async () => {
    try {
        const MONGOURI = config.get('mongoUrl')
        await mongoose.connect(MONGOURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true 
        })

        const PORT = config.get('port') || 5000
        app.listen(PORT, () => console.log(`App started at ${PORT}`))
    } catch (e) {
        console.error(`Couldn't start server, critical error`, e)
        process.exit(1)
    }
}

start()





