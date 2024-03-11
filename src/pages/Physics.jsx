import { Link, Outlet } from 'react-router-dom'

const Physics = () => {
  return (
    <div>
    <Link to='/art' className='btn'>
    art
</Link>
<Link to='/' className='btn'>
    Home
</Link>    
    <h2>Physics Books</h2>
    </div>
  )
}

export default Physics
