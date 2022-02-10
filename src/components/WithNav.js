import NavBar from './Navbar'
import { Outlet } from 'react-router-dom'

export default function WithNav() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
}
