import RouterClass from './router.js'
import UserController from '../controllers/users.controller.js'

const { getUser, updateUser, getUsers } = new UserController()

export default class productsRouter extends RouterClass {
  init() {
    // Users view
    this.get('/', ['ADMIN'], getUsers)

    // User view
    this.get('/:uid', ['ADMIN'], getUser)

    this.post('/:uid', ['ADMIN'], updateUser)
  }
}
