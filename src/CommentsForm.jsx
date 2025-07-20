import { useState } from "react"
import "./CommentsForm.css";
import { useFormik } from 'formik';

export default function CommentsForm({addNewComment}){

    let [formData, setFormData] = useState({
        username:"",
        remarks:"",
        rating:5,
    })
    let handleInputChange = (event) =>{
        setFormData((currData) =>{
            return {...currData, [event.target.name]: event.target.value};
        });
    }
    let handleSubmit = (event) =>{
        console.log(formData);
        addNewComment(formData);
        event.preventDefault();
        setFormData({
            username:"",
            remarks:"",
            rating:5
        });
    }
    
    return(
        <div className="feedContainer" >
            <h2> Give your review of Saiyaara movie here!! </h2>
            <form action="" onSubmit={handleSubmit} className="CommentsForm">

                <label htmlFor="Username" style={{fontSize:"20px"}}> Username: </label>&nbsp;&nbsp;
                <input type="text" 
                    placeholder="username"
                    name="username" 
                    value={formData.username}
                    onChange={handleInputChange}
                />
                <br /><br />

                <label htmlFor="Remarks" style={{fontSize:"20px"}}> Remarks: </label>&nbsp;&nbsp;&nbsp;
                <textarea id="remark" 
                    name="remarks" 
                    value={formData.remarks} 
                    onChange={handleInputChange}> 
                </textarea>
                <br /><br />

                <label htmlFor="Rating" style={{fontSize:"20px"}}> Rating: </label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="number"
                   placeholder="rating" 
                   min={1} 
                   max={10}
                   name="rating"
                   value={formData.rating} 
                   onChange={handleInputChange}
                />
                <br /><br />

                <button> Add comment </button>
            </form>
        </div>
    )
}