# Advanced Testing Patterns Memory Bank

## Visual Regression Testing

### Playwright Screenshots
```typescript
// Full page screenshot
await expect(page).toHaveScreenshot('page-name.png')

// Element screenshot
await expect(page.getByTestId('component')).toHaveScreenshot('component.png')

// Custom threshold for minor differences
await expect(page).toHaveScreenshot('chart.png', { threshold: 0.2 })
```

### Visual Testing Best Practices
- Generate baseline screenshots: `npm run e2e:update-snapshots`
- Use consistent viewport sizes across environments
- Wait for animations and loading states to complete
- Test different themes and responsive breakpoints
- Store screenshots in version control for team consistency

## API Testing Patterns

### Request Mocking
```typescript
// Mock successful response
await page.route('/api/endpoint', route => {
  route.fulfill({
    status: 200,
    contentType: 'application/json',
    body: JSON.stringify({ data: 'mock data' })
  })
})

// Mock error response
await page.route('/api/endpoint', route => {
  route.fulfill({
    status: 500,
    body: JSON.stringify({ error: 'Server error' })
  })
})
```

### API Testing Strategy
- Test success and error scenarios
- Verify request headers and payloads
- Test different HTTP status codes
- Validate response data structure
- Test rate limiting and retry logic
- Mock network timeouts and failures

## Mobile Testing Patterns

### Device Emulation
```typescript
// Use predefined device
const context = await browser.newContext({
  ...devices['iPhone 13']
})

// Custom mobile viewport
const context = await browser.newContext({
  viewport: { width: 375, height: 667 },
  userAgent: 'Mobile Safari',
  isMobile: true,
  hasTouch: true
})
```

### Touch Interactions
```typescript
// Tap instead of click
await page.getByTestId('button').tap()

// Swipe gestures
await page.touchscreen.tap(100, 100)
await page.mouse.move(100, 100)
await page.mouse.down()
await page.mouse.move(200, 100)
await page.mouse.up()

// Long press
await page.getByTestId('item').press({ delay: 1000 })
```

### Mobile Testing Checklist
- Test portrait and landscape orientations
- Verify touch targets are appropriately sized
- Test virtual keyboard interactions
- Validate scroll behavior and momentum
- Test device-specific features (camera, GPS)
- Verify performance on slower devices

## Test Organization Strategy

### File Structure
```
tests/
├── e2e/
│   ├── visual-regression.spec.ts    # 1 ejemplo + 8 TODOs
│   ├── api-testing.spec.ts          # 1 ejemplo + 8 TODOs  
│   ├── mobile-testing.spec.ts       # 1 ejemplo + 10 TODOs
│   ├── navigation.spec.ts           # Existing
│   └── todo-flow.spec.ts           # Existing
└── unit/
    ├── TodoList.test.tsx            # 2 ejemplos + 7 TODOs
    ├── ShoppingCart.test.tsx        # 1 ejemplo + 12 TODOs
    ├── UserSettings.test.tsx        # 1 ejemplo + 10 TODOs
    ├── WeatherDashboard.test.tsx    # 1 ejemplo + 10 TODOs
    └── Dashboard.test.tsx           # 1 ejemplo + 11 TODOs
```

### TODO Implementation Priority
1. **Visual Regression**: Start with component screenshots
2. **API Testing**: Begin with success/error scenarios
3. **Mobile Testing**: Focus on touch interactions first

## Team Workflow Integration

### Branch Strategy for New Tests
```bash
# Visual regression TODOs
git checkout -b test/visual-todo-list-screenshots
git checkout -b test/visual-dashboard-charts
git checkout -b test/visual-responsive-design

# API testing TODOs  
git checkout -b test/api-dashboard-metrics
git checkout -b test/api-error-handling
git checkout -b test/api-authentication

# Mobile testing TODOs
git checkout -b test/mobile-shopping-cart
git checkout -b test/mobile-navigation
git checkout -b test/mobile-gestures
```

### Commit Message Patterns
```
test(visual): implement todo list screenshot regression test
test(api): add dashboard metrics API integration test  
test(mobile): implement shopping cart mobile functionality test
```

### Code Review Focus Areas
- Screenshot consistency across environments
- API mock data realism and completeness
- Mobile interaction patterns and accessibility
- Test reliability and flakiness prevention
- Performance implications of test additions

## Advanced Testing Commands

### Visual Testing
```bash
# Run visual regression tests
npm run e2e:visual

# Update visual baselines
npm run e2e:update-snapshots

# Run visual tests on specific browser
npx playwright test tests/e2e/visual-regression.spec.ts --project=chromium
```

### API Testing
```bash
# Run API integration tests
npm run e2e:api

# Run with network logging
npx playwright test tests/e2e/api-testing.spec.ts --trace=on
```

### Mobile Testing
```bash
# Run mobile-specific tests
npm run e2e:mobile

# Run on specific mobile device
npx playwright test tests/e2e/mobile-testing.spec.ts --project="Mobile Chrome"
```

## Performance Considerations

### Visual Testing Performance
- Use selective screenshots instead of full page when possible
- Implement screenshot caching for unchanged components
- Optimize image compression for faster comparisons
- Run visual tests in parallel across browsers

### API Testing Performance
- Mock external dependencies to avoid network calls
- Use realistic but minimal mock data
- Implement request/response caching where appropriate
- Test API performance under load conditions

### Mobile Testing Performance
- Test on representative low-end devices
- Monitor memory usage during mobile tests
- Verify smooth animations and interactions
- Test offline functionality and data persistence

## Integration with CI/CD

### GitHub Actions Integration
```yaml
- name: Run Visual Regression Tests
  run: npm run e2e:visual
  
- name: Upload Visual Diff Artifacts
  if: failure()
  uses: actions/upload-artifact@v4
  with:
    name: visual-diffs
    path: test-results/

- name: Run Mobile Tests
  run: npm run e2e:mobile
```

### Test Reporting
- Generate HTML reports for visual diffs
- Create mobile test reports with device screenshots
- Integrate API test results with coverage reports
- Set up notifications for test failures
