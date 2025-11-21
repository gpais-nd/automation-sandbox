import { test, expect } from '@playwright/test'

test.describe('Todo List E2E Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/todos')
  })

  test('should display todo list page correctly', async ({ page }) => {
    await expect(page.getByTestId('todo-page')).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Todo List' })).toBeVisible()
    await expect(page.getByTestId('todo-stats')).toContainText('1 of 3 completed')
  })

  test('should add a new todo', async ({ page }) => {
    const todoInput = page.getByTestId('todo-input')
    const addButton = page.getByTestId('add-todo-btn')

    await todoInput.fill('E2E Test Todo')
    await addButton.click()

    await expect(page.getByText('E2E Test Todo')).toBeVisible()
    await expect(todoInput).toHaveValue('')
    await expect(page.getByTestId('todo-stats')).toContainText('1 of 4 completed')
  })

  test('should complete and uncomplete todos', async ({ page }) => {
    const toggleButton = page.getByTestId('toggle-todo-2')
    
    // Complete the todo
    await toggleButton.click()
    await expect(page.getByTestId('todo-stats')).toContainText('2 of 3 completed')
    
    // Uncomplete the todo
    await toggleButton.click()
    await expect(page.getByTestId('todo-stats')).toContainText('1 of 3 completed')
  })

  test('should delete a todo', async ({ page }) => {
    const deleteButton = page.getByTestId('delete-todo-1')
    
    await deleteButton.click()
    
    await expect(page.getByText('Learn unit testing')).not.toBeVisible()
    await expect(page.getByTestId('todo-stats')).toContainText('0 of 2 completed')
  })

  test('should show empty state when all todos are deleted', async ({ page }) => {
    // Delete all todos
    const deleteButtons = page.getByTestId(/^delete-todo-/)
    const count = await deleteButtons.count()
    
    for (let i = 0; i < count; i++) {
      await deleteButtons.first().click()
    }
    
    await expect(page.getByTestId('empty-state')).toBeVisible()
    await expect(page.getByText('No todos yet. Add one above!')).toBeVisible()
  })

  test('should add todo using Enter key', async ({ page }) => {
    const todoInput = page.getByTestId('todo-input')
    
    await todoInput.fill('Todo via Enter')
    await todoInput.press('Enter')
    
    await expect(page.getByText('Todo via Enter')).toBeVisible()
    await expect(todoInput).toHaveValue('')
  })
})