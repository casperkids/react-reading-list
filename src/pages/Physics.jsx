import BookCard from '../components/BookCard.jsx'

const Physics = ({physicsBooks, toggleStatus, favoriteStatus}) => {
  return (
    <div>
      <div className="collection-list" >
          {physicsBooks.map(book => (<BookCard toggleStatus={toggleStatus} favoriteStatus={favoriteStatus} key={`${book.id.toString()}-${book.title}`} book={book}/>
          ))}         
      </div> 
    </div>
  )
}

export default Physics
