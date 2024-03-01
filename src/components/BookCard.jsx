import { useState } from "react"

export default function BookCard({ book, togglestatus }) {

    // change ReadStatus - Represent the state in memory with useState
    const [haveRead, setHaveReadIcon] = useState(book.haveRead)
    
    const btnHaveRead  = () => {
    setHaveReadIcon(!haveRead);
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
                <div>
                    <i className={`bi ${haveRead ? "bi-bookmark-check" : "bi-bookmark"}`}></i>  
                    <button className="statusButton" onClick={btnHaveRead} > {haveRead ? 'Have read it' : "Want to read it"} </button>
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


    //Original
    // <div className="card mb-3" style={{maxWidth: '540px'}}>
    // <div className="row g-0" >
    //     <div className="col-md-4">
    //       <img src={book.coverImage} className="img-fluid rounded-start" alt={book.title} />
    //     </div>
    //     <div className="col-md-8">
    //         <div className="card-body">
    //             <h5 className="card-title">{book.title}</h5>
    //             <h5>{book.authors}</h5>
    //             <p className="card-text">{book.description}</p>
    //             <div>
    //                  <i className={`bi ${haveRead ? "bi-bookmark-check" : "bi-bookmark"}`}></i>  
    //                  <button className="statusButton" onClick={btnHaveRead} >
    //                 {haveRead ? 'Have read it' : "Want to read it"} </button>
    //             </div>
    //             <p className="card-text"><small className="text-body-secondary">{book.year}</small></p>
    //         </div>
    //     </div>
    // </div>
    // </div>

