const express = require('express')
const requestIp = require('request-ip');
const app = express()
const port = 3001

app.get('/', (req, res) => {
  const currentIPAddress = requestIp.getClientIp(req);
  res.send(currentIPAddress);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})