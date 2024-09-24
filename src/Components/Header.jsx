import { Link } from 'react-router-dom';
import "./Header.css";
import { useSelector } from 'react-redux';


function Header() {

    const Books = useSelector((store) => store.cart.items);
    return (
        <>
            <div>
                <div className='nav-bar'>
                    <nav >
                        <ul>
                            <Link to="/" className='Home' > Home </Link>
                            <Link to="/Browse" className='BrowseBooks'>Browse</Link>
                            <Link to="/Add" className='AddBooks'> AddBooks</Link>
                            <Link to="/ViewDetails" className='ViewDetails'>View Details</Link>
                            <li className='cart'>{Books.length}    Books in Cart</li>
                        </ul>
                    </nav>
                </div>
                <div>
                    <h1 className="header">Welcome to Online Library</h1>
                </div>
            </div>
        </>
    );

}
export default Header;