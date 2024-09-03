import { FastifyInstance } from 'fastify'
import { knex } from '../database'
import { z } from 'zod'
import { randomUUID } from 'node:crypto'

export async function usersRoute(app: FastifyInstance) {
  app.get('/', async () => {
    const users = await knex('users').select('*')

    return { users }
  })

  app.post('/', async (request, reply) => {
    const createUserSchema = z.object({
      username: z.string(),
      email: z.string(),
    })

    const { username, email } = createUserSchema.parse(request.body)

    await knex('users').insert({
      id: randomUUID(),
      username,
      email,
    })

    return reply.status(201).send()
  })
}
