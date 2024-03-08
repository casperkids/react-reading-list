import { Link, Outlet } from 'react-router-dom'
import BookCard from '../components/BookCard.jsx'

const Home = ({ books, toggleStatus, favoriteStatus}) => {
  console.log(books);
  return (
    <>
      <div>
        <Link to='art' className='btn'>
            art
        </Link>
        <div className="collection-list">
            <h3 className="text-center "style={{ paddingBottom: '60px' }}>ALL BOOKS</h3> 
            {books.map(book => (<BookCard key={book.id} book={book} toggleStatus={toggleStatus} favoriteStatus={favoriteStatus}/>
            ))}
        </div>
      </div>  
     
 
      <Outlet />
    </>
  )
}
export default Home
