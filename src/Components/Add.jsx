import { Link } from "react-router-dom";
import "./Header.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../Utils/cartSlice";


function AddBook(){
   
  const dispatch = useDispatch()

    const[addid,setAddId] = useState([]);
    const[addtitle,setAddTitle] = useState([]);
    const[addauthor,setAddAuthor] = useState([]); 
    const[addrating,setAddRating] = useState([]); 
    const[addescription,setAddDescription] = useState([]); 
    const[errors,setErrors] = useState({});



    const handleSubmit = (event) =>{
        event.preventDefault();
        addNewBook(addid,addtitle,addauthor,addrating,addescription);
        
        const errors = valadiationform();
        if(Objects.keys(errors).length === 0){
            console.log('Form submitted successfully!');
        }
        else{
            setErrors(errors);
        }
             
    };

    function addNewBook(addid,addtitle,addauthor,addrating,addescription){
        const details = {id:addid,title:addtitle,description:addescription,rating:addrating,author:addauthor}
        dispatch(addBook(details));
        setAddId("");
        setAddAuthor("")
        setAddRating('')
        setAddDescription('')
        setAddTitle('');
    }

    return(
        
        <>
        <Link to="/" className="link"> Back to Home</Link>
        <div className="Form-page">
        <div >
        <h1 className="h1">Add books to the library</h1>
        
        <div className="Form" >
            <form className="Formlist" onSubmit={handleSubmit}>
                <label >
                <input type="number" placeholder="Id" className="Id" required max="100" minLength="0"
                  size="2" id="id" value={addid} onChange={(e) => setAddId(e.target.value)}
                  {...errors.addid && <div style={{ color: 'red' }}>{errors.addid}</div>} />
                </label> 
                <label>
                <input type="text" placeholder="title" className="Title" required maxLength="25"
                    onChange={(e) =>setAddTitle(e.target.value)} value={addtitle}
                  {...errors.addtitle && <div style={{ color: 'red' }}>{errors.addtitle}</div>}/>
                </label>
                <label>
                <input type="text" placeholder="author" className="Author" required maxLength="20"
                 onChange={(e) =>setAddAuthor(e.target.value)}  value={addauthor}
                 {...errors.addauthor && <div style={{ color: 'red' }}>{errors.addauthor}</div>}/> 
                </label>
                <label>
                <input type="number" max="5" min="0" placeholder="Rating" className="Rating"  required            
                 onChange={(e) =>setAddRating(e.target.value)}  value={addrating}
                 {...errors.addrating && <div style={{ color: 'red' }}>{errors.addrating}</div>}/>
                </label>
                <label>
                <input type="text" placeholder="Description" className="Description" required  maxLength="100"
                 onChange={(e) =>setAddDescription(e.target.value)} value={addescription}
                 {...errors.setAddDescription && <div style={{ color: 'red' }}>{errors.setAddDescription}</div>}/>
                </label>   
               <button type="submit" className="button" >Add</button>
            </form>
        </div>
        </div>           
        </div>  
        </>
        
    );
};
const valadiationform=()=>{
    const errors = {};
    if(addid.trim() === ''){
        errors.addid = 'Id id required';
    }
    if(addtitle.trim() === ''){
        errors.addtitle = 'Title id required';
    }
    if(addauthor.trim() === ''){
        errors.addauthor= 'Title id Author';
    }
    if(addrating.trim() === ''){
        errors.addrating = 'Title id Rating';
    }
    if(addescription.trim() === ''){
        errors.addescription = 'Title id Description';
    }


    return errors;
};
export default AddBook;