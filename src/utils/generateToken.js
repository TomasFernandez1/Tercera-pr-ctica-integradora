import jwt from 'jsonwebtoken'
import config from '../config/config.js'

export const generateToken = (user, time) => jwt.sign(user, config.tokenKey, { expiresIn: time})
