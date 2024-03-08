import { Link } from 'react-router-dom'
import BookCard from '../components/BookCard.jsx'

const Art = ({ artBooks, toggleStatus, favoriteStatus }) => {
    console.log(artBooks);
 
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
                {artBooks.map(book => (<BookCard key={String(book.id)} book={book} toggleStatus={toggleStatus} favoriteStatus={favoriteStatus} />
            ))}
            </div>
        </div> 
        </>
    );
};

export default Art;
