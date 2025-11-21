export function Home() {
  return (
    <div className="max-w-4xl mx-auto" data-testid="home-page">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Web Automation Testing Sandbox
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Learn modern testing practices with React, TypeScript, and Playwright
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h2 className="text-2xl font-semibold mb-4">Unit Testing</h2>
          <p className="text-gray-600 mb-4">
            Learn component testing with Vitest and React Testing Library
          </p>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• Component rendering tests</li>
            <li>• User interaction testing</li>
            <li>• Mock functions and API calls</li>
            <li>• Coverage reporting</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h2 className="text-2xl font-semibold mb-4">E2E Testing</h2>
          <p className="text-gray-600 mb-4">
            Master end-to-end testing with Playwright
          </p>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• Cross-browser testing</li>
            <li>• User journey automation</li>
            <li>• Visual regression testing</li>
            <li>• Mobile device testing</li>
          </ul>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Getting Started</h3>
        <p className="text-gray-700">
          Navigate to the Todo List to see a fully tested component, or check the Profile page 
          for form testing examples. All components include comprehensive test coverage.
        </p>
      </div>
    </div>
  )
}