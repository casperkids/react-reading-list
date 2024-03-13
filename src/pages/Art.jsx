import { Link, Outlet } from 'react-router-dom'
import BookCard from '../components/BookCard.jsx'

const Art = ({ artBooks, toggleStatus, favoriteStatus }) => { 
    
    return (
        <div>
            <div className="collection-list" >
                {artBooks.map(book => (<BookCard toggleStatus={toggleStatus} favoriteStatus={favoriteStatus} key={`${book.id.toString()}-${book.title}`} book={book}/>
            ))}
            </div>
        </div> 
        

    );
};

export default Art;
