const express = require('express')
const responseTime = require('response-time')
const redis = require('redis')
const axios = require('axios')


const app = express()
//use response time. we will be able to see in the headers of the request a new header called X-Response-Time
app.use(responseTime())

app.get("/character", async (req, res) => {

    try {
      const response = await axios.get('https://rickandmortyapi.com/api/character')   
     
      console.log(response.data)      
      return res.status(200).json(response.data) 
    } catch (err) {   
      return res.status(500).json({ mmessage: err.mmessage }) 
    
    }
  });

app.listen(process.env.PORT || 3000, () => {
    console.log("Node server started")
})