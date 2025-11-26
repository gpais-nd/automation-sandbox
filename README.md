# Web Automation Testing Sandbox

A comprehensive learning project for modern web automation testing practices using React, TypeScript, Playwright, and Vitest.

## 🎯 Project Overview

This project is designed to teach your team modern web automation testing through hands-on experience. It includes:

- **Frontend Application**: A React + TypeScript application with multiple pages and interactive components
- **Unit Testing**: Component testing with Vitest and React Testing Library
- **E2E Testing**: End-to-end testing with Playwright across multiple browsers
- **Modern Tooling**: ESLint, Prettier, Tailwind CSS, and comprehensive CI/CD setup

## 🛠️ Technology Stack

- **Frontend**: React 18, TypeScript, Vite, Tailwind CSS
- **Unit Testing**: Vitest, React Testing Library, Jest DOM
- **E2E Testing**: Playwright (Chrome, Firefox, Safari, Mobile)
- **Code Quality**: ESLint, Prettier, TypeScript strict mode
- **Build Tools**: Vite for fast development and building
- **Icons**: Lucide React for consistent iconography
- **Routing**: React Router DOM for navigation

## 🎨 Pages Overview

### 🏠 Home (`/`)
Landing page with project introduction

### ✅ Todo List (`/todos`)
Task management with add/complete/delete functionality
- **Tests**: 2 ejemplos + 7 TODOs

### 🛒 Shopping Cart (`/cart`)
E-commerce cart with products and quantities
- **Tests**: 1 ejemplo + 12 TODOs

### ⚙️ Settings (`/settings`)
User preferences and profile management
- **Tests**: 1 ejemplo + 10 TODOs

### 🌤️ Weather (`/weather`)
Weather dashboard with city selection and forecast
- **Tests**: 1 ejemplo + 10 TODOs

### 📊 Dashboard (`/dashboard`)
Analytics dashboard with interactive charts
- **Tests**: 1 ejemplo + 11 TODOs

## 📋 Prerequisites

- Node.js 18+ and npm
- Git for version control
- VS Code (recommended) with extensions:
  - Playwright Test for VS Code
  - Vitest extension
  - ESLint extension
  - Prettier extension

## 🚀 Quick Start (15 minutes)

> **New to automated testing?** Follow this guide to implement your first test!

### ⚡ 5-Minute Setup

```bash
# 1. Clone and install dependencies
git clone https://github.com/gpais-nd/automation-sandbox.git
cd automation-sandbox
npm install
npx playwright install

# 2. Start the app
npm run dev
# ✅ App should open at http://localhost:5173

# 3. Verify tests work
npm test
# ✅ Should see some tests passing

# 4. Check your starting point
npm run test:progress
# ✅ Should show current progress (9 implemented, 78 TODOs)
```

### 🎯 Your First Test (10 minutes)

#### Step 1: Open the TodoList test file
```bash
# Open in VS Code
code tests/unit/TodoList.test.tsx
```

#### Step 2: Find your first TODO
Look for this pattern:
```typescript
/* TODO: Implementar test para eliminar todo
 * Debe verificar que al hacer click en delete se elimine el todo
 * y se actualice el contador correctamente
 */
test.skip('should delete todo when delete button is clicked', async () => {
  // const user = userEvent.setup()
  // Implementar test aquí
})
```

#### Step 3: Implement the test
1. **Remove** `.skip` from the test
2. **Uncomment** the code inside
3. **Follow the pattern** from the examples above

```typescript
test('should delete todo when delete button is clicked', async () => {
  const user = userEvent.setup()
  
  render(<TodoList />)
  
  // Add a todo first
  await user.type(screen.getByTestId('todo-input'), 'Test todo')
  await user.click(screen.getByTestId('add-todo-btn'))
  
  // Verify todo exists
  expect(screen.getByTestId('todo-item')).toBeInTheDocument()
  
  // Delete the todo
  await user.click(screen.getByTestId('delete-todo-btn'))
  
  // Verify todo is gone
  expect(screen.queryByTestId('todo-item')).not.toBeInTheDocument()
})
```

