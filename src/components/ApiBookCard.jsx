import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark, faHeart, faHeartCrack } from '@fortawesome/free-solid-svg-icons'; 
import Badge from "react-bootstrap/Badge"

export default function ApiBookCard({ book, toggleStatus, favoriteStatus }) {
return (
      <div style={{ maxWidth: '700px' }} className="container card mb-3">
      <div className="row g-0">
        <div className="col-md-4 d-flex align-items-center">
          <img src={`https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`} alt={book.id} style={{ maxWidth: '80%' }} />
        </div>

        <div className="col-md-8">
          <div className="card-body px-2">
            <h3 className="card-title">{book.title}</h3>
            <h5>{book.authors[0].name}</h5>
            <p>{book.first_publish_year}</p>
            <p className="card-text">{book.description}</p>

            
            

            <div className="container">
              <div className="row">
                <div className="d-flex align-items-center">
                    <FontAwesomeIcon icon={book.haveRead ? faBookmark : faBookmark } style={{color: book.haveRead ? "#0096ff" : '#d5d5d5'}} />   
                    <h5><Badge pill bg="light" text="dark" className="statusButton" onClick={() => {toggleStatus(book.key)}}  > {book.haveRead ? 'Have read it' : 'Want to read it'}
                    </Badge> </h5>
                </div>
                <div className="d-flex align-items-center">
                    <FontAwesomeIcon icon = {book.favorite? faHeart  : faHeartCrack} style={{ color: book.favorite ? '#ff89d8' : '#d5d5d5' }} />
                    <h5><Badge pill bg="light" text="dark" className="statusButton" onClick={() => {favoriteStatus(book.key)}} > {book.favorite ? 'Favorite' : 'Unfavorite'}
                    </Badge> </h5>
                </div>
              </div>
            </div>
          </div>
            <div className="w-100"></div>
            <div className="card-footer w-100 text-muted">{book.memo}</div>
          </div>
        </div>
      </div>
   
    );

  
  }


    



// // export default function ApiBookCard ({ book }){
// //   return(
// //     <div style={{maxWidth: '540px'}} className="card mb-3">
// //     <div className="row g-0">
// //       <div className="col-md-4">
// //         <img src={`https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`} className="img-fluid rounded-start" alt="${book.cover_id}" ></img>
// //       </div>
// //       <div className="col-md-8">
// //         <div className="card-body">
// //           <h5 className="card-title">{book.title}</h5>
// //           <h5>{book.authors[0].name}</h5>
       
// //           <div>
          
// //             {/* <p> ${book.availability.available_to_borrow? 'You can borrow it' : "You cannot borrow it"} </p> */}
// //           </div>
// //           <p className="card-text"><small className="text-body-secondary">{book.first_publish_year}</small></p>
// //         </div>
// //       </div>
// //       </div>
// //     </div>
// //   )
// //   }