#!/usr/bin/env node

import fs from 'fs'
import { execSync } from 'child_process'

const validationRules = {
  hasDescribeBlock: /describe\(/,
  hasTestCases: /test\(/,
  hasAssertions: /expect\(/,
  hasTestIds: /getByTestId|data-testid/,
  hasUserInteractions: /click|type|fill|tap/,
  hasWaitForElements: /waitFor|toBeVisible|toBeInTheDocument/,
  noHardcodedValues: /(?<!\/\/.*)(?<!'.*)'[^']*\d{4,}[^']*'/,
  hasDescriptiveNames: /test\(['"`][A-Z].*should.*['"`]/,
  hasProperCleanup: /afterEach|beforeEach/
}

function validateTestFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8')
  const fileName = filePath.split('/').pop()
  
  const results = {
    file: fileName,
    passed: [],
    failed: [],
    warnings: [],
    score: 0
  }
  
  if (validationRules.hasDescribeBlock.test(content)) {
    results.passed.push('✅ Has describe blocks')
  } else {
    results.failed.push('❌ Missing describe blocks')
  }
  
  if (validationRules.hasTestCases.test(content)) {
    results.passed.push('✅ Has test cases')
  } else {
    results.failed.push('❌ No test cases found')
  }
  
  if (validationRules.hasAssertions.test(content)) {
    results.passed.push('✅ Has assertions')
  } else {
    results.failed.push('❌ No assertions found')
  }
  
  if (validationRules.hasTestIds.test(content)) {
    results.passed.push('✅ Uses test IDs')
  } else {
    results.warnings.push('⚠️  Consider using data-testid attributes')
  }
  
  if (validationRules.hasUserInteractions.test(content)) {
    results.passed.push('✅ Tests user interactions')
  } else {
    results.warnings.push('⚠️  No user interactions tested')
  }
  
  if (validationRules.hasWaitForElements.test(content)) {
    results.passed.push('✅ Waits for elements properly')
  } else {
    results.warnings.push('⚠️  Consider adding wait conditions')
  }
  
  const totalChecks = results.passed.length + results.failed.length + results.warnings.length
  results.score = Math.round((results.passed.length / totalChecks) * 100)
  
  return results
}

function runTestValidation() {
  console.log('\n🔍 TEST IMPLEMENTATION VALIDATOR\n')
  console.log('=' .repeat(60))
  
  const testFiles = [
    'tests/unit/TodoList.test.tsx',
    'tests/unit/ShoppingCart.test.tsx',
    'tests/unit/UserSettings.test.tsx',
    'tests/unit/WeatherDashboard.test.tsx',
    'tests/unit/Dashboard.test.tsx'
  ]
  
  testFiles.forEach(file => {
    if (fs.existsSync(file)) {
      const results = validateTestFile(file)
      
      console.log(`📁 ${results.file}`)
      console.log(`   🎯 Quality Score: ${results.score}%`)
      
      results.passed.forEach(item => console.log(`   ${item}`))
      results.failed.forEach(item => console.log(`   ${item}`))
      results.warnings.forEach(item => console.log(`   ${item}`))
      
      console.log('')
    }
  })
  
  console.log('🧪 RUNNING TESTS TO VERIFY IMPLEMENTATION...\n')
  
  try {
    const testOutput = execSync('npm run test:unit-only -- --reporter=verbose', { 
      encoding: 'utf8',
      timeout: 30000 
    })
    
    console.log('✅ All tests are passing!')
    
    const passedTests = (testOutput.match(/✓/g) || []).length
    const failedTests = (testOutput.match(/✗/g) || []).length
    
    console.log(`   📊 Passed: ${passedTests}`)
    console.log(`   📊 Failed: ${failedTests}`)
    
  } catch (error) {
    console.log('❌ Some tests are failing:')
    console.log(error.stdout)
  }
  
  console.log('\n💡 RECOMMENDATIONS:')
  console.log('   • Use descriptive test names that explain behavior')
  console.log('   • Always use data-testid for reliable element selection')
  console.log('   • Test user interactions, not just rendering')
  console.log('   • Add proper wait conditions for async operations')
  console.log('   • Follow the AAA pattern: Arrange, Act, Assert')
  console.log('')
}

runTestValidation()
