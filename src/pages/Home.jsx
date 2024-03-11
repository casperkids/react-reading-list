import BookCard from '../components/BookCard.jsx'

const Home = ({ books, toggleStatus, favoriteStatus}) => {
  return (
    <>
      <div>

        <div className="collection-list">
            <h3 className="text-center "style={{ paddingBottom: '60px' }}>ALL BOOKS</h3> 
            {books.map(book => (<BookCard toggleStatus={toggleStatus} favoriteStatus={favoriteStatus} key={`${book.id.toString()}-${book.title}`} book={book}  />
            ))}
        </div>
      </div>  
     
 
    
    </>
  )
}
export default Home
