#!/usr/bin/env node

/**
 * Pre-commit Test Validation
 * 
 * Ejecuta validaciones antes de hacer commit para asegurar calidad.
 */

const { execSync } = require('child_process')

function runPreCommitChecks() {
  console.log('\n🔍 PRE-COMMIT VALIDATION CHECKS\n')
  
  const checks = [
    {
      name: 'TypeScript Type Check',
      command: 'npm run type-check',
      required: true
    },
    {
      name: 'ESLint Code Quality',
      command: 'npm run lint',
      required: true
    },
    {
      name: 'Unit Tests',
      command: 'npm run test:unit-only',
      required: true
    },
    {
      name: 'Test Implementation Quality',
      command: 'node scripts/validate-implementation.js',
      required: false
    }
  ]
  
  let allPassed = true
  
  checks.forEach(check => {
    console.log(`🔄 Running: ${check.name}...`)
    
    try {
      execSync(check.command, { 
        stdio: 'pipe',
        timeout: 60000 
      })
      console.log(`✅ ${check.name}: PASSED`)
    } catch (error) {
      console.log(`❌ ${check.name}: FAILED`)
      
      if (check.required) {
        allPassed = false
        console.log(`   Error: ${error.message}`)
      } else {
        console.log(`   Warning: ${error.message}`)
      }
    }
    
    console.log('')
  })
  
  if (allPassed) {
    console.log('🎉 All checks passed! Ready to commit.')
    process.exit(0)
  } else {
    console.log('❌ Some required checks failed. Please fix before committing.')
    process.exit(1)
  }
}

runPreCommitChecks()