#### Step 4: Run and validate
```bash
# Run the specific test
npm test -- TodoList.test.tsx

# Validate your implementation
npm run test:validate

# Check progress
npm run test:progress
```

### 🎉 Congratulations!

You just implemented your first automated test! 

**What you learned:**
- ✅ How to find and implement TODOs
- ✅ Basic test structure (render, interact, assert)
- ✅ Using test IDs for reliable element selection
- ✅ User interactions with userEvent
- ✅ Validation tools to ensure quality

## 🧪 Testing Commands

### Unit Tests
```bash
# Run unit tests
npm test

# Run tests with UI
npm run test:ui

# Run tests with coverage
npm run test:coverage
```

### E2E Tests
```bash
# Run all E2E tests
npm run e2e

# Run E2E tests with UI
npm run e2e:ui

# Run E2E tests in headed mode (see browser)
npm run e2e:headed

# Run specific test suites
npm run e2e:visual      # Visual regression tests
npm run e2e:api         # API integration tests
npm run e2e:mobile      # Mobile device tests (Chromium + WebKit only)

# Update visual baselines
npm run e2e:update-snapshots
```

### Code Quality
```bash
# Lint code
npm run lint

# Fix linting issues
npm run lint:fix

# Format code
npm run format

# Type check
npm run type-check
```

### Test Validation & Progress
```bash
# Check implementation progress
npm run test:progress

# Validate test quality
npm run test:validate

# Run all pre-commit checks
npm run test:check

# Generate coverage report (opens in browser)
npm run test:coverage
```

## 🌿 Git Workflow & Branch Strategy

### Branch Structure
- **`main`**: Production-ready code, protected branch
- **`sandbox`**: Development branch for experimentation and learning

### Workflow Process

1. **Start from sandbox branch**:
   ```bash
   git checkout sandbox
   git pull origin sandbox
   ```

2. **Create feature branch**:
   ```bash
   git checkout -b test/implement-todo-toggle
   # or
   git checkout -b test/shopping-cart-quantity
   ```

3. **Implement a TODO test**:
   ```bash
   # Choose a test file and TODO
   # Remove .skip from the test
   # Implement following the example pattern
   npm test -- --watch  # Test in watch mode
   ```

4. **Commit and push**:
   ```bash
   git add .
   git commit -m "test(todo): implement toggle completion status test"
   git push origin test/implement-todo-toggle
   ```

5. **Create Pull Request**:
   - Create PR from your feature branch to `sandbox`
   - Title: "Implement TODO: toggle completion status test"
   - Ensure all tests pass
   - Request code review from team members

### Commit Message Convention for Tests
```
test(component): description

Examples:
- test(todo): implement Enter key functionality test
- test(cart): add quantity increment test
- test(settings): implement theme change validation
- test(weather): add error state handling test
- test(dashboard): implement chart switching test
```

### Recommended TODO Implementation Order
1. **TodoList** (start here - has most examples)
2. **ShoppingCart** (user interactions)
3. **UserSettings** (forms and validation)
4. **WeatherDashboard** (async operations)
5. **Dashboard** (data visualization)

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   └── Navigation.tsx   # Main navigation component
├── pages/              # Page components
│   ├── Home.tsx        # Landing page
│   ├── TodoList.tsx    # Todo management (main testing example)
│   ├── ShoppingCart.tsx # Shopping cart with products
│   ├── UserSettings.tsx # User settings and preferences
│   ├── WeatherDashboard.tsx # Weather data and forecast
│   └── Dashboard.tsx   # Analytics dashboard with charts
├── hooks/              # Custom React hooks
├── utils/              # Utility functions
└── test/               # Test configuration
    └── setup.ts        # Test setup file

tests/
├── unit/               # Unit tests
│   ├── TodoList.test.tsx      # 2 ejemplos + 7 TODOs
│   ├── ShoppingCart.test.tsx  # 1 ejemplo + 12 TODOs
│   ├── UserSettings.test.tsx  # 1 ejemplo + 10 TODOs
│   ├── WeatherDashboard.test.tsx # 1 ejemplo + 10 TODOs
│   └── Dashboard.test.tsx     # 1 ejemplo + 11 TODOs
└── e2e/                # E2E tests
    ├── visual-regression.spec.ts  # 1 ejemplo + 8 TODOs
    ├── api-testing.spec.ts        # 1 ejemplo + 8 TODOs
    ├── mobile-testing.spec.ts     # 1 ejemplo + 10 TODOs
    ├── todo-flow.spec.ts          # Existing
    └── navigation.spec.ts         # Existing
