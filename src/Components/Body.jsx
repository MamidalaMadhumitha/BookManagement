import { useState } from 'react';

import Booklist from './Booklist';
import './Header.css';
import { Books } from '../Utils/mockdata';


function Body() {

    const [filteredBooks] = useState(Books);


    return (
        <>
            <div className='list'>
                <div className='list1'>
                    <li>Fairy Tale</li>
                    <li>Fantasy</li>
                </div>
                <div className='list2'>
                    <li>Fiction</li>
                    <li>Humor</li>
                </div>

            </div>
            <Booklist BooksData={filteredBooks} />

        </>
    );
}
export default Body;