import { useEffect, useState } from 'react'
import { books as booksData} from "./data/booksData.js"
import BookCard from './components/BookCard.jsx'
import ApiBookCard from './components/ApiBookCard.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpenReader } from '@fortawesome/free-solid-svg-icons'; 


function App() {

  const [books, setBooks] = useState(booksData)
  const [apiBooks, setApiBooks ] = useState([])
  //add function to change state of book(haveRead: true or false)
  const toggleReadStatus = (id) => {
  let updatedBooks = books.map(book => {
    return book.id === id ? {...book, haveRead: !book.haveRead} : book
  })
  setBooks(updatedBooks)
  }
  //add function to change Favourite of book(favorite: true or false)
  const favoriteStatus = (id) => {
    let updatedBooks = books.map(book => {
      return book.id === id ? {...book, favorite: !book.favorite} : book
    })
   setBooks(updatedBooks)
   }
   
// Add function to change state of API book (haveRead: true or false)
const ApiToggleReadStatus = (key) => {
  let updatedBooks = apiBooks.map((book, index) => {
    return book.key === key ? {...book, haveRead: !book.haveRead} : book;
  });
  setApiBooks(updatedBooks);
};

// Add function to change Favorite of API book (favorite: true or false)
const ApiFavoriteStatus = (key) => {
  let updatedBooks = apiBooks.map((book, index) => {
    return book.key === key ? {...book, favorite: !book.favorite} : book;
  });
  setApiBooks(updatedBooks);
};




const totalBooks = books.length + apiBooks.length;
console.log(totalBooks)


  //API Libruary
  useEffect(() =>{
   const getBooksData = async () =>{
    let response = await fetch('http://openlibrary.org/subjects/art.json')
    let data = await response.json()
    //console.log (data.works)
    setApiBooks(data.works)
   }
   getBooksData()

}, [])

  return (
    <>
        
      <div className="p-5 text-center bg-body-tertiary" >
        <h2 className="mb-6"><FontAwesomeIcon icon={faBookOpenReader} /></h2>
        <h1 className="mb-3">MY BOOK LIBRUARY APP</h1> 
        <hr className="border-top border-secondary"style={{ marginTop: '30px' }} />  
      </div>
      
      <div className="text-bg-light p-3">
        <div className="collection-list">
            <h3 className="text-center "style={{ paddingBottom: '60px' }}>ALL BOOKS <span class="border border-secondary"> {totalBooks} </span></h3> 
            {books.map(book => (<BookCard book={book} toggleStatus={toggleReadStatus} favoriteStatus={favoriteStatus}  key = {book.id}></BookCard>  ))}
            {apiBooks.map(work => <ApiBookCard book={work} toggleStatus={ApiToggleReadStatus} favoriteStatus={ApiFavoriteStatus}  key={work.key}></ApiBookCard>)} 
        </div>
        <hr className="border-top border-secondary"style={{ marginTop: '30px' }} /> 
      </div>

      <div className="text-bg-light p-3">
        <div className="collection-list">
            <h3 className="text-center "style={{ paddingBottom: '60px' }}>API BOOKS</h3>
            {apiBooks.map(work => <ApiBookCard book={work} toggleStatus={ApiToggleReadStatus} favoriteStatus={ApiFavoriteStatus}  key={work.key}></ApiBookCard>)} 
            
        </div>
      </div>
      
      
    </>
  )
}

export default App
