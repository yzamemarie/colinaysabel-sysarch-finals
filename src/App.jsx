import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Register from './pages/Register'
import Welcome from './pages/Welcome'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Landing />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="welcome" element={<Welcome />} />
    </Route>
  )
)

function App({ routes }) {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
