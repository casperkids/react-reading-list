export default function ApiBookCard ({ book }){
  return(
    <div style={{maxWidth: '540px'}} className="card mb-3">
    <div className="row g-0">
      <div className="col-md-4">
        <img src={`https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`} className="img-fluid rounded-start" alt="${book.cover_id}" ></img>
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title">{book.title}</h5>
          <h5>{book.authors[0].name}</h5>
       
          <div>
          
            {/* <p> ${book.availability.available_to_borrow? 'You can borrow it' : "You cannot borrow it"} </p> */}
          </div>
          <p className="card-text"><small className="text-body-secondary">{book.first_publish_year}</small></p>
        </div>
      </div>
      </div>
    </div>
  )
  }