```

## 🎓 Learning Path

### Week 1: Unit Testing Fundamentals
- Study `tests/unit/TodoList.test.tsx` (ejemplos implementados)
- Learn React Testing Library patterns
- Practice writing component tests
- Implement 2-3 TODOs from TodoList tests
- Understand test-driven development (TDD)

### Week 2: Interactive Components Testing
- Work on `ShoppingCart.test.tsx` TODOs
- Learn to test user interactions (click, type, select)
- Practice testing state changes and calculations
- Implement 3-4 TODOs from ShoppingCart tests

### Week 3: Forms and Async Operations
- Focus on `UserSettings.test.tsx` and `WeatherDashboard.test.tsx`
- Learn to test form validation and async operations
- Practice testing loading states and error handling
- Implement 3-4 TODOs from these test files

### Week 4: Data Visualization and E2E
- Work on `Dashboard.test.tsx` TODOs
- Learn to test charts and data visualization
- Explore `tests/e2e/` directory for Playwright
- Practice cross-browser testing and page object patterns

### Week 5: Advanced Testing Patterns
- Work on Visual Regression tests (`visual-regression.spec.ts`)
- Implement API Testing TODOs (`api-testing.spec.ts`)
- Practice Mobile Testing (`mobile-testing.spec.ts`)
- Learn about screenshot comparisons and device emulation

### Week 6: CI/CD and Test Optimization
- Complete remaining TODOs across all test files
- Set up GitHub Actions workflows
- Learn about test reporting and coverage
- Optimize test performance and reliability

## 🧩 Testing Examples Included

### TodoList Component (`src/pages/TodoList.tsx`)
- ✅ Add new todos
- ✅ Toggle completion status
- ✅ Delete todos
- ✅ Empty state handling
- ✅ Form validation
- ✅ Keyboard interactions
- 📝 **Tests**: 2 ejemplos + 7 TODOs para implementar

### ShoppingCart Component (`src/pages/ShoppingCart.tsx`)
- ✅ Add/remove products from cart
- ✅ Increment/decrement quantities
- ✅ Calculate totals automatically
- ✅ Empty cart state
- ✅ Available products list
- 📝 **Tests**: 1 ejemplo + 12 TODOs para implementar

### UserSettings Component (`src/pages/UserSettings.tsx`)
- ✅ Profile editing with validation
- ✅ Theme selection (light/dark/auto)
- ✅ Language preferences
- ✅ Notification settings
- ✅ Async save operations
- 📝 **Tests**: 1 ejemplo + 10 TODOs para implementar

### WeatherDashboard Component (`src/pages/WeatherDashboard.tsx`)
- ✅ City selection
- ✅ Weather data display
- ✅ 3-day forecast
- ✅ Loading and error states
- ✅ Retry functionality
- 📝 **Tests**: 1 ejemplo + 10 TODOs para implementar

### Dashboard Component (`src/pages/Dashboard.tsx`)
- ✅ Interactive charts and graphs
- ✅ Metrics cards with change indicators
- ✅ Chart type switching (sales/users/revenue)
- ✅ Time period selection
- ✅ Summary statistics
- 📝 **Tests**: 1 ejemplo + 11 TODOs para implementar

### Navigation Component (`src/components/Navigation.tsx`)
- ✅ Route navigation
- ✅ Active state highlighting
- ✅ Responsive behavior

## 🔍 Test ID Strategy

All interactive elements include `data-testid` attributes for reliable test automation:

```tsx
// Example usage
<button data-testid="add-todo-btn" onClick={addTodo}>
  Add Todo
</button>

