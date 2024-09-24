import "./style.css";

function Book(props){
    return(
        <>
            <div className="book-card">
                <img src={props.bookDetails.Image} alt=""
                    width="280px" height="250px" 
                    className="book-img"/>
                <div>
                    <h2 className="book-title">{props.bookDetails.title}</h2>
                    <h3 className="book-author">{props.bookDetails.author}</h3>
                    <p className="book-rating">{props.bookDetails.rating}</p>
                   
                </div>

            </div>
       
        </>
    );
}
export default Book;