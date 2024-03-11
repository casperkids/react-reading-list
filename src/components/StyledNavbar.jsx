import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <NavLink to='/'  style={({ isActive }) => {
            return { color: isActive ? 'red' : 'grey' };
            }} className='btn'>Home</NavLink>
        <NavLink to='/art'  style={({ isActive }) => {
            return { color: isActive ? 'red' : 'grey' };
            }}className='btn'>art </NavLink>
        <NavLink to='/physics' style={({ isActive }) => {
            return { color: isActive ? 'red' : 'grey' };
            }} className='btn'>Physics </NavLink>
    </nav>
  )
}
export default Navbar