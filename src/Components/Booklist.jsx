import { Link } from "react-router-dom";
import Book from "./Book";
import "./style.css";

function Booklist(props){

    return (  
        <>
            <div className="booklist">
                {
                    props.BooksData.map((book) => (
                       <div key={book.id} >
                         <Link to={`/book/${book.id}`} key={book.id}>
                            < Book key={book.id} bookDetails={book}> </Book>
                         </Link>
                       </div>
                    ))
                }
            </div>
        </>                  
    );
}
export default Booklist;