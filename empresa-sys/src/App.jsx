import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Inicio from "./components/Inicio"
import Pagina from "./components/Pagina"
import Clientes from './components/Clientes'
import Productos from './components/Productos'
import Proveedores from './components/Proveedores'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Inicio />
  },
  { 
    path: 'empresa_sys',
    element: <Pagina />
  },
  {
    path: 'clientes',
    element: <Clientes />
  },
  {
    path: 'productos',
    element: <Productos /> 
  },
  {
    path: 'proveedores',
    element: <Proveedores />
  }
])

function App() {
  return (
    <section className="App">
      <RouterProvider router={router} />
    </section>
  )
}

export default App
