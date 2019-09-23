const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, '/public')))


app.get('/', (req, res) => {
	res.sendFile(path.resolve(__dirname + '/public/index.html'))
})

app.get('/api/customers', (req, res) => {
	const customers = [{ name: "Deepak Tatineni", id: 1 }, { name: "Micheal scott", id: 2 }, { name: "Dwight schrute", id: 3 }]
	res.json(customers)
})

app.listen('8000', () => {
	console.log("Running app- React starter")
})