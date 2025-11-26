import { useState, useEffect } from 'react'
import { Cloud, Sun, CloudRain, Wind, Droplets } from 'lucide-react'

interface WeatherData {
  city: string
  temperature: number
  condition: 'sunny' | 'cloudy' | 'rainy'
  humidity: number
  windSpeed: number
  forecast: Array<{
    day: string
    temp: number
    condition: 'sunny' | 'cloudy' | 'rainy'
  }>
}

export function WeatherDashboard() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null)
  const [selectedCity, setSelectedCity] = useState('New York')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const cities = ['New York', 'London', 'Tokyo', 'Sydney', 'Paris']

  const mockWeatherData: Record<string, WeatherData> = {
    'New York': {
      city: 'New York',
      temperature: 22,
      condition: 'sunny',
      humidity: 65,
      windSpeed: 12,
      forecast: [
        { day: 'Today', temp: 22, condition: 'sunny' },
        { day: 'Tomorrow', temp: 18, condition: 'cloudy' },
        { day: 'Wednesday', temp: 15, condition: 'rainy' },
      ]
    },
    'London': {
      city: 'London',
      temperature: 15,
      condition: 'cloudy',
      humidity: 78,
      windSpeed: 8,
      forecast: [
        { day: 'Today', temp: 15, condition: 'cloudy' },
        { day: 'Tomorrow', temp: 12, condition: 'rainy' },
        { day: 'Wednesday', temp: 17, condition: 'sunny' },
      ]
    }
  }

  const fetchWeatherData = async (city: string) => {
    setIsLoading(true)
    setError(null)
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      const data = mockWeatherData[city]
      if (!data) {
        throw new Error('Weather data not available for this city')
      }
      
      setWeatherData(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch weather data')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchWeatherData(selectedCity)
  }, [selectedCity])

  const getWeatherIcon = (condition: string) => {
    switch (condition) {
      case 'sunny': return <Sun className="text-yellow-500" size={24} />
      case 'cloudy': return <Cloud className="text-gray-500" size={24} />
      case 'rainy': return <CloudRain className="text-blue-500" size={24} />
      default: return <Sun className="text-yellow-500" size={24} />
    }
  }

  return (
    <div className="max-w-4xl mx-auto" data-testid="weather-dashboard-page">
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <Cloud size={24} />
          Weather Dashboard
        </h1>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">Select City</label>
          <select
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            className="px-3 py-2 border rounded-md"
            data-testid="city-select"
          >
            {cities.map(city => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
        </div>

        {isLoading && (
          <div className="text-center py-8" data-testid="loading-state">
            Loading weather data...
          </div>
        )}

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-md p-4 mb-6" data-testid="error-state">
            <p className="text-red-800">{error}</p>
            <button
              onClick={() => fetchWeatherData(selectedCity)}
              className="mt-2 btn-secondary"
              data-testid="retry-btn"
            >
              Retry
            </button>
          </div>
        )}

        {weatherData && !isLoading && (
          <div className="space-y-6" data-testid="weather-content">
            {/* Current Weather */}
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold" data-testid="current-city">
                    {weatherData.city}
                  </h2>
                  <div className="flex items-center gap-2 mt-2">
                    {getWeatherIcon(weatherData.condition)}
                    <span className="text-3xl font-bold" data-testid="current-temperature">
                      {weatherData.temperature}°C
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-2 mb-2">
                    <Droplets size={16} />
                    <span data-testid="current-humidity">{weatherData.humidity}%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Wind size={16} />
                    <span data-testid="current-wind">{weatherData.windSpeed} km/h</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Forecast */}
            <div>
              <h3 className="text-lg font-medium mb-4">3-Day Forecast</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4" data-testid="forecast-list">
                {weatherData.forecast.map((day, index) => (
                  <div
                    key={index}
                    className="border rounded-lg p-4 text-center"
                    data-testid={`forecast-day-${index}`}
                  >
                    <div className="font-medium mb-2" data-testid={`forecast-day-name-${index}`}>
                      {day.day}
                    </div>
                    <div className="flex justify-center mb-2">
                      {getWeatherIcon(day.condition)}
                    </div>
                    <div className="text-lg font-semibold" data-testid={`forecast-temp-${index}`}>
                      {day.temp}°C
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
