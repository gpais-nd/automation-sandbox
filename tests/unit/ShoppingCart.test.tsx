import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ShoppingCart } from '../../src/pages/ShoppingCart'

describe('ShoppingCart Component', () => {
  beforeEach(() => {
    render(<ShoppingCart />)
  })

  // ✅ EJEMPLO IMPLEMENTADO - Test básico de renderizado
  test('renders shopping cart with initial items and available products', () => {
    expect(screen.getByTestId('shopping-cart-page')).toBeInTheDocument()
    expect(screen.getByText('Laptop')).toBeInTheDocument()
    expect(screen.getByText('Mouse')).toBeInTheDocument()
    expect(screen.getByTestId('cart-summary')).toHaveTextContent('3 items - $1059.97')
    
    // Should show available products to add
    expect(screen.getByTestId('available-products')).toBeInTheDocument()
    expect(screen.getByText('Keyboard')).toBeInTheDocument()
    expect(screen.getByText('Monitor')).toBeInTheDocument()
  })

  /* TODO: Implementar test case para incrementar cantidad de producto
   * Debe verificar que al hacer clic en el botón + se incremente la cantidad
   * y se actualice el total correctamente
   */
  test.skip('increases item quantity when plus button is clicked', async () => {
    // const user = userEvent.setup()
    // Implementar test aquí
  })

  /* TODO: Implementar test case para decrementar cantidad de producto
   * Debe verificar que al hacer clic en el botón - se decremente la cantidad
   * y se actualice el total correctamente
   */
  test.skip('decreases item quantity when minus button is clicked', async () => {
    // const user = userEvent.setup()
    // Implementar test aquí
  })

  /* TODO: Implementar test case para eliminar producto cuando cantidad llega a 0
   * Debe verificar que cuando la cantidad llega a 0, el producto se elimine del carrito
   */
  test.skip('removes item when quantity reaches zero', async () => {
    // const user = userEvent.setup()
    // Implementar test aquí
  })

  /* TODO: Implementar test case para eliminar producto con botón de basura
   * Debe verificar que al hacer clic en el botón de eliminar se remueva el producto
   * independientemente de su cantidad
   */
  test.skip('removes item when delete button is clicked', async () => {
    // const user = userEvent.setup()
    // Implementar test aquí
  })

  /* TODO: Implementar test case para cálculo correcto del total
   * Debe verificar que el total se calcule correctamente cuando se modifican cantidades
   * Probar con múltiples productos y diferentes cantidades
   */
  test.skip('calculates total price correctly', async () => {
    // const user = userEvent.setup()
    // Implementar test aquí
  })

  /* TODO: Implementar test case para mostrar carrito vacío
   * Debe verificar que cuando no hay productos se muestre el mensaje "Your cart is empty"
   * y no se muestre el botón de checkout
   */
  test.skip('shows empty cart message when no items', async () => {
    // const user = userEvent.setup()
    // Implementar test aquí
  })

  /* TODO: Implementar test case para botón de checkout
   * Debe verificar que el botón de checkout solo aparezca cuando hay productos
   * y que sea clickeable
   */
  test.skip('shows checkout button only when cart has items', () => {
    // Implementar test aquí
  })

  /* TODO: Implementar test case para formato de precios
   * Debe verificar que todos los precios se muestren con 2 decimales
   * y el símbolo de dólar
   */
  test.skip('displays prices with correct formatting', () => {
    // Implementar test aquí
  })

  /* TODO: Implementar test case para agregar producto nuevo al carrito
   * Debe verificar que al hacer clic en "Add" se agregue el producto
   * al carrito con cantidad 1
   */
  test.skip('adds new product to cart', async () => {
    // const user = userEvent.setup()
    // Implementar test aquí
  })

  /* TODO: Implementar test case para incrementar cantidad de producto existente
   * Debe verificar que si el producto ya está en el carrito,
   * se incremente su cantidad en lugar de duplicarlo
   */
  test.skip('increments quantity when adding existing product', async () => {
    // const user = userEvent.setup()
    // Implementar test aquí
  })

  /* TODO: Implementar test case para ocultar productos ya agregados
   * Debe verificar que los productos que están en el carrito
   * no aparezcan en la lista de productos disponibles
   */
  test.skip('hides products that are already in cart', () => {
    // Implementar test aquí
  })

  /* TODO: Implementar test case para contador de items en resumen
   * Debe verificar que el contador de items se actualice correctamente
   * cuando se agregan/eliminan productos
   */
  test.skip('updates item count in summary correctly', async () => {
    // const user = userEvent.setup()
    // Implementar test aquí
  })
})