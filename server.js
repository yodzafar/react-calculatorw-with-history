const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()

app.use(express.json());
app.use(cors())

const calcSchema = new mongoose.Schema({
    result: String,
    date: { type: Date, default: Date.now }
})

const CalcResult = mongoose.model('CalcResult', calcSchema)

app.get('/api/getResults', async (req, res) => {
    try {
        const data = await CalcResult.find()
        res.json(data)
    } catch (e) {

    }
})

app.post('/api/result', async (req, res) => {
    const body = req.body
    const calc = new CalcResult(body)
    try {
        const data = await calc.save(body)
        res.json(data)

    } catch (e) {

    }
    // CalcResult.create(body)
    //     .then(created => res.json({ created: created, success: true }))
})



mongoose.connect('mongodb+srv://yodzafar:eswun3ua@test-r0m2t.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    app.listen(5000, () => console.log('server has started'))
})


