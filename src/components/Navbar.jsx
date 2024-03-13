import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <nav>
        <Link to='/' className='btn'>Home</Link>
        <Link to='/art' className='btn'>art </Link>
        <Link to='/physics' className='btn'>Physics </Link>
    </nav>
  )
}
export default Navbar