import { userService } from '../repositories/index.js'
import { EErrors } from '../repositories/errors/enums.js'

export default class userController {
  constructor() {
    this.service = userService
  }

  getUsers = async(req, res) => {
    try {
        const users = await this.service.getUsers()
        res.render('users', {users, user:req.user})
    } catch (error) {
        res.sendServerError(error)
    }
  }

  getUser = async(req, res) => {
    try {
        const {uid} = req.params
        const user = await this.service.getUserBy(uid)
        res.render('user', {userPage:user, user:req.user})
    } catch (error) {
        res.sendServerError(error)
    }
  }

  updateUser = async(req, res) => {
    try {
        const {uid} = req.params
        const updatedUser = req.body
        this.service.updateUser(uid, updatedUser)
        res.redirect('/api/users')
    } catch (error) {
        
    }
  }

}