// In tests
await page.getByTestId('add-todo-btn').click()
```

## 📊 Coverage Goals

- **Unit Tests**: 90%+ code coverage
- **E2E Tests**: Cover all critical user journeys
- **Integration Tests**: Test component interactions

## 🎯 Test Implementation Status

### TodoList Tests (tests/unit/TodoList.test.tsx)
- ✅ 2 ejemplos implementados
- 🔄 7 TODOs pendientes
- 📋 Funcionalidades: agregar, completar, eliminar, validaciones

### ShoppingCart Tests (tests/unit/ShoppingCart.test.tsx)
- ✅ 1 ejemplo implementado
- 🔄 12 TODOs pendientes
- 📋 Funcionalidades: carrito, productos, cantidades, totales

### UserSettings Tests (tests/unit/UserSettings.test.tsx)
- ✅ 1 ejemplo implementado
- 🔄 10 TODOs pendientes
- 📋 Funcionalidades: perfil, configuraciones, validaciones

### WeatherDashboard Tests (tests/unit/WeatherDashboard.test.tsx)
- ✅ 1 ejemplo implementado
- 🔄 10 TODOs pendientes
- 📋 Funcionalidades: clima, ciudades, estados de carga

### Dashboard Tests (tests/unit/Dashboard.test.tsx)
- ✅ 1 ejemplo implementado
- 🔄 11 TODOs pendientes
- 📋 Funcionalidades: gráficos, métricas, interactividad

## 🤝 Contributing Guidelines

1. **Before starting**: Check existing issues and PRs
2. **Code style**: Follow ESLint and Prettier configurations
3. **Testing**: Write tests for new features
4. **Documentation**: Update README for significant changes
5. **Review**: All code must be reviewed before merging

## 🐛 Troubleshooting

### Common Issues

**Tests failing locally**:
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npx playwright install
```

**Port already in use**:
```bash
# Kill process on port 5173
lsof -ti:5173 | xargs kill -9
```

**TypeScript errors**:
```bash
# Check types
npm run type-check
```

## 📚 Additional Resources

