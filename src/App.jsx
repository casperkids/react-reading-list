import { useEffect, useState } from 'react'
import { books as booksData} from "./data/booksData.js"
import BookCard from './components/BookCard.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {

  const [books, setBooks] = useState(booksData)
//add function to change state of book(haveRead: true or false)
 const toggleReadStatus = (id) => {
  let updatedBooks = books.map(book => {
    return book.id === id ? {...book, haveRead: !book.haveRead} : book
 })
 setBooks(updatedBooks)
}








//   useEffect(() =>{
//     console.log('Use Effect')
//     const getBookData = async() =>{
//     let response = await fetch('http://openlibrary.org/subjects/art.json')
//     let data = await response.json()
//   }
// getBookData()
// }, [])

  return (
    <>
      <ul class="nav justify-content-center">
        <li class="nav-item">
          <a class="nav-link active fs-2" href="#">HELLO MY BOOK APP</a>
        </li>
      </ul>
      <div class="text-bg-warning p-3">
        <div class="collection-list">
            <p class="text-center">MY BOOKS</p>
            {books.map(book => (<BookCard book={book} toggleStatus={toggleReadStatus} key = {book.id}></BookCard>  ))}
      </div>
      </div>
      <div>
        <h2>ALL BOOKS</h2>
       {books.map(book => (<BookCard book={book} toggleStatus={toggleReadStatus} key = {book.id}></BookCard>  ))}
      </div>
      <div>
        <h2>READ BOOKS</h2>
      </div>
    </>
  )
}

export default App
