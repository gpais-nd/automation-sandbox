#!/usr/bin/env node

import { execSync } from 'child_process'

const checks = [
  { name: 'TypeScript Check', cmd: 'npm run type-check', timeout: 30000 },
  { name: 'ESLint', cmd: 'npm run lint', timeout: 30000 },
  { name: 'Unit Tests', cmd: 'npm test -- --run', timeout: 60000 },
  { name: 'Test Validation', cmd: 'npm run test:validate', timeout: 60000 }
]

console.log('\n🔍 PRE-COMMIT CHECKS\n')
console.log('='.repeat(60))

let allPassed = true

for (const check of checks) {
  try {
    console.log(`\n⏳ Running: ${check.name}...`)
    execSync(check.cmd, {
      stdio: 'inherit',
      timeout: check.timeout
    })
    console.log(`✅ ${check.name} passed`)
  } catch (error) {
    console.log(`❌ ${check.name} failed`)
    allPassed = false
  }
}

console.log('\n' + '='.repeat(60))

if (allPassed) {
  console.log('\n✅ All checks passed! Ready to commit.\n')
  process.exit(0)
} else {
  console.log('\n❌ Some checks failed. Fix them before committing.\n')
  process.exit(1)
}
