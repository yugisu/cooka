import http from 'http'
import { createConnection } from 'typeorm'

import { app } from './app'

createConnection()
  .then(() => {
    console.log('Established connection to db')

    const port = process.env.PORT || '2032'
    app.set('port', port)

    const server = http.createServer(app)

    server.listen(port, () => {
      const addr = server.address()

      console.log(`Server listening on ${typeof addr === 'string' ? addr : addr?.port}`)
    })
  })
  .catch(console.error)
