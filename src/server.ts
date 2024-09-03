import { app } from './app'
import { env } from './env'

import { usersRoute } from './routes/users.route'

app.register(usersRoute, {
  prefix: 'users',
})

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log(`HTTP Server Running on port ${env.PORT}! 🚀`)
  })
