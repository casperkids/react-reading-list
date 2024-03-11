import { Link, Outlet } from 'react-router-dom'
import BookCard from '../components/BookCard.jsx'
import Navbar from '../components/Navbar.jsx'
import StyledNavbar from '../components/StyledNavbar.jsx'

const Home = ({ books, toggleStatus, favoriteStatus}) => {
  console.log(toggleStatus, favoriteStatus)
  return (
    <>
      <StyledNavbar/>
      <Outlet />
    </>
  )
}
export default Home
