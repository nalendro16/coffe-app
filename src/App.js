import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Menu from './pages/menu/Menu'
import Qrcode from './pages/qrcode/Qrcode'
import WithoutNav from './components/WithoutNav'
import WithNav from './components/WithNav'
import './App.css'
import { useStore } from './zustand/Store'

function App() {
  const { respond } = useStore((state) => state)
  console.log(respond)

  return (
    <div className="App">
      {respond && (
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<Navigate to="/" />} />
            <Route element={<WithoutNav />}>
              <Route path="/login" element={<Login />} />
            </Route>
            <Route element={<WithNav />}>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/qrcode" element={<Qrcode />} />
            </Route>
          </Routes>
        </BrowserRouter>
      )}
    </div>
  )
}

export default App
