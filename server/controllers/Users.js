import faker from 'faker'
import { User } from '../models/User.js'

export async function createUsers (count) {
  await User.sync()
  for (let i = 0; i < count; i++) {
    await User.create({
      email: faker.internet.email(),
      // TODO: se debe encriptar
      password: faker.internet.password()
    })
  }
}

export async function getAll (page = 1, limit = 10) {
  console.log('[getAll]', page, limit)
  const users = await User.findAll()
  if (page < 1) {
    page = 1
  }
  if (page > users.length / limit) {
    page = Math.ceil(users.length / limit)
  }
  return {
    page,
    users: users.slice((page - 1) * limit, page * limit)
  }
}

export function get (email) {
  console.log('[get]', email)
  return User.findByPk(email)
}

export async function update (email, newUser) {
  console.log('[update]', email, newUser)
  await User.update(newUser, { where: { email} })
}
