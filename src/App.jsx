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
  const [ apiBooks, setApiBook ] = useState([])
  //add function to change state of book(haveRead: true or false)
  const toggleReadStatus = (id) => {
  let updatedBooks = books.map(book => {
    return book.id === id ? {...book, haveRead: !book.haveRead} : book
  })
  setBooks(updatedBooks)
  }
  //add function to change Favourite of book(favorite: true or false)
  const favouriteStatus = (id) => {
    let updatedBooks = books.map(book => {
      return book.id === id ? {...book, favourite: !book.favourite} : book
    })
   setBooks(updatedBooks)
   }

  //API Libruary
  useEffect(() =>{
   const getBooksData = async () =>{
    let response = await fetch('http://openlibrary.org/subjects/art.json')
    let data = await response.json()
    console.log (data.works)
    setApiBook(data.works)
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
            <h3 className="text-center "style={{ paddingBottom: '60px' }}>MY BOOKS</h3>
            {books.map(book => (<BookCard book={book} toggleStatus={toggleReadStatus} key = {book.id}></BookCard>  ))}
        </div>
      </div>
      
      <div>
        <h2>ALL BOOKS</h2>
       {books.map(book => (<BookCard book={book} toggleStatus={toggleReadStatus} key = {book.id}></BookCard>  ))}
      </div>
      <div className="collection-list">
        <h2>API BOOKS</h2>
       {apiBooks.map(work => <ApiBookCard book={work} key={work.ia}/>)} 
      </div>
    </>
  )
}

export default App
