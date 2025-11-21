# GitHub Workflow Patterns Memory Bank

## Branch Strategy Best Practices
- **Main Branch**: Production-ready code, protected with required reviews
- **Development Branch**: Integration branch for features (sandbox)
- **Feature Branches**: Short-lived branches for specific features/fixes
- **Hotfix Branches**: Emergency fixes directly from main

## Pull Request Workflow

### PR Template Structure
```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Unit tests pass
- [ ] E2E tests pass
- [ ] Manual testing completed

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
```

### Branch Protection Rules
```yaml
# Required for main branch
required_status_checks:
  - unit-tests
  - e2e-tests
  - lint-check
  - type-check
enforce_admins: true
required_pull_request_reviews:
  required_approving_review_count: 2
  dismiss_stale_reviews: true
```

## CI/CD Pipeline Patterns

### GitHub Actions Workflow
```yaml
name: CI/CD Pipeline

on:
  push:
    branches: [main, sandbox]
  pull_request:
    branches: [main, sandbox]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
      
      - run: npm ci
      - run: npm run lint
      - run: npm run type-check
      - run: npm run test:coverage
      - run: npx playwright install
      - run: npm run e2e
      
      - uses: actions/upload-artifact@v4
        if: failure()
        with:
          name: playwright-report
          path: playwright-report/
```

### Parallel Testing Strategy
```yaml
strategy:
  matrix:
    browser: [chromium, firefox, webkit]
    shard: [1/3, 2/3, 3/3]
steps:
  - run: npx playwright test --shard=${{ matrix.shard }} --project=${{ matrix.browser }}
```

## Code Quality Gates

### Pre-commit Hooks
```json
{
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged",
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }
  },
  "lint-staged": {
    "*.{js,jsx,ts,tsx}": ["eslint --fix", "prettier --write"],
    "*.{json,md}": ["prettier --write"]
  }
}
```

### Commit Message Convention
```
type(scope): subject

body (optional)

footer (optional)

Types:
- feat: new feature
- fix: bug fix
- test: adding tests
- refactor: code refactoring
- docs: documentation
- style: formatting
- chore: maintenance
```

## Deployment Strategies

### Environment Promotion
```yaml
# Development → Staging → Production
environments:
  development:
    branch: sandbox
    auto_deploy: true
  staging:
    branch: main
    requires_approval: false
  production:
    branch: main
    requires_approval: true
    reviewers: [team-leads]
```

### Feature Flags Integration
```typescript
// Feature flag usage
const useNewFeature = process.env.FEATURE_NEW_UI === 'true'

if (useNewFeature) {
  return <NewUIComponent />
}
return <LegacyUIComponent />
```

## Testing in CI/CD

### Test Reporting
```yaml
- name: Publish Test Results
  uses: dorny/test-reporter@v1
  if: always()
  with:
    name: Test Results
    path: 'test-results.xml'
    reporter: jest-junit

- name: Upload Coverage
  uses: codecov/codecov-action@v3
  with:
    file: ./coverage/lcov.info
```

### Flaky Test Management
```yaml
# Retry flaky tests
- run: npm run e2e -- --retries=2

# Quarantine flaky tests
- run: npm run test -- --testNamePattern="^(?!.*flaky).*"
```

## Security Practices

### Secrets Management
```yaml
env:
  DATABASE_URL: ${{ secrets.DATABASE_URL }}
  API_KEY: ${{ secrets.API_KEY }}

# Never commit secrets
steps:
  - run: |
      if grep -r "password\|secret\|key" src/; then
        echo "Potential secrets found!"
        exit 1
      fi
```

### Dependency Scanning
```yaml
- name: Run Security Audit
  run: npm audit --audit-level=high

- name: Check for vulnerabilities
  uses: snyk/actions/node@master
  env:
    SNYK_TOKEN: ${{ secrets.SNYK_TOKEN }}
```

## Monitoring and Alerts

### Build Notifications
```yaml
- name: Notify on Failure
  if: failure()
  uses: 8398a7/action-slack@v3
  with:
    status: failure
    channel: '#dev-alerts'
  env:
    SLACK_WEBHOOK_URL: ${{ secrets.SLACK_WEBHOOK }}
```

### Performance Monitoring
```yaml
- name: Lighthouse CI
  uses: treosh/lighthouse-ci-action@v9
  with:
    configPath: './lighthouserc.json'
    uploadArtifacts: true
```

## Team Collaboration

### Code Review Guidelines
- Review within 24 hours
- Focus on logic, not style (automated)
- Suggest improvements, don't just criticize
- Test the changes locally when needed
- Approve only when confident

### Documentation Standards
- Update README for setup changes
- Document breaking changes
- Include examples in code comments
- Maintain API documentation
- Keep changelog updated