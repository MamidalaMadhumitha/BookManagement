
import { Books } from "../Utils/mockdata";
import { useState } from "react";
import "./Header.css";
import Booklist from "./Booklist";
import { Link } from "react-router-dom";



function BrowseBooks(){
    const [searchText, setsearchText] = useState("");
    const [filteredBooks, setfilteredBooks] = useState(Books);


    function handleSearch() {
        const filterBooks = Books.filter(
            (Book) => Book.title.toLowerCase().includes(searchText.toLowerCase()));
        console.log("filter Books", filterBooks);
        setfilteredBooks(filterBooks);

    }

    return (
        <>
            <Link to="/" className="link"> Back to Home</Link>
            <h1 className="heading">Search Books</h1>
            <div className='input'>
                <input type='text' placeholder='Search Books' className='Search-input'
                    onChange={(e) => setsearchText(e.target.value)} />
                <button className='search' onClick={handleSearch}>Search</button>
            </div>
            <Booklist BooksData={filteredBooks} />

        </>

    )
}
export default BrowseBooks;