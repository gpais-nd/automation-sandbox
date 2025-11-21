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
   git checkout -b feature/your-feature-name
   ```

3. **Make changes and test**:
   ```bash
   # Make your changes
   npm test          # Run unit tests
   npm run e2e       # Run E2E tests
   npm run lint      # Check code quality
   ```

4. **Commit and push**:
   ```bash
   git add .
   git commit -m "feat: add new test case for user login"
   git push origin feature/your-feature-name
   ```

5. **Create Pull Request**:
   - Create PR from your feature branch to `sandbox`
   - Ensure all tests pass
   - Request code review from team members
   - Address feedback and merge

6. **Merge to main** (when ready for production):
   - Create PR from `sandbox` to `main`
   - Requires approval from team lead
   - All tests must pass
   - Code review required

### Commit Message Convention
```
type(scope): description

Types: feat, fix, test, refactor, docs, style, chore
Examples:
- feat(todo): add delete functionality
- test(e2e): add user profile form tests
- fix(navigation): resolve active state bug
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   └── Navigation.tsx   # Main navigation component
├── pages/              # Page components
│   ├── Home.tsx        # Landing page
│   ├── TodoList.tsx    # Todo management (main testing example)
│   └── UserProfile.tsx # User profile with forms
├── hooks/              # Custom React hooks
├── utils/              # Utility functions
└── test/               # Test configuration
    └── setup.ts        # Test setup file

tests/
├── unit/               # Unit tests
│   └── TodoList.test.tsx
└── e2e/                # E2E tests
    ├── todo-flow.spec.ts
    └── navigation.spec.ts
```

## 🎓 Learning Path

### Week 1: Unit Testing Fundamentals
- Study `tests/unit/TodoList.test.tsx`
- Learn React Testing Library patterns
- Practice writing component tests
- Understand test-driven development (TDD)

### Week 2: E2E Testing with Playwright
- Explore `tests/e2e/` directory
- Learn Playwright selectors and actions
- Practice cross-browser testing
- Understand page object patterns

### Week 3: Advanced Testing Patterns
- Mock API calls and external dependencies
- Test error scenarios and edge cases
- Learn visual regression testing
- Practice performance testing

### Week 4: CI/CD Integration
- Set up GitHub Actions workflows
- Implement automated testing pipelines
- Learn about test reporting and coverage
- Practice deployment strategies

## 🧩 Testing Examples Included

### TodoList Component (`src/pages/TodoList.tsx`)
- ✅ Add new todos
- ✅ Toggle completion status
- ✅ Delete todos
- ✅ Empty state handling
- ✅ Form validation
- ✅ Keyboard interactions

### UserProfile Component (`src/pages/UserProfile.tsx`)
- ✅ Form editing and validation
- ✅ Async operations (save simulation)
- ✅ State management
- ✅ Input field interactions

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

1. Set up the project locally
2. Run existing tests to understand the patterns
3. Create your first test case following the examples
4. Experiment with different testing scenarios
5. Contribute new test cases and improvements

Happy testing! 🚀