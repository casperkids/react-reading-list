import { Link, Outlet } from 'react-router-dom'
import BookCard from '../components/BookCard.jsx'

const Art = ({ artBooks, toggleStatus, favoriteStatus }) => { 
    
    return (
        <div>
           <h1>Single Book</h1>
            <div className="collection-list" >
                {/* {artBooks.map(book => (<BookCard toggleStatus={toggleStatus} favoriteStatus={favoriteStatus} key={`${book.id.toString()}-${book.title}`} book={book}/>
            ))} */}
            {artBooks.map(book => {
                return<article key={book.id}>
                <h5>{book.title}</h5>
                <Link to={`/art/`+book.id}>more info</Link>
                </article>
            })}
            </div>
        </div> 
        

    );
};

export default Art;
