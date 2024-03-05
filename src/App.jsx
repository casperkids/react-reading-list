import { useEffect, useState } from 'react'
import { books as booksData} from "./data/booksData.js"
import BookCard from './components/BookCard.jsx'
// import { apiBooks as apiBooksData} from './components/ApiBookCard.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpenReader, faBookmark, faHeart } from '@fortawesome/free-solid-svg-icons'; 


function App() {

  const [books, setBooks] = useState(booksData)
  const [apiBooks, setApiBooks ] = useState([])
  const [haveReadSum, setHaveReadSum] = useState(0)
  const [apiHaveReadSum, setaipHaveReadSum] = useState(0)
  const [favSum, setFavSum] = useState(0)
  const [apiFavSum, setApiFavSum] = useState(0)

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
  const apiToggleReadStatus = (key) => {
    let updatedBooks = apiBooks.map((book) => {
     return book.key === key ? {...book, haveRead: !book.haveRead} : book;
   });
  setApiBooks(updatedBooks);
};

  //API Libruary
  useEffect(() =>{
   const getBooksData = async () =>{
    let response = await fetch('http://openlibrary.org/subjects/art.json')
    let data = await response.json()
    const apiBooksData = data.works.map(book => ({
      id: book.key,
      title: book.title,
      authors: book.authors[0]?.name ,
      year: book.first_publish_year ,
      coverImage: `https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`,
      description: "no description",
      haveRead: false,
      favorite: false,
      memo: ""
    }));
    setApiBooks(apiBooksData)
   }
   getBooksData()

}, [])

  return (
    <>
        
      <div className="p-5 text-center bg-body-tertiary" >
        <h2 className="mb-6"><FontAwesomeIcon icon={faBookOpenReader} /></h2>
        <h1 className="mb-3">MY BOOK LIBRUARY APP</h1> 
        <div className="container">
           <div className="row">
             {/* <div className="col-sm">
             <FontAwesomeIcon icon={faBookmark} style={{color: "#0096ff",}}/> Read Books {haveReadSum + apiHaveReadSum}
             </div>
           <div className="col-sm">
             Total Books {totalBooks}
              </div>
           <div className="col-sm">
             <FontAwesomeIcon icon={faHeart} style={{color: "#ff89d8",}}/> Favorite Books {favSum + apiFavSum}
           </div> */}
         </div>
      </div>

        <hr className="border-top border-secondary"style={{ marginTop: '30px' }} /> 
        

      </div>
      
      <div className="text-bg-light p-3">
        <div className="collection-list">
            <h3 className="text-center "style={{ paddingBottom: '60px' }}>ALL BOOKS </h3> 
            {books.map(book => (<BookCard book={book} toggleStatus={toggleReadStatus} favoriteStatus={favoriteStatus}  key = {book.id}></BookCard>  ))}
            {apiBooks.map(apiBook => (<BookCard book={apiBook} toggleStatus={apiToggleReadStatus} favoriteStatus={apiFavoriteStatus} key = {apiBook.id}></BookCard>  ))}
        </div>
        <hr className="border-top border-secondary"style={{ marginTop: '30px' }} /> 
      </div>
      
      
    </>
  )
}

export default App