- [Playwright Documentation](https://playwright.dev/)
- [Vitest Documentation](https://vitest.dev/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Testing Best Practices](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)

## 🎯 Step-by-Step Implementation Guide

### 📋 Initial Setup (One Time Only)

```bash
# 1. Clone and install dependencies
git clone https://github.com/gpais-nd/automation-sandbox.git
cd automation-sandbox
npm install
npx playwright install

# 2. Start development server
npm run dev

# 3. Verify everything works
npm test
npm run e2e
```

### 🔄 Development Workflow (For Each TODO)

#### **STEP 1: Check Current Progress**
```bash
npm run test:progress
```
✅ **What this does:** Shows visual progress bars and recommends which file to work on

#### **STEP 2: Choose a TODO**
- Start with `TodoList.test.tsx` (has most examples)
- Open the test file and find a `test.skip()` with TODO comment
- Read the TODO description and example code

#### **STEP 3: Implement the Test**
```bash
# Run tests in watch mode while developing
npm test -- --watch TodoList.test.tsx
```
1. Remove `.skip` from the test
2. Uncomment the example code in the TODO
3. Follow the pattern from implemented examples
4. Save and see if test passes

#### **STEP 4: Validate Implementation**
```bash
npm run test:validate
```
✅ **What this checks:**
- Test structure is correct
- Uses proper test IDs
- Has user interactions
- Follows best practices

#### **STEP 5: Final Verification**
```bash
npm run test:check
```
✅ **What this verifies:**
- TypeScript compiles
- Code passes linting
- All tests pass
- Implementation quality is good

#### **STEP 6: Commit Your Work**
```bash
git add .
git commit -m "test(todo): implement toggle completion functionality"
git push origin your-branch-name
```

---

## 🧪 Testing Type-Specific Guides

### 📱 **Unit Testing (React Components)**

**Files to work on:** `tests/unit/*.test.tsx`

**Step-by-step process:**
```bash
# 1. Check progress
npm run test:progress

# 2. Run specific test file in watch mode
npm test -- --watch TodoList.test.tsx

# 3. Implement TODO (remove .skip, uncomment code)
# 4. Verify test passes

# 5. Validate implementation
npm run test:validate

# 6. Check coverage if needed
npm run test:coverage
```

**What you're testing:**
- Component rendering
- User interactions (click, type, select)
- State changes
- Form validation
- Error handling

**Key patterns to follow:**
```typescript
// ✅ Good: Use test IDs
screen.getByTestId('add-todo-btn')

// ✅ Good: Test user behavior
await user.click(button)
await user.type(input, 'text')

// ✅ Good: Assert on behavior
expect(screen.getByText('Todo added')).toBeInTheDocument()
```

### 🎨 **Visual Regression Testing**

**File to work on:** `tests/e2e/visual-regression.spec.ts`

**Step-by-step process:**
```bash
# 1. Run visual tests to see current state
npm run e2e:visual

# 2. Implement TODO (remove .skip, uncomment code)

# 3. Generate baseline screenshots
npm run e2e:update-snapshots

# 4. Run tests to verify
npm run e2e:visual

# 5. Validate with all checks
npm run test:check
```

**What you're testing:**
- Page layouts remain consistent
- Components look correct
- Different themes work
- Responsive design

**Key patterns to follow:**
```typescript
// ✅ Wait for content to load
await page.waitForSelector('[data-testid="chart-container"]')

// ✅ Take full page screenshot
await expect(page).toHaveScreenshot('dashboard.png')

// ✅ Take component screenshot
await expect(page.getByTestId('chart')).toHaveScreenshot('chart.png')
```

### 🔌 **API Testing**

**File to work on:** `tests/e2e/api-testing.spec.ts`

**Step-by-step process:**
```bash
# 1. Run API tests to see current state
npm run e2e:api

# 2. Implement TODO (remove .skip, uncomment code)

# 3. Test with mocked responses
npm run e2e:api

# 4. Validate implementation
npm run test:validate
```

**What you're testing:**
- API success responses
- Error handling
- Loading states
- Data validation
- Network failures

**Key patterns to follow:**
```typescript
// ✅ Mock API responses
await page.route('/api/weather/*', route => {
  route.fulfill({
    status: 200,
    body: JSON.stringify({ temperature: 22 })
  })
})

// ✅ Test error scenarios
await page.route('/api/weather/*', route => {
  route.fulfill({ status: 500 })
})

// ✅ Verify UI updates
await expect(page.getByTestId('temperature')).toContainText('22°')
```

### 📱 **Mobile Testing**

**File to work on:** `tests/e2e/mobile-testing.spec.ts`

**Step-by-step process:**
```bash
# 1. Run mobile tests to see current state
npm run e2e:mobile

# 2. Implement TODO (remove .skip, uncomment code)

# 3. Test on different devices
npm run e2e:mobile

# 4. Validate implementation
npm run test:check
```

**What you're testing:**
- Touch interactions
- Mobile layouts
- Device orientations
- Virtual keyboard
- Swipe gestures

**Key patterns to follow:**
```typescript
// ✅ Create mobile context
const context = await browser.newContext({
  ...devices['iPhone 13']
})

// ✅ Use click for better browser compatibility
await page.getByTestId('button').click()

// ✅ Test different orientations
await page.setViewportSize({ width: 375, height: 667 })
```

---

## 🔍 Test Validation & Quality Assurance

### 🎯 Validation Tools

#### 1. Progress Tracker
```bash
npm run test:progress
```
**What it does:** Shows visual progress bars, TODO counts, and recommendations

#### 2. Implementation Validator
```bash
npm run test:validate
```
**What it validates:**
- ✅ Test structure (describe, test, expect)
- ✅ Test IDs usage
- ✅ User interactions
- ✅ Best practices compliance

#### 3. Pre-commit Checker
```bash
npm run test:check
```
**What it verifies:**
- 🔍 TypeScript compilation
- 🔍 ESLint code quality
- 🔍 All tests passing
- 🔍 Implementation quality

### 📋 Quality Checklist

#### ✅ Test Structure
- [ ] Uses `describe()` for grouping related tests
- [ ] Descriptive test names explaining behavior
- [ ] Follows AAA pattern (Arrange, Act, Assert)
- [ ] Proper `expect()` assertions

#### ✅ Element Selection
- [ ] Uses `data-testid` for interactive elements
- [ ] Prefers `getByTestId()` over CSS selectors
- [ ] Uses `getByRole()` for semantic elements
- [ ] Avoids fragile selectors

#### ✅ User Interactions
- [ ] Simulates real user interactions
- [ ] Uses `userEvent` instead of `fireEvent`
- [ ] Tests complete flows, not just renders
- [ ] Verifies state changes after interactions

#### ✅ Async Operations
- [ ] Uses `waitFor()` for async operations
- [ ] Tests loading states when applicable
- [ ] Tests error handling
- [ ] Avoids fixed timeouts

### 🏆 Quality Scoring
- **90-100%**: Excellent - Follows all best practices
- **80-89%**: Good - Solid implementation with minor improvements
- **70-79%**: Acceptable - Works but needs improvements
- **<70%**: Needs work - Review implementation

## 🚨 Troubleshooting Guide

### ❌ "Test is failing"
```bash
# 1. Check for syntax errors
npm run type-check

# 2. Run specific test with details
npm test -- TodoList.test.tsx --reporter=verbose

# 3. Check if you're following the pattern
# Compare with implemented examples in the same file
```

### ❌ "Low validation score"
```bash
# 1. Run validator to see specific issues
npm run test:validate

# 2. Common fixes:
# - Add data-testid to elements
# - Use user interactions (click, type)
# - Add proper assertions (expect)
# - Use descriptive test names
```

### ❌ "E2E tests not working"
```bash
# 1. Make sure dev server is running
npm run dev

# 2. Install browsers if needed
npx playwright install

# 3. Run in headed mode to see what's happening
npm run e2e:headed
```

### ❌ "Mobile tests failing in Firefox"
```bash
# Mobile tests automatically skip Firefox (not supported)
# Use these commands instead:
npm run e2e:mobile          # Runs on Chromium + WebKit only
npx playwright test tests/e2e/mobile-testing.spec.ts --project=chromium
```

### ❌ "Coverage too low"
```bash
# 1. Generate detailed coverage report
npm run test:coverage

# 2. Identify uncovered lines
# 3. Add tests for missing functionality
```

---

## 🎯 Quick Reference Commands

```bash
# 📊 Check your progress
npm run test:progress

# 🔍 Validate your implementation
npm run test:validate

# ✅ Run all checks before commit
npm run test:check

# 🧪 Run specific test types
npm test                    # Unit tests
npm run e2e:visual         # Visual tests
npm run e2e:api           # API tests
npm run e2e:mobile        # Mobile tests

# 📈 Generate coverage report
npm run test:coverage
```

**Remember:** Always run `npm run test:check` before committing!

## 🏆 Learning Milestones

### 🥉 **Beginner Level**
**Goal:** Implement 5 TODOs from any test files

**Recommended path:**
1. Complete 3 TODOs from `TodoList.test.tsx`
2. Complete 2 TODOs from `ShoppingCart.test.tsx`

**Validation:** Run `npm run test:progress` - should show ~10% progress

### 🥈 **Intermediate Level**
**Goal:** Complete all TODOs from 2 test files

**Recommended path:**
1. Complete all TODOs in `TodoList.test.tsx` (7 TODOs)
2. Complete all TODOs in `UserSettings.test.tsx` (10 TODOs)

**Validation:** Run `npm run test:validate` - should show 80%+ quality score

### 🥇 **Advanced Level**
**Goal:** Implement all 78+ TODOs across all test files

**Recommended path:**
1. Complete all unit tests (50 TODOs)
2. Complete all E2E tests (26 TODOs)
3. Achieve 90%+ test coverage

**Validation:** Run `npm run test:check` - everything should pass

### 🏆 **Expert Level**
**Goal:** Add new test cases beyond the TODOs

**Ideas:**
- Add edge case tests
- Implement accessibility tests
- Add performance tests
- Create custom test utilities

**Validation:** Maintain 95%+ coverage and contribute back to the project

---

## 🎓 Success Criteria

For each TODO you implement, ensure:
- [ ] Test passes when you run it
- [ ] Follows the pattern of existing examples
- [ ] Uses proper test IDs and assertions
- [ ] `npm run test:validate` shows good quality score
- [ ] `npm run test:check` passes all validations

**Remember:** Quality over quantity! It's better to implement fewer tests correctly than many tests poorly.

Happy testing! 🚀