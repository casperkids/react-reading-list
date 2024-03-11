import { Link, useParams } from 'react-router-dom'
import BookCard from '../components/BookCard.jsx'

const SingleBook = ({ artBooks }) => { 
    const { bookId } = useParams()
    const book = artBooks.find(book => book.id === bookId)
    return (
        <div>
            <h1>{book.title}</h1>
            <Link to='/art'>Back to ArtBooks</Link>
        </div>
    );
};

export default SingleBook;
