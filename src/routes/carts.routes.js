import RouterClass from './router.js'
import CartsController from '../controllers/carts.controller.js'

const {
  addProductToCart,
  deleteAllProductsCart,
  deleteProductCart,
  getCart,
  getCarts,
  updateCart,
  updateQuantityProductCart,
  purchase
} = new CartsController()

export default class cartRouter extends RouterClass {
  init() {
    // Init service
    // Cart view
    this.get('/:cid', ['USER', 'ADMIN', 'PREMIUM'], getCart)

    // Carts view
    this.get('/', ['ADMIN', 'PREMIUM'], getCarts)

    // Add a product to a cart
    this.post('/:cid/products/:pid', ['USER', 'PREMIUM'], addProductToCart)

    // Update cart
    this.put('/:cid', ['USER', 'ADMIN', 'PREMIUM'], updateCart)

    // Update quantity of a product in the cart
    this.put('/:cid/products/:pid', ['USER', 'ADMIN', 'PREMIUM'], updateQuantityProductCart)

    // Delete a product from the cart
    this.delete('/:cid/products/:pid', ['USER', 'ADMIN', 'PREMIUM'], deleteProductCart)

    // Delete all the products from the carts
    this.delete('/:cid', ['USER', 'ADMIN', 'PREMIUM'], deleteAllProductsCart)

    this.post('/:cid/purchase', ['USER', 'PREMIUM'], purchase)
  }
}
