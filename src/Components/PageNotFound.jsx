import { Link } from "react-router-dom";
import "./style.css";

import { useRouteError } from "react-router-dom";

function PageNotFound(){
    const error = useRouteError();
    const{data , status,statusText }=error;
    return(
        <>
           <div className="notfound" >
           <Link to="/" className="Link"> Back to Home</Link>
            <h2> Page not found...please try it again</h2>
            <h2>{data}</h2>
            <h3>Status:{status}</h3>
            <h3>Error Message:{statusText}</h3>
           </div>

        </>
    )
}
export default PageNotFound;