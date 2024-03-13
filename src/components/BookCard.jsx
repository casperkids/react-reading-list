import PropTypes  from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark, faHeart, faHeartCrack } from '@fortawesome/free-solid-svg-icons'; 
import Badge from "react-bootstrap/Badge"
import { Link, Outlet } from 'react-router-dom'

export default function BookCard({ book, toggleStatus, favoriteStatus }) {
  return (
    

    <div style={{ maxWidth: '700px', margin: '28px auto' }} className="d-flex  position-relative">
        <img src={book.coverImage} className="flex-shrink-0 me-3" style={{ maxWidth: '15%' }} alt={book.id} />
        <div>
          <h4 className="mt-0">{book.title}</h4>
          <h5 >{book.authors}</h5>
          <div className="container">
          <p>ID :{book.id}</p>
          <div className="row">
               <div className="d-flex align-items-center">
                <FontAwesomeIcon icon={book.haveRead ? faBookmark : faBookmark } style={{color: book.haveRead ? "#0096ff" : '#d5d5d5'}} />   
                <h5><Badge pill bg="light" text="dark" className="statusButton" onClick={() => {toggleStatus(book.id)}}  > {book.haveRead ? 'Have read it' : 'Want to read it'}
                </Badge> </h5>
                <FontAwesomeIcon icon = {book.favorite? faHeart  : faHeartCrack} style={{ color: book.favorite ? '#ff89d8' : '#d5d5d5' }} />
                <h5><Badge pill bg="light" text="dark" className="statusButton" onClick={() => {favoriteStatus(book.id)}} > {book.favorite ? 'Favorite' : 'Unfavorite'}
                </Badge> </h5>
               </div>
          </div>
          <Link to={`/${book.id}`}>more info</Link>
    </div>


    {/* <div style={{ maxWidth: '700px' }} className="container card mb-3">
    <div className="row g-0">
      <div className="col-md-4 d-flex align-items-center">
        <img src={book.coverImage} alt={book.id} style={{ maxWidth: '80%' }} />
      </div>

      <div className="col-md-8">
        <div className="card-body px-2">
          <h3 className="card-title">{book.title}</h3>
          <h5>{book.authors}</h5> */}
          {/* <h5>{authors}</h5>
          <p>{book.year}</p>
          <p className="card-text">{book.description}</p>
           <div className="container">
            <div className="row">
               <div className="d-flex align-items-center">
                <FontAwesomeIcon icon={book.haveRead ? faBookmark : faBookmark } style={{color: book.haveRead ? "#0096ff" : '#d5d5d5'}} />   
                <h5><Badge pill bg="light" text="dark" className="statusButton" onClick={() => {toggleStatus(book.id)}}  > {book.haveRead ? 'Have read it' : 'Want to read it'}
                </Badge> </h5>
               </div>
              <div className="d-flex align-items-center">
                <FontAwesomeIcon icon = {book.favorite? faHeart  : faHeartCrack} style={{ color: book.favorite ? '#ff89d8' : '#d5d5d5' }} />
                <h5><Badge pill bg="light" text="dark" className="statusButton" onClick={() => {favoriteStatus(book.id)}} > {book.favorite ? 'Favorite' : 'Unfavorite'}
                </Badge> </h5>
              </div>
            </div>
          </div>
            <div className="w-100"></div>
            <div className="card-footer w-100 text-muted"><Link to={`/${book.id}`}>more info</Link></div>
        </div>
      </div>
    </div>
    </div> */}
    </div>
    </div>
    
)}

BookCard.propTypes = {
  book: PropTypes.shape({
      title: PropTypes.string.isRequired,
      authors: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]).isRequired, 
      year:  PropTypes.string.isRequired,
      description:  PropTypes.string.isRequired,
      coverImage:  PropTypes.string.isRequired,
      haveRead:  PropTypes.bool.isRequired,
      id: PropTypes.string.isRequired,
  }),
  toggleStatus: PropTypes.func.isRequired,
  favoriteStatus: PropTypes.func.isRequired
}