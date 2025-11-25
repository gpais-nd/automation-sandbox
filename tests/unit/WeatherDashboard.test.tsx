import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { WeatherDashboard } from '../../src/pages/WeatherDashboard'

describe('WeatherDashboard Component', () => {
  beforeEach(() => {
    render(<WeatherDashboard />)
  })

  // ✅ EJEMPLO IMPLEMENTADO - Test básico de renderizado y carga inicial
  test('renders weather dashboard and loads initial data', async () => {
    expect(screen.getByTestId('weather-dashboard-page')).toBeInTheDocument()
    expect(screen.getByTestId('city-select')).toBeInTheDocument()
    
    // Should show loading initially
    expect(screen.getByTestId('loading-state')).toBeInTheDocument()
    
    // Wait for data to load
    await waitFor(() => {
      expect(screen.getByTestId('weather-content')).toBeInTheDocument()
    })
    
    // Should show New York weather data
    expect(screen.getByTestId('current-city')).toHaveTextContent('New York')
    expect(screen.getByTestId('current-temperature')).toHaveTextContent('22°C')
  })

  /* TODO: Implementar test case para cambio de ciudad
   * Debe verificar que al seleccionar una ciudad diferente
   * se carguen los datos correspondientes a esa ciudad
   */
  test.skip('loads weather data when city is changed', async () => {
    // const user = userEvent.setup()
    // Implementar test aquí
  })

  /* TODO: Implementar test case para mostrar estado de loading
   * Debe verificar que se muestre el indicador de carga
   * mientras se obtienen los datos del clima
   */
  test.skip('shows loading state while fetching data', async () => {
    // const user = userEvent.setup()
    // Implementar test aquí
  })

  /* TODO: Implementar test case para manejo de errores
   * Debe verificar que se muestre un mensaje de error
   * cuando falla la carga de datos del clima
   */
  test.skip('shows error state when data fetch fails', async () => {
    // Mock para simular error
    // Implementar test aquí
  })

  /* TODO: Implementar test case para botón de reintentar
   * Debe verificar que el botón "Retry" aparezca en caso de error
   * y que al hacer clic vuelva a intentar cargar los datos
   */
  test.skip('retries data fetch when retry button is clicked', async () => {
    // const user = userEvent.setup()
    // Implementar test aquí
  })

  /* TODO: Implementar test case para mostrar datos actuales del clima
   * Debe verificar que se muestren correctamente la temperatura,
   * humedad y velocidad del viento
   */
  test.skip('displays current weather data correctly', async () => {
    // Implementar test aquí
  })

  /* TODO: Implementar test case para mostrar pronóstico de 3 días
   * Debe verificar que se muestren los 3 días del pronóstico
   * con sus respectivas temperaturas y condiciones
   */
  test.skip('displays 3-day forecast correctly', async () => {
    // Implementar test aquí
  })

  /* TODO: Implementar test case para iconos del clima
   * Debe verificar que se muestren los iconos correctos
   * según la condición del clima (sunny, cloudy, rainy)
   */
  test.skip('displays correct weather icons', async () => {
    // Implementar test aquí
  })

  /* TODO: Implementar test case para todas las ciudades disponibles
   * Debe verificar que el dropdown contenga todas las ciudades
   * definidas en el array de ciudades
   */
  test.skip('shows all available cities in dropdown', () => {
    // Implementar test aquí
  })

  /* TODO: Implementar test case para formato de datos del clima
   * Debe verificar que los datos se muestren con las unidades correctas
   * (°C para temperatura, % para humedad, km/h para viento)
   */
  test.skip('displays weather data with correct units', async () => {
    // Implementar test aquí
  })

  /* TODO: Implementar test case para persistencia de selección de ciudad
   * Debe verificar que la ciudad seleccionada se mantenga
   * durante la sesión del usuario
   */
  test.skip('maintains selected city during session', async () => {
    // const user = userEvent.setup()
    // Implementar test aquí
  })
})