import { useEffect, useState } from 'react'
import { books as booksData} from "./data/booksData.js"
import BookCard from './components/BookCard.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpenReader, faBookmark, faHeart,faArrowUp } from '@fortawesome/free-solid-svg-icons'; 


function App() {

  const [books, setBooks] = useState(booksData);
  const [apiBooksData, setApiBooksData] = useState([]);
  const [favSum, setFavSum] = useState(0)
  const [readSum, setReadSum] = useState(0)

  //add function to change state of book(haveRead: true or false)
  const toggleReadStatus = (id) => {
   let updatedBooks = books.map(book => {
    return book.id === id ? {...book, haveRead: !book.haveRead} : book
  })
  setBooks(updatedBooks)
  }
 
  // //add function to change Favourite of book(favorite: true or false)
  const favoriteStatus = (id) => {
    let updatedBooks = books.map(book => {
      return book.id === id ? {...book, favorite: !book.favorite} : book
    })
   setBooks(updatedBooks)
   }
  

  useEffect(() => {
     const getBooksData = async () => {
       let response = await fetch('http://openlibrary.org/subjects/art.json');
       let data = await response.json();
       // Assign value to apiBooksData
       let apiBooksData = data.works.map(book => ({
         id: book.key,
         title: book.title,
         authors: book.authors[0]?.name,
         year: book.first_publish_year,
         coverImage: `https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`,
         description: "no description",
         haveRead: false,
         favorite: false,
         memo: ""
       }));
      // concat the transformed api books, to the local books, and update the origina book list
      let allBooksCombined = booksData.concat(...apiBooksData);
      setBooks(allBooksCombined)
     };
     getBooksData()
    }, []);

  useEffect(() => {
      const calculateFavSum = () => {
        const favSum = books.filter(item => item.favorite === true).length;
        setFavSum(favSum);
      };
      calculateFavSum();
    }, [books]);

  useEffect(() => {
      const calculateReadSum = () => {
        const readSum = books.filter(item => item.haveRead === true).length;
        setReadSum(readSum);
      };
      calculateReadSum();
    }, [books]);
  
   const totalBooks = books.length
  
   const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }; 
  



  return (
    <>
        
      <div className="p-5 text-center bg-body-tertiary" >
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
            {books.map(book => (<BookCard book={book} toggleStatus={toggleReadStatus} favoriteStatus={favoriteStatus}  key = {book.id}></BookCard>  ))} 
        </div>
        <button type="button" className="btn btn-danger btn-floating btn-lg" id="btn-back-to-top" onClick={scrollToTop} style={{ float: 'right' }}>
         <FontAwesomeIcon icon={faArrowUp} />
        </button>
        <hr className="border-top border-secondary"style={{ marginTop: '50px' }} /> 
      </div>



   
      
      
    </>
  )
}

export default App
