import { test, expect, devices } from '@playwright/test'

/**
 * Mobile Testing Suite
 * 
 * Este archivo contiene tests específicos para dispositivos móviles.
 * Verifica que la aplicación funcione correctamente en diferentes tamaños de pantalla.
 * 
 * Patrón: 1 ejemplo implementado + TODOs para que el equipo implemente
 * 
 * Para ejecutar: npm run e2e:mobile
 */

test.describe('Mobile Testing', () => {
  test.skip(({ browserName }) => browserName === 'firefox', 'Mobile emulation not supported in Firefox')
  
  // ✅ EJEMPLO IMPLEMENTADO - TodoList mobile functionality
  test('todo list works correctly on mobile devices', async ({ browser }) => {
    // Create mobile context
    const context = await browser.newContext({
      ...devices['iPhone 13']
    })
    const page = await context.newPage()

    await page.goto('/todos')
    
    // Wait for page to load completely
    await page.waitForLoadState('networkidle')
    
    // Verify mobile layout
    await expect(page.getByTestId('todo-page')).toBeVisible()
    
    // Test mobile interactions (use click instead of tap for better Firefox compatibility)
    await page.getByTestId('todo-input').click()
    await page.getByTestId('todo-input').fill('Mobile todo item')
    await page.getByTestId('add-todo-btn').click()
    
    // Wait for the todo to be added
    await page.waitForTimeout(100)
    
    // Verify todo was added - check for any todo item containing our text
    await expect(page.locator('[data-testid^="todo-item-"]').filter({ hasText: 'Mobile todo item' })).toBeVisible()
    
    // Test completion toggle on the new todo
    const newTodoItem = page.locator('[data-testid^="todo-item-"]').filter({ hasText: 'Mobile todo item' })
    const toggleButton = newTodoItem.locator('[data-testid^="toggle-todo-"]')
    await toggleButton.click()
    
    // Verify completion toggle works on mobile
    await expect(toggleButton).toHaveClass(/bg-green-500/)
    
    // Test delete functionality
    const deleteButton = newTodoItem.locator('[data-testid^="delete-todo-"]')
    await deleteButton.click()
    await expect(page.locator('[data-testid^="todo-item-"]').filter({ hasText: 'Mobile todo item' })).not.toBeVisible()

    await context.close()
  })

  /* TODO: Implementar test para ShoppingCart en mobile
   * Debe verificar que el carrito funciona correctamente en móvil
   * Testear interacciones táctiles para agregar/quitar productos
   * Verificar que los botones de cantidad son fáciles de tocar
   * Testear scroll horizontal si hay muchos productos
   */
  test.skip('shopping cart mobile functionality', async ({ browser }) => {
    // const context = await browser.newContext({
    //   ...devices['Pixel 5']
    // })
    // const page = await context.newPage()
    // 
    // await page.goto('/cart')
    // 
    // // Test adding products on mobile
    // await page.getByTestId('add-to-cart-laptop').click()
    // await expect(page.getByTestId('cart-item')).toBeVisible()
    // 
    // // Test quantity controls on mobile
    // await page.getByTestId('increment-quantity').click()
    // await expect(page.getByTestId('item-quantity')).toContainText('2')
    // 
    // // Test checkout button accessibility on mobile
    // await page.getByTestId('checkout-btn').click()
    // 
    // await context.close()
  })

  /* TODO: Implementar test para Navigation en mobile
   * Debe verificar que la navegación funciona en dispositivos móviles
   * Testear menú hamburguesa si está implementado
   * Verificar que todos los enlaces son accesibles
   * Testear navegación por gestos si está disponible
   */
  test.skip('mobile navigation functionality', async ({ browser }) => {
    // const context = await browser.newContext({
    //   ...devices['iPhone 12']
    // })
    // const page = await context.newPage()
    // 
    // await page.goto('/')
    // 
    // // Test navigation links on mobile
    // await page.getByTestId('nav-todos').click()
    // await expect(page).toHaveURL('/todos')
    // 
    // await page.getByTestId('nav-cart').click()
    // await expect(page).toHaveURL('/cart')
    // 
    // // Test mobile menu if implemented
    // await page.getByTestId('mobile-menu-toggle').click()
    // await expect(page.getByTestId('mobile-menu')).toBeVisible()
    // 
    // await context.close()
  })

  /* TODO: Implementar test para UserSettings en mobile
   * Debe verificar que el formulario de configuraciones funciona en móvil
   * Testear selectors y toggles en pantalla táctil
   * Verificar que el teclado virtual no oculta elementos importantes
   * Testear scroll en formularios largos
   */
  test.skip('user settings mobile functionality', async ({ browser }) => {
    // const context = await browser.newContext({
    //   ...devices['Samsung Galaxy S21']
    // })
    // const page = await context.newPage()
    // 
    // await page.goto('/settings')
    // 
    // // Test edit mode on mobile
    // await page.getByTestId('edit-profile-btn').tap()
    // 
    // // Test form inputs with virtual keyboard
    // await page.getByTestId('name-input').tap()
    // await page.getByTestId('name-input').fill('Mobile User')
    // 
    // // Test theme selector on mobile
    // await page.getByTestId('theme-selector').tap()
    // await page.getByTestId('theme-option-dark').tap()
    // 
    // // Test save functionality
    // await page.getByTestId('save-settings-btn').tap()
    // 
    // await context.close()
  })

  /* TODO: Implementar test para WeatherDashboard en mobile
   * Debe verificar que el dashboard del clima funciona en móvil
   * Testear selector de ciudades en pantalla pequeña
   * Verificar que las tarjetas del pronóstico se muestran correctamente
   * Testear scroll horizontal en el pronóstico si es necesario
   */
  test.skip('weather dashboard mobile functionality', async ({ browser }) => {
    // const context = await browser.newContext({
    //   ...devices['iPhone SE']
    // })
    // const page = await context.newPage()
    // 
    // await page.goto('/weather')
    // 
    // // Test city selector on mobile
    // await page.getByTestId('city-selector').tap()
    // await page.getByTestId('city-option-london').tap()
    // 
    // // Verify weather data displays correctly on small screen
    // await expect(page.getByTestId('current-weather')).toBeVisible()
    // await expect(page.getByTestId('forecast-container')).toBeVisible()
    // 
    // // Test horizontal scroll for forecast if needed
    // const forecastContainer = page.getByTestId('forecast-container')
    // await forecastContainer.scroll({ left: 100 })
    // 
    // await context.close()
  })

  /* TODO: Implementar test para Dashboard en mobile
   * Debe verificar que el dashboard funciona correctamente en móvil
   * Testear que las métricas se muestran en layout móvil
   * Verificar que los gráficos son legibles en pantalla pequeña
   * Testear interacciones táctiles con elementos del gráfico
   */
  test.skip('dashboard mobile functionality', async ({ browser }) => {
    // const context = await browser.newContext({
    //   ...devices['Pixel 7']
    // })
    // const page = await context.newPage()
    // 
    // await page.goto('/dashboard')
    // 
    // // Verify metrics cards stack properly on mobile
    // const metricsCards = page.getByTestId('metrics-card')
    // await expect(metricsCards.first()).toBeVisible()
    // 
    // // Test chart interactions on mobile
    // await page.getByTestId('chart-type-users').tap()
    // await expect(page.getByTestId('chart-container')).toBeVisible()
    // 
    // // Test period selector on mobile
    // await page.getByTestId('period-selector').tap()
    // await page.getByTestId('period-month').tap()
    // 
    // await context.close()
  })

  /* TODO: Implementar test para diferentes orientaciones
   * Debe verificar que la app funciona en portrait y landscape
   * Testear rotación de dispositivo durante el uso
   * Verificar que el layout se adapta correctamente
   * Testear que no se pierde estado al rotar
   */
  test.skip('device orientation changes', async ({ browser }) => {
    // const context = await browser.newContext({
    //   ...devices['iPad Pro']
    // })
    // const page = await context.newPage()
    // 
    // await page.goto('/dashboard')
    // 
    // // Test portrait orientation
    // await page.setViewportSize({ width: 768, height: 1024 })
    // await expect(page.getByTestId('metrics-card')).toBeVisible()
    // 
    // // Test landscape orientation
    // await page.setViewportSize({ width: 1024, height: 768 })
    // await expect(page.getByTestId('metrics-card')).toBeVisible()
    // 
    // // Verify layout adapts correctly
    // const metricsContainer = page.getByTestId('metrics-container')
    // // Check if metrics are displayed in rows vs columns
    // 
    // await context.close()
  })

  /* TODO: Implementar test para gestos táctiles avanzados
   * Debe testear swipe, pinch-to-zoom, long press
   * Verificar que los gestos funcionan donde están implementados
   * Testear prevención de gestos accidentales
   * Verificar feedback táctil apropiado
   */
  test.skip('advanced touch gestures', async ({ browser }) => {
    // const context = await browser.newContext({
    //   ...devices['iPhone 14 Pro Max']
    // })
    // const page = await context.newPage()
    // 
    // await page.goto('/todos')
    // 
    // // Test swipe to delete (if implemented)
    // const todoItem = page.getByTestId('todo-item').first()
    // await todoItem.swipeLeft()
    // await expect(page.getByTestId('delete-action')).toBeVisible()
    // 
    // // Test long press for context menu (if implemented)
    // await todoItem.longPress()
    // await expect(page.getByTestId('context-menu')).toBeVisible()
    // 
    // await context.close()
  })

  /* TODO: Implementar test para performance en mobile
   * Debe verificar que la app carga rápidamente en móvil
   * Testear que las animaciones son fluidas
   * Verificar que no hay lag en interacciones táctiles
   * Testear uso de memoria en dispositivos con recursos limitados
   */
  test.skip('mobile performance testing', async ({ browser }) => {
    // const context = await browser.newContext({
    //   ...devices['Moto G4']
    // })
    // const page = await context.newPage()
    // 
    // const startTime = Date.now()
    // await page.goto('/dashboard')
    // await page.waitForLoadState('networkidle')
    // const loadTime = Date.now() - startTime
    // 
    // // Verify reasonable load time on slower device
    // expect(loadTime).toBeLessThan(5000)
    // 
    // // Test smooth scrolling
    // await page.mouse.wheel(0, 500)
    // // Verify no janky animations
    // 
    // await context.close()
  })

  /* TODO: Implementar test cross-platform mobile
   * Debe testear en iOS y Android devices
   * Verificar que la funcionalidad es consistente
   * Testear diferencias específicas de plataforma
   * Verificar que los estilos se ven correctos en ambas plataformas
   */
  test.skip('cross-platform mobile consistency', async ({ browser }) => {
    // // Test on iOS device
    // const iosContext = await browser.newContext({
    //   ...devices['iPhone 13']
    // })
    // const iosPage = await iosContext.newPage()
    // 
    // await iosPage.goto('/todos')
    // await iosPage.getByTestId('todo-input').fill('iOS todo')
    // await iosPage.getByTestId('add-todo-btn').tap()
    // await expect(iosPage.getByTestId('todo-item')).toContainText('iOS todo')
    // 
    // // Test on Android device
    // const androidContext = await browser.newContext({
    //   ...devices['Pixel 5']
    // })
    // const androidPage = await androidContext.newPage()
    // 
    // await androidPage.goto('/todos')
    // await androidPage.getByTestId('todo-input').fill('Android todo')
    // await androidPage.getByTestId('add-todo-btn').tap()
    // await expect(androidPage.getByTestId('todo-item')).toContainText('Android todo')
    // 
    // await iosContext.close()
    // await androidContext.close()
  })
})