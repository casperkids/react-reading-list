import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useEffect, useState } from 'react'
import { books as booksData} from "./data/booksData.js"
import BookCard from './components/BookCard.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpenReader, faBookmark, faHeart,faArrowUp } from '@fortawesome/free-solid-svg-icons'; 
import Home from './pages/Home.jsx'
// import Art from './pages/Art.jsx'
// import Physics from './pages/Physics.jsx'
// import Archtecture from './pages/Architecture.jsx'


function App() {

  const [books, setBooks] = useState(booksData);
  const [apiBooksData, setApiBooksData] = useState([]);
  const [physicsBookData, setPhysicsBookData] = useState([]);
  const [filmBookData, setfilmBookData] = useState([]);
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
  
  const mapBookData = (books) => {
    return books.map(book => ({
      id: book.key,
      title: book.title,
      authors: book.authors[0]?.name,
      ear: book.first_publish_year,
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
       setApiBooksData(data.works)
       // fetch physics
       let responsePhysics = await fetch('http://openlibrary.org/subjects/physics.json')
       let physicsData= await responsePhysics.json();
       setPhysicsBookData(physicsData.works)
       // fetch physics
       let responseFilm = await fetch('http://openlibrary.org/subjects/film.json')
       let filmData= await responseFilm.json();
       setPhysicsBookData(filmData.works)


      // Assign value to apiBooksData
      let apiBooksData = mapBookData(data.works)
      let physicsBookData =mapBookData(physicsData.works)
      let filmBookData =mapBookData(filmData.works)


      // concat the transformed api books, to the local books, and update the origina book list
      let allBooksCombined = booksData.concat(apiBooksData, physicsBookData, filmBookData)
      setBooks(allBooksCombined)
     };
     getBooksData()
    }, []);

  useEffect(() => {
      const calculateFavSum = () => {
        const favSum = books.filter(item => item.favorite === true).length
        setFavSum(favSum)
      };
      calculateFavSum()
      
      const calculateReadSum = () => {
        const readSum = books.filter(item => item.haveRead === true).length
        setReadSum(readSum)
      };
      calculateReadSum()
    }, [books])

  
   const totalBooks = books.length
  
   const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }; 
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} >
          {/* <Route path='art' element={<Art artBooks={artBooks}/>} />
          <Route path='physics' element={<Physics physicsBooks={physicsBooks} />} />
          <Route path='archtecture' element={<Archtecture archtectureBooks={archtectureBooks} />} /> */}
        </Route>
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
