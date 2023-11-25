import { sign } from 'jsonwebtoken'

export const SECRET = 'lawson' // put to env file later

export default defineEventHandler(async (event) => {
    const result = await readBody(event)
    const authorized = result.username === 'admin' && result.password === 'root';
    if (!authorized) {
        throw createError({ statusCode: 403, statusMessage: 'Username is admin and password is root' })
    }

    const expiresIn = 60
    const refreshToken = Math.floor(Math.random() * (1000000000000000 - 1 + 1)) + 1
    const { username } = result
    const user = {
        username,
    }

    const accessToken = sign({ ...user }, SECRET, { expiresIn })

    return {
        token: {
            accessToken,
            refreshToken
        }
    }
})