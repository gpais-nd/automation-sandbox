import { Routes, Route } from 'react-router-dom'
import { Navigation } from './components/Navigation'
import { Home } from './pages/Home'
import { TodoList } from './pages/TodoList'
import { UserProfile } from './pages/UserProfile'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todos" element={<TodoList />} />
          <Route path="/profile" element={<UserProfile />} />
        </Routes>
      </main>
    </div>
  )
}

export default App