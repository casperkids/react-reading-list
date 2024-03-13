import BookCard from '../components/BookCard.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpenReader, faBookmark, faHeart,faArrowUp } from '@fortawesome/free-solid-svg-icons'

const Home = ({ books, toggleStatus, favoriteStatus, favSum, readSum }) => {
  const totalBooks = books.length

 console.log('Favorite', favSum)

  return (
    <>
      <div>
        <div className="p-5 text-center bg-body-tertiary" >
          <div className="container">
              <div className="row">
                <div className="col-sm">
                  <FontAwesomeIcon icon={faBookmark} style={{color: "#0096ff",}}/> Read Books {readSum}
                </div>
                <div className="col-sm">
                  <FontAwesomeIcon icon={faBookOpenReader} style={{color: "#005392",}}/>Total Books {totalBooks}
                </div>
                <div className="col-sm">
                  <FontAwesomeIcon icon={faHeart} style={{color: "#ff89d8",}}/> Favorite Books {favSum}
                </div>
                <hr className="border-top border-secondary"style={{ marginTop: '30px' }} /> 
             </div>
          </div>
      </div>       
      <div className="collection-list">
           {books.map(book => (<BookCard toggleStatus={toggleStatus} favoriteStatus={favoriteStatus} key={book.id} book={book}  />
            ))}
      </div>
    </div>  
     
 
    
    </>
  )
}
export default Home
