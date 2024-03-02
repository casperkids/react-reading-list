import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark, faHeart, faHeartCrack } from '@fortawesome/free-solid-svg-icons'; 
import Badge from "react-bootstrap/Badge"

export default function BookCard({ book, togglestatus }) {

    // change ReadStatus - Represent the state in memory with useState
    const [haveRead, setHaveReadIcon] = useState(book.haveRead)
    
    const btnHaveRead  = () => {
    setHaveReadIcon(!haveRead);
    togglestatus(book.id)
    }
    // change FavoriteStatus
    const [favorite, setfavoriteIcon] = useState(book.favorite)
    
    const btnfavorite  = () => {
    setfavoriteIcon(!favorite)
    togglestatus(book.id)
    }

    return (
      <div style={{ maxWidth: '700px' }} className="container card mb-3">
      <div className="row g-0">
        <div className="col-md-4 d-flex align-items-center">
          <img src={book.coverImage} alt={book.title} style={{ maxWidth: '80%' }} />
        </div>

        <div className="col-md-8">
          <div className="card-body px-2">
            <h3 className="card-title">{book.title}</h3>
            <h5>{book.authors}</h5>
            <p>{book.year}</p>
            <p className="card-text">{book.description}</p>

            
            

            <div className="container">
              <div className="row">
                <div className="d-flex align-items-center">
                    <FontAwesomeIcon icon={haveRead ? faBookmark : faBookmark } style={{color: haveRead ? "#0096ff" : '#d5d5d5'}} />   
                    <h5><Badge pill bg="light" text="dark" className="statusButton" onClick={btnHaveRead} > {haveRead ? 'Have read it' : 'Want to read it'}
                    </Badge> </h5>
                </div>
                <div className="d-flex align-items-center">
                    <FontAwesomeIcon icon = {favorite? faHeart  : faHeartCrack} style={{ color: favorite ? '#ff89d8' : '#d5d5d5' }} />
                    <h5><Badge pill bg="light" text="dark" className="statusButton" onClick={btnfavorite} > {favorite ? 'Favorite' : 'Unfavorite'}
                    </Badge> </h5>
                </div>
              </div>
            </div>
            <div className="w-100"></div>
            <div className="card-footer w-100 text-muted">{book.memo}</div>
          </div>
        </div>
      </div>
    </div>
  );

  
}


    