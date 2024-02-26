import { useState } from 'react'
import { books } from "./data/booksData.js"
import BookCard from './components/BookCard.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
      <div>
       {books.map(book => (<BookCard book={book}></BookCard>  ))}
      </div>
      <div>
        
      </div>
    </>
  )
}

export default App
