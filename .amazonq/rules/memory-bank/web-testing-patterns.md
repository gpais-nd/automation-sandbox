# Web Testing Patterns Memory Bank

## Testing Philosophy
- **Test Pyramid**: More unit tests, fewer integration tests, minimal E2E tests
- **Test-Driven Development (TDD)**: Write tests before implementation
- **Behavior-Driven Development (BDD)**: Focus on user behavior and scenarios
- **Accessibility Testing**: Ensure components work with screen readers and keyboard navigation

## Unit Testing Best Practices

### React Testing Library Patterns
```typescript
// Component rendering
render(<Component prop="value" />)

// Finding elements (preferred order)
screen.getByRole('button', { name: 'Submit' })
screen.getByLabelText('Email')
screen.getByTestId('user-profile')
screen.getByText('Welcome')

// User interactions
await user.click(button)
await user.type(input, 'text')
await user.selectOptions(select, 'option')

// Assertions
expect(element).toBeInTheDocument()
expect(element).toHaveClass('active')
expect(element).toHaveTextContent('Expected text')
```

### Testing Hooks
```typescript
import { renderHook, act } from '@testing-library/react'

test('custom hook behavior', () => {
  const { result } = renderHook(() => useCustomHook())
  
  act(() => {
    result.current.updateValue('new value')
  })
  
  expect(result.current.value).toBe('new value')
})
```

## E2E Testing Patterns

### Playwright Best Practices
```typescript
// Page navigation and waiting
await page.goto('/dashboard')
await page.waitForLoadState('networkidle')

// Element interactions
await page.getByTestId('submit-btn').click()
await page.getByLabel('Email').fill('user@example.com')
await page.getByRole('combobox').selectOption('option-value')

// Assertions
await expect(page.getByText('Success')).toBeVisible()
await expect(page).toHaveURL('/success')
await expect(page.getByTestId('counter')).toHaveText('5')

// File uploads and downloads
await page.setInputFiles('input[type="file"]', 'path/to/file.pdf')
const download = await page.waitForEvent('download')
```

### Page Object Model
```typescript
class LoginPage {
  constructor(private page: Page) {}
  
  async login(email: string, password: string) {
    await this.page.getByLabel('Email').fill(email)
    await this.page.getByLabel('Password').fill(password)
    await this.page.getByRole('button', { name: 'Login' }).click()
  }
  
  async expectLoginSuccess() {
    await expect(this.page.getByText('Welcome')).toBeVisible()
  }
}
```

## Test Data Management

### Fixtures and Factories
```typescript
// Test data factory
const createUser = (overrides = {}) => ({
  id: Math.random().toString(),
  name: 'John Doe',
  email: 'john@example.com',
  role: 'user',
  ...overrides
})

// Using fixtures
test('user profile', async ({ page }) => {
  const user = createUser({ name: 'Jane Smith' })
  await page.route('/api/user', route => 
    route.fulfill({ json: user })
  )
})
```

## Mocking Strategies

### API Mocking
```typescript
// Mock Service Worker (MSW)
import { rest } from 'msw'
import { setupServer } from 'msw/node'

const server = setupServer(
  rest.get('/api/users', (req, res, ctx) => {
    return res(ctx.json([{ id: 1, name: 'John' }]))
  })
)

// Playwright network mocking
await page.route('/api/**', route => {
  route.fulfill({
    status: 200,
    contentType: 'application/json',
    body: JSON.stringify({ success: true })
  })
})
```

## Accessibility Testing
```typescript
// Test keyboard navigation
await page.keyboard.press('Tab')
await page.keyboard.press('Enter')
await page.keyboard.press('Escape')

// Test ARIA attributes
await expect(page.getByRole('button')).toHaveAttribute('aria-expanded', 'true')
await expect(page.getByRole('alert')).toHaveAttribute('aria-live', 'polite')

// Test focus management
await expect(page.getByRole('dialog')).toBeFocused()
```

## Performance Testing
```typescript
// Measure page load time
const startTime = Date.now()
await page.goto('/dashboard')
await page.waitForLoadState('networkidle')
const loadTime = Date.now() - startTime
expect(loadTime).toBeLessThan(3000)

// Monitor network requests
page.on('response', response => {
  if (response.url().includes('/api/')) {
    expect(response.status()).toBeLessThan(400)
  }
})
```

## Visual Testing
```typescript
// Screenshot comparison
await expect(page).toHaveScreenshot('dashboard.png')

// Element screenshot
await expect(page.getByTestId('chart')).toHaveScreenshot('chart.png')

// Full page screenshot
await page.screenshot({ path: 'full-page.png', fullPage: true })
```

## Test Organization
- Group related tests in describe blocks
- Use descriptive test names that explain the behavior
- Follow AAA pattern: Arrange, Act, Assert
- Keep tests independent and isolated
- Use beforeEach/afterEach for setup/cleanup
- Implement proper error handling and timeouts