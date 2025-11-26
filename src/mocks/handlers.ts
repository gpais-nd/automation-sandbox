/**
 * Mock Service Worker (MSW) Handlers
 * 
 * Define los handlers para interceptar y mockear llamadas a APIs.
 * Usado tanto en tests como en desarrollo para simular respuestas del servidor.
 */

// Mock data
const weatherData = {
  'new-york': {
    city: 'New York',
    temperature: 22,
    condition: 'sunny',
    humidity: 65,
    windSpeed: 12,
    forecast: [
      { day: 'Today', high: 24, low: 18, condition: 'sunny' },
      { day: 'Tomorrow', high: 26, low: 20, condition: 'cloudy' },
      { day: 'Wednesday', high: 23, low: 17, condition: 'rainy' }
    ]
  },
  'london': {
    city: 'London',
    temperature: 15,
    condition: 'cloudy',
    humidity: 78,
    windSpeed: 8,
    forecast: [
      { day: 'Today', high: 17, low: 12, condition: 'cloudy' },
      { day: 'Tomorrow', high: 19, low: 14, condition: 'rainy' },
      { day: 'Wednesday', high: 16, low: 11, condition: 'cloudy' }
    ]
  }
}

const dashboardData = {
  metrics: [
    { title: 'Total Sales', value: '$12,345', change: '+12%', trend: 'up' },
    { title: 'Active Users', value: '1,234', change: '+5%', trend: 'up' },
    { title: 'Revenue', value: '$45,678', change: '-2%', trend: 'down' },
    { title: 'Conversion', value: '3.2%', change: '+0.5%', trend: 'up' }
  ],
  chartData: {
    sales: [65, 78, 90, 81, 56, 55, 40],
    users: [28, 48, 40, 19, 86, 27, 90],
    revenue: [45, 52, 38, 24, 33, 26, 21]
  }
}

// Placeholder for MSW handlers - will be implemented when MSW is added
export const handlers = [
  // Weather API endpoints
  // Dashboard API endpoints  
  // User settings API
]