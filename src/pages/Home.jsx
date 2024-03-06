import { Link, Outlet } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { books as booksData} from "../data/booksData.js"
import BookCard from '../components/BookCard.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpenReader, faBookmark, faHeart,faArrowUp } from '@fortawesome/free-solid-svg-icons'; 


const Home = () => {
    const [books, setBooks] = useState(booksData);
    const [apiBooksData, setApiBooksData] = useState([]);
    const [physicsBookData, setPhysicsBookData] = useState([]);
    const [filmBookData, setfilmBookData] = useState([]);
    const [favSum, setFavSum] = useState(0)
    const [readSum, setReadSum] = useState(0)
    const totalBooks = books.length

  return (
    <>
      <div>
        <h1>This is </h1>
      </div>
      {/* <div className="p-5 text-center bg-body-tertiary" >
         <h2 className="mb-6"><FontAwesomeIcon icon={faBookOpenReader} /></h2>
         <h1 className="mb-3">MY BOOK LIBRUARY APP</h1> 
          <div className="container">
              <div className="row">
                <div className="col-sm">
                  <FontAwesomeIcon icon={faBookmark} style={{color: "#0096ff",}}/> Read Books {readSum}
                </div>
                <div className="col-sm">
                  Total Books {totalBooks}
                </div>
                <div className="col-sm">
                  <FontAwesomeIcon icon={faHeart} style={{color: "#ff89d8",}}/> Favorite Books {favSum}
                </div>
                <hr className="border-top border-secondary"style={{ marginTop: '30px' }} /> 
             </div>
          </div>
      </div>       
      <div className="text-bg-light p-3">
        <div className="collection-list">
            <h3 className="text-center "style={{ paddingBottom: '60px' }}>ALL BOOKS</h3> 
            {books.map(book => (<BookCard book={book} toggleStatus={toggleReadStatus} favoriteStatus={favoriteStatus}  key = {book.id}></BookCard>  ))}
        </div>
        <button type="button" className="btn btn-danger btn-floating btn-lg" id="btn-back-to-top" onClick={scrollToTop} style={{ float: 'right' }}>
         <FontAwesomeIcon icon={faArrowUp} />
        </button>
        <hr className="border-top border-secondary"style={{ marginTop: '50px' }} /> 
      </div> */}
 
      <Outlet />
    </>
  );
};
export default Home;