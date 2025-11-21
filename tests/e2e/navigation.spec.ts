import { test, expect } from '@playwright/test'

test.describe('Navigation Tests', () => {
  test('should navigate between pages correctly', async ({ page }) => {
    await page.goto('/')
    
    // Check home page
    await expect(page.getByTestId('home-page')).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Web Automation Testing Sandbox' })).toBeVisible()
    
    // Navigate to todos
    await page.getByTestId('nav-todo-list').click()
    await expect(page.getByTestId('todo-page')).toBeVisible()
    await expect(page).toHaveURL('/todos')
    
    // Navigate to profile
    await page.getByTestId('nav-profile').click()
    await expect(page.getByTestId('profile-page')).toBeVisible()
    await expect(page).toHaveURL('/profile')
    
    // Navigate back to home
    await page.getByTestId('nav-home').click()
    await expect(page.getByTestId('home-page')).toBeVisible()
    await expect(page).toHaveURL('/')
  })

  test('should highlight active navigation item', async ({ page }) => {
    await page.goto('/todos')
    
    const activeNavItem = page.getByTestId('nav-todo-list')
    await expect(activeNavItem).toHaveClass(/bg-blue-100/)
  })
})