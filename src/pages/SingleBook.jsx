import { Link, useParams } from 'react-router-dom'
import BookCard from '../components/BookCard.jsx'

const SingleBook = ({books}) => { 
    const { bookId } = useParams()
    const book = books.find(book => book.id === bookId)
    return (
        <div>
            <h1>BOOK ID :{bookId}</h1>
            <p>{book.lendingIdentifer}</p>
            
            <Link to='/art'>Back to ArtBooks</Link>
        </div>
    );
};

export default SingleBook;
