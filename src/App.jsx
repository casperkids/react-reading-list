import { useEffect, useState } from 'react'
import { books as booksData} from "./data/booksData.js"
import BookCard from './components/BookCard.jsx'
import ApiBookCard from './components/ApiBookCard.jsx'
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
  })
  setApiBooks(updatedBooks);
}

// TOTAL BOOKS
const totalBooks = books.length + apiBooks.length;
//console.log(totalBooks)

// READBOOKS　SUM
useEffect(() => {
  const haveReadSum = books.filter(item => item.haveRead=== true).length
  console.log("Books_read_sum", haveReadSum); 
  setHaveReadSum(haveReadSum);
}, [books]);

useEffect(() => {
  const apiHaveReadSum = apiBooks.filter(item => item.haveRead=== true).length
  console.log("APIBooks_read_sum", apiHaveReadSum); 
  setaipHaveReadSum(apiHaveReadSum);  
}, [apiBooks]);

// FavBOOKS　SUM
useEffect(() => {
  const favSum = books.filter(item => item.favorite=== true).length
  console.log("Books_fav_sum", favSum); 
  setFavSum(favSum);
}, [books]);

useEffect(() => {
  const apiFavSum = apiBooks.filter(item => item.favorite=== true).length
  console.log("APIBooks_fav_sum", apiFavSum); 
  setApiFavSum(apiFavSum);  
}, [apiBooks]);

//FILTER Favorite BOOKS
const getFavoriteBooks = (books) => {
  return books.filter(book => book.favorite === true)
};

const getApiFavoriteBooks = (apiBooks) => {
  return apiBooks.filter(apiBook => apiBook.favorite === true)
};

// useEffect(() => {
//   // ここでAPIからデータを取得してbooksとapiBooksをセットする処理を行う
// }, []);



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
        <div className="container">
           <div className="row">
             <div className="col-sm">
             <FontAwesomeIcon icon={faBookmark} style={{color: "#0096ff",}}/> Read Books {haveReadSum + apiHaveReadSum}
             </div>
           <div className="col-sm">
             Total Books {totalBooks}
              </div>
           <div className="col-sm">
             <FontAwesomeIcon icon={faHeart} style={{color: "#ff89d8",}}/> Favorite Books {favSum + apiFavSum}
           </div>
         </div>
      </div>

        <hr className="border-top border-secondary"style={{ marginTop: '30px' }} /> 
        

      </div>
      
      <div className="text-bg-light p-3">
        <div className="collection-list">
            <h3 className="text-center "style={{ paddingBottom: '60px' }}>ALL BOOKS </h3> 
            {books.map(book => (<BookCard book={book} toggleStatus={toggleReadStatus} favoriteStatus={favoriteStatus}  key = {book.id}></BookCard>  ))}
            {apiBooks.map(work => <ApiBookCard book={work} toggleStatus={ApiToggleReadStatus} favoriteStatus={ApiFavoriteStatus}  key={work.key}></ApiBookCard>)} 
        </div>
        <hr className="border-top border-secondary"style={{ marginTop: '30px' }} /> 
      </div>

      <div className="text-bg-light p-3">
        <div className="collection-list">
            <h3 className="text-center "style={{ paddingBottom: '60px' }}>FAVORITE BOOK LIST</h3>
            {getFavoriteBooks(books).map(book => (<li key={book.id}>{book.title}</li>))}
            {getApiFavoriteBooks(apiBooks).map(apiBook => (<li key={apiBook.key}>{apiBook.title}</li>))}
        </div>
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





// //BOOK SUM
// const haveReadBooksNum = books.filter(book=> book.haveRead).length
// const haveReadApiBooksNum = apiBooks.filter(book=> book.haveRead).length
// const haveReadSum = haveReadBooksNum + haveReadApiBooksNum
// console.log("haveReadSUM", haveReadSum)