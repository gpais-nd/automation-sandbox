import { Routes, Route } from 'react-router-dom'
import { Navigation } from './components/Navigation'
import { Home } from './pages/Home'
import { TodoList } from './pages/TodoList'
import { ShoppingCart } from './pages/ShoppingCart'
import { UserSettings } from './pages/UserSettings'
import { WeatherDashboard } from './pages/WeatherDashboard'
import { Dashboard } from './pages/Dashboard'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todos" element={<TodoList />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/settings" element={<UserSettings />} />
          <Route path="/weather" element={<WeatherDashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </main>
    </div>
  )
}

export default App