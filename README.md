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

## 🚀 Installation & Setup

### 1. Clone and Install
```bash
git clone https://github.com/gpais-nd/automation-sandbox.git
cd automation-sandbox
npm install
```

### 2. Install Playwright Browsers
```bash
npx playwright install
```

### 3. Start Development Server
```bash
npm run dev
```
The application will be available at `http://localhost:5173`

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
# Run E2E tests
npm run e2e

# Run E2E tests with UI
npm run e2e:ui

# Run E2E tests in headed mode (see browser)
npm run e2e:headed
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
    ├── todo-flow.spec.ts
    └── navigation.spec.ts
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

### Week 5: Advanced Testing and CI/CD
- Complete remaining TODOs across all test files
- Mock API calls and external dependencies
- Set up GitHub Actions workflows
- Learn about test reporting and coverage

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

## 🎯 Next Steps

1. **Set up the project locally**
   ```bash
   npm install
   npx playwright install
   npm run dev
   ```

2. **Run existing tests to understand the patterns**
   ```bash
   npm test          # Run unit tests
   npm run test:ui   # Run tests with UI
   npm run e2e       # Run E2E tests
   ```

3. **Choose a TODO to implement**
   - Start with TodoList (más ejemplos)
   - Pick any TODO from any test file
   - Remove `.skip` and implement the test

4. **Follow the pattern**
   - Use the implemented examples as reference
   - Follow the comments and hints in TODOs
   - Test one functionality at a time

5. **Validate your implementation**
   ```bash
   npm test -- --watch  # Run tests in watch mode
   ```

## 🏆 Challenge Goals

- **Beginner**: Implement 5 TODOs from any test files
- **Intermediate**: Complete all TODOs from 2 test files
- **Advanced**: Implement all 50+ TODOs across all test files
- **Expert**: Add new test cases beyond the TODOs

Happy testing! 🚀