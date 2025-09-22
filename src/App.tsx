import { Link } from "react-router-dom"
import AppRouter from "./router/router"

function App() {
  return (
    <div>
      <nav className="bg-gray-200 p-4 flex gap-4 space-x-4 display justify-center">
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          <div className="text-align: right space-x-4">
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </div>
        </nav>
        <AppRouter/>
    </div>
  )
}

export default App
