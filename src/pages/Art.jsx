import BookCard from '../components/BookCard.jsx'

const Art = ({  artBooks,  toggleStatus, favoriteStatus}) => {
    console.log(artBooks)
  return (
    <>
        <div>
        <div className="collection-list">
            <h3 className="text-center" style={{ paddingBottom: '60px' }}>ART BOOKS ALL</h3> 
            { artBooks.map(work => <BookCard book={work} toggleStatus={toggleStatus} favoriteStatus={favoriteStatus} key={work.id} />
         )} 
        </div>

             
        </div>
        
        
    </>
  );
};
export default Art;