const path = require('path')
const express = require('express')
const jsonServer = require('json-server')
const api = express()

api.use('/api', jsonServer.router(path.join(__dirname, '..', 'api', 'emails.json')))

module.exports = api
