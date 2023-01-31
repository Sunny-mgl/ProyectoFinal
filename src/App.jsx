import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import ProductDatail from './pages/ProductDatail'
import Login from './pages/Login'
import Purchases from './pages/Purchases'
import AppNavbar from './components/AppNavbar'
import LoadingScreen from './components/LoadingScreen'
import { useSelector } from 'react-redux'
import { Container } from 'react-bootstrap'
import ProtectedRoutes from './components/ProtecteRoute'

function App() {


  const isLoading = useSelector(state => state.isLoading)

  return (
    <div className="App">
      <HashRouter>
        <AppNavbar />
        {isLoading && <LoadingScreen />}
        {/* si isLoading es false quita la pantalla de carga */}
        <Container className='my-5'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product/:id' element={<ProductDatail />} />
            <Route path='/login' element={<Login />} />
            <Route element={<ProtectedRoutes />}>
              {/* esto me ayuda a que si no hago el login no puedo entrar a las compras */}
              <Route path='purchases' element={<Purchases />} />
            </Route>
          </Routes>
        </Container>
      </HashRouter>
    </div>
  )
}

export default App
