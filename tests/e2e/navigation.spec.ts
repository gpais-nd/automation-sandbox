import { test, expect } from '@playwright/test'

test.describe('Navigation Tests', () => {
  test('should navigate between pages correctly', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' })
    
    // Check home page
    await expect(page.getByRole('heading', { name: 'Web Automation Testing Sandbox' })).toBeVisible()
    
    // Navigate to todos
    await page.getByTestId('nav-todo-list').click()
    await expect(page).toHaveURL('/todos', { timeout: 5000 })
    
    // Navigate to cart
    await page.getByTestId('nav-shopping-cart').click()
    await expect(page).toHaveURL('/cart', { timeout: 5000 })
    
    // Navigate back to home
    await page.getByTestId('nav-home').click()
    await expect(page).toHaveURL('/', { timeout: 5000 })
  })

  test('should highlight active navigation item', async ({ page }) => {
    await page.goto('/todos', { waitUntil: 'networkidle' })
    
    const activeNavItem = page.getByTestId('nav-todo-list')
    await expect(activeNavItem).toHaveClass(/bg-blue-100/)
  })
})
