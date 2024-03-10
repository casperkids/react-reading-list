import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { books as booksData} from "./data/booksData.js"
import BookCard from './components/BookCard.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpenReader, faBookmark, faHeart,faArrowUp } from '@fortawesome/free-solid-svg-icons'
import Home from './pages/Home.jsx'
import Art from './pages/Art.jsx'
// import Physics from './pages/Physics.jsx'



function App() {

  const [books, setBooks] = useState(booksData);
  const [artBooks, setArtBooks] = useState([]);
  const [PhysicsBook, setPhysicsBookData] = useState([]);
  const [filmBooks, setFilmBookData] = useState([]);
  // const [favSum, setFavSum] = useState(0)
  // const [readSum, setReadSum] = useState(0)

  //add function to change state of book(haveRead: true or false)
  const toggleReadStatus = (id) => {
    let updatedBooks = books.map(book => {
      return book.id.toString() === id ? {...book, haveRead: !book.haveRead} : book
    });
    setBooks(updatedBooks);
  }
 
  // //add function to change Favourite of book(favorite: true or false)
  const favoriteStatus = (id) => {
    let updatedBooks = books.map(book => {
      return book.id.toString() === id ? {...book, favorite: !book.favorite} : book
    })
   setBooks(updatedBooks)
   }
  
  const mapBookData = (books) => {
    return books.map(book => ({
      id: (book.id && book.id.toString()) || '',   
      title: book.title,
      authors: book.authors[0]?.name,
      year: book.first_publish_year?.toString() || "",
      coverImage: `https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`,
      description: "no description",
      haveRead: false,
      favorite: false,
      memo: ""
    }))
  }



  useEffect(() => {
     const getBooksData = async () => {
       let response = await fetch('http://openlibrary.org/subjects/art.json')
       let data = await response.json();
       let artBooksData = mapBookData(data.works)
       setArtBooks(artBooksData)
      //  setArtBooks(data.works)
       // fetch physics
       let responsePhysics = await fetch('http://openlibrary.org/subjects/physics.json')
       let physicsData= await responsePhysics.json()
       setPhysicsBookData(physicsData.works)
       // fetch film
       let responseFilm = await fetch('http://openlibrary.org/subjects/film.json')
       let filmData= await responseFilm.json()
       setFilmBookData(filmData.works)


      // Assign value to apiBooksData
      let artBooks = mapBookData(data.works)
      let physicsBook =mapBookData(physicsData.works)
      let filmBook =mapBookData(filmData.works)


      // concat the transformed api books, to the local books, and update the origina book list
      let allBooksCombined = booksData.concat(artBooksData, physicsBook, filmBook)
      setBooks(allBooksCombined)
     };
     getBooksData()
    }, []);

  // useEffect(() => {
  //     const calculateFavSum = () => {
  //       const favSum = books.filter(item => item.favorite === true).length
  //       setFavSum(favSum)
  //     };
  //     calculateFavSum()
      
  //     const calculateReadSum = () => {
  //       const readSum = books.filter(item => item.haveRead === true).length
  //       setReadSum(readSum)
  //     };
  //     calculateReadSum()
  //   }, [books])

  
  //  const totalBooks = books.length
  
   const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }; 
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home books={books} toggleStatus={toggleReadStatus} favoriteStatus={favoriteStatus} />} />
        <Route path='art' element={<Art artBooks={artBooks} toggleStatus={toggleReadStatus} favoriteStatus={favoriteStatus} />} />
        {/* <Route path='physics' element={<Physics physicsBooks={PhysicsBook} books={books} toggleStatus={toggleReadStatus} favoriteStatus={favoriteStatus} />} /> */}
        <Route path='*' element={
          <div>
            <h1>This is * route</h1>
          </div> 
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
