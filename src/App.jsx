import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { books } from "./data/booksData.js"
import BookCard from './components/BookCard.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
      <div>
       {books.map(book => (<BookCard book={book}></BookCard>  ))}
      </div>
    </>
  )
}

export default App
