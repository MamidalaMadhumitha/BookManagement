import { useParams } from "react-router-dom"
import { Books } from "../Utils/mockdata";
import { Link } from "react-router-dom";
import "./style.css";


function BookDetails(){

    const params = useParams ();
    const book = Books.find((book)=>book.id == params.id)
    return(
        <>
            <Link to="/"> Back to Home</Link>
            <h1 className="details-heading">{` Book details with Id ${params.id}`}</h1>
            <br />
           <div className="bookDetailsData">
           <div className="bookdetails">
                <img className="image" src={book.Image} width="350px" height="270px" />
                <h2 className="title">{book.title}</h2>
                <h3 className="author">{book.author}</h3>
                <h3 className="rating">{book.rating}</h3>
                <h3 className="description">{book.description}</h3>
            </div>
           </div>
        </>       
    )
}
export default BookDetails;