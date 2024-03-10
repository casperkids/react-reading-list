import { Link, Outlet } from 'react-router-dom'
import BookCard from '../components/BookCard.jsx'

const Home = ({ books, toggleStatus, favoriteStatus}) => {
  console.log(toggleStatus, favoriteStatus)
  return (
    <>
      <div>
        <Link to='art' className='btn'>
            art
        </Link>
        <div className="collection-list">
            <h3 className="text-center "style={{ paddingBottom: '60px' }}>ALL BOOKS</h3> 
            {books.map(book => (<BookCard toggleStatus={toggleStatus} favoriteStatus={favoriteStatus} key={`${book.id.toString()}-${book.title}`} book={book}  />
            ))}
        </div>
      </div>  
     
 
      <Outlet />
    </>
  )
}
export default Home
