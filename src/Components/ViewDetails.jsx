import "./Header.css";
import { useState } from "react";
import { Books } from "../Utils/mockdata";
import "./style.css";
import Book from "./Book";
import { Link } from "react-router-dom";


function ViewDetails() {

   const [topRated, setToprated] = useState([]);


   function filterTopRatedBooks() {
      const topRatedBooks = Books.filter((book) => book.rating > 4);

      setToprated(topRatedBooks);
   }
   return (
      <>
         <div className="view-details">
            <h2 className="h2">List of popular Books</h2>
            <div className="filter" >
               <button className="btn" onClick={filterTopRatedBooks} >TopRated Books</button>
            </div>
            <div className="displayTopBooks" >
               {topRated.map((book) => {
                return (
                  <div key={book.id} className="topBooks" >
                       <Link to={`/book/${book.id}`} key={book.id}>
                          < Book key={book.id} bookDetails={book}> </Book>
                        </Link>
                  </div>
                )
               })}
            </div>
         </div>
      </>
   )
}
export default ViewDetails;