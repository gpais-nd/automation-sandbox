import { useState } from 'react'
import { Plus, Minus, Trash2, ShoppingBag, Package } from 'lucide-react'

interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
  image: string
}

export function ShoppingCart() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { id: 1, name: 'Laptop', price: 999.99, quantity: 1, image: '💻' },
    { id: 2, name: 'Mouse', price: 29.99, quantity: 2, image: '🖱️' },
  ])

  const availableProducts: Omit<CartItem, 'quantity'>[] = [
    { id: 1, name: 'Laptop', price: 999.99, image: '💻' },
    { id: 2, name: 'Mouse', price: 29.99, image: '🖱️' },
    { id: 3, name: 'Keyboard', price: 79.99, image: '⌨️' },
    { id: 4, name: 'Monitor', price: 299.99, image: '🖥️' },
    { id: 5, name: 'Headphones', price: 149.99, image: '🎧' },
  ]

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(id)
      return
    }
    setCartItems(items => 
      items.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    )
  }

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id))
  }

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)
  }

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0)
  }

  const addToCart = (productId: number) => {
    const existingItem = cartItems.find(item => item.id === productId)
    
    if (existingItem) {
      updateQuantity(productId, existingItem.quantity + 1)
    } else {
      const product = availableProducts.find(p => p.id === productId)
      if (product) {
        setCartItems(items => [...items, { ...product, quantity: 1 }])
      }
    }
  }

  const getAvailableProducts = () => {
    return availableProducts.filter(product => 
      !cartItems.some(item => item.id === product.id)
    )
  }

  return (
    <div className="max-w-4xl mx-auto" data-testid="shopping-cart-page">
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <ShoppingBag size={24} />
            Shopping Cart
          </h1>
          <div className="text-sm text-gray-600" data-testid="cart-summary">
            {getTotalItems()} items - ${getTotalPrice().toFixed(2)}
          </div>
        </div>

        {/* Add Products Section */}
        {getAvailableProducts().length > 0 && (
          <div className="mb-6">
            <h2 className="text-lg font-medium mb-3 flex items-center gap-2">
              <Package size={20} />
              Add Products
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3" data-testid="available-products">
              {getAvailableProducts().map((product) => (
                <div
                  key={product.id}
                  className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50"
                  data-testid={`available-product-${product.id}`}
                >
                  <div className="text-xl">{product.image}</div>
                  <div className="flex-1">
                    <h3 className="font-medium text-sm">{product.name}</h3>
                    <p className="text-gray-600 text-sm">${product.price.toFixed(2)}</p>
                  </div>
                  <button
                    onClick={() => addToCart(product.id)}
                    className="btn-primary text-sm px-3 py-1"
                    data-testid={`add-to-cart-${product.id}`}
                  >
                    Add
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="space-y-4" data-testid="cart-items">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 p-4 border rounded-lg"
              data-testid={`cart-item-${item.id}`}
            >
              <div className="text-2xl">{item.image}</div>
              <div className="flex-1">
                <h3 className="font-medium" data-testid={`item-name-${item.id}`}>
                  {item.name}
                </h3>
                <p className="text-gray-600" data-testid={`item-price-${item.id}`}>
                  ${item.price.toFixed(2)}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="p-1 rounded border hover:bg-gray-100"
                  data-testid={`decrease-quantity-${item.id}`}
                >
                  <Minus size={16} />
                </button>
                <span className="w-8 text-center" data-testid={`quantity-${item.id}`}>
                  {item.quantity}
                </span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="p-1 rounded border hover:bg-gray-100"
                  data-testid={`increase-quantity-${item.id}`}
                >
                  <Plus size={16} />
                </button>
              </div>
              <div className="font-medium" data-testid={`item-total-${item.id}`}>
                ${(item.price * item.quantity).toFixed(2)}
              </div>
              <button
                onClick={() => removeItem(item.id)}
                className="text-red-500 hover:text-red-700 p-1"
                data-testid={`remove-item-${item.id}`}
              >
                <Trash2 size={16} />
              </button>
            </div>
          ))}
        </div>

        {cartItems.length === 0 && (
          <div className="text-center py-8 text-gray-500" data-testid="empty-cart">
            Your cart is empty
          </div>
        )}

        {cartItems.length > 0 && (
          <div className="mt-6 pt-6 border-t">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-medium">Total:</span>
              <span className="text-2xl font-bold" data-testid="cart-total">
                ${getTotalPrice().toFixed(2)}
              </span>
            </div>
            <button
              className="w-full btn-primary"
              data-testid="checkout-btn"
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  )
}