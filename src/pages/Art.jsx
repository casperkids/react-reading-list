import { Link, Outlet } from 'react-router-dom'
import BookCard from '../components/BookCard.jsx'

const Art = ({ artBooks, toggleStatus, favoriteStatus }) => { 
    
    console.log(toggleStatus, favoriteStatus)
    return (
        <>
            <div>
                <Link to='art' className='btn'>
                    art
                </Link>
                <Link to='/' className='btn'>
                    Home
                </Link>
                <h1>ART BOOKS</h1>
            <div className="collection-list" >
                {artBooks.map(book => (<BookCard toggleStatus={toggleStatus} favoriteStatus={favoriteStatus} key={`${book.id.toString()}-${book.title}`} book={book}/>
            ))}
            </div>
        </div> 
        <Outlet />
        </>
    );
};

export default Art;
