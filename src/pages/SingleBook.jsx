import { Link, useParams } from 'react-router-dom'
import BookCard from '../components/BookCard.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark, faHeart, faHeartCrack } from '@fortawesome/free-solid-svg-icons'; 
import Badge from "react-bootstrap/Badge"


const SingleBook = ({books, toggleStatus, favoriteStatus}) => { 
    const { bookId } = useParams()
    const book = books.find(book => book.id === bookId)



    return (
        <div> 
        <div>
            <div style={{ maxWidth: '700px' }} className="container card mb-3">
                 <div className="row g-0">
                    <div className="col-md-4 d-flex align-items-center">
                        <img src={book.coverImage} alt={book.id} style={{ maxWidth: '80%' }} />
                    </div>
                <div className="col-md-8">
                    <div className="card-body px-2">
                         <h3 className="card-title">{book.title}</h3>
                         <h5>{book.authors}</h5>
                         <p>{book.year}</p>
                         <p className="card-text">{book.description}</p>
                         <p>lending Identifer :{book.lendingIdentifer}</p>
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
                <div className="card-footer w-100 text-muted">{bookId}</div>
                </div>
        </div>
        </div>
        </div>
        </div>             
        <div class="container">
        <div class="row">
             <div class="col"></div>
             <div class="col"></div>
            <div class="col"><button type="button" class="btn btn-light"><Link to='/'>Back to All Books</Link></button></div>
        </div>
    </div>
    </div>
    );
};

export default SingleBook;
