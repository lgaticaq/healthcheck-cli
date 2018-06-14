'use strict'

const http = require('http')

const healtcheck = options => {
  return new Promise((resolve, reject) => {
    const request = http.request(options, res => {
      resolve(res.statusCode === 200)
    })
    request.on('error', err => reject(err))
    request.end()
  })
}

if (process.argv.length < 5) {
  // eslint-disable-next-line
  console.log(
    `Run: healtcheck <host> <port> <path> <timeout in ms (optional)>\nExample: healtcheck localhost 3000 /healthcheck`
  )
  process.exit(1)
}

const options = {
  host: process.argv[2],
  port: process.argv[3],
  path: process.argv[4],
  timeout: process.argv[5] || 2000
}

healtcheck(options)
  .then(result => process.exit(result ? 0 : 1))
  .catch(() => process.exit(1))
