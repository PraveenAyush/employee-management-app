const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()

const db = require('./config/db')
const departmentRoutes = require('./routes/department-routes')
const employeeRoutes = require('./routes/employee-routes')

const app = express()

const port = process.env.PORT || 8080

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api/departments', departmentRoutes)
app.use('/api/employees', employeeRoutes)

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})