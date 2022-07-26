const express = require('express')
const responseTime = require('response-time')
const redis = require('redis')
const axios = require('axios')
const app = express()

app.listen(process.env.PORT || 3000, () => {
    console.log("Node server started")
})