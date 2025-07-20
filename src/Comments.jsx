import { useState } from "react"
import "./comments.css";
import CommentsForm from "./CommentsForm.jsx";

export default function Comments(){
    let [comments, setComments] = useState([
        {
          username:"@vaishu",
          remarks:"nice movie!",
          rating:4
        }
    ])

    let addNewComment = (comment) => {
         setComments(( currComments ) => [...currComments, comment]);
         console.log("added new comment");
    }
    return(
        <div className="commContainer">
            <div className="secComm">
                <CommentsForm addNewComment= {addNewComment} />
           
            <h3> All comments! </h3>
            {comments.map((comment, idx) =>(
                <div className="comments" key={idx}>
                  <span> {comment.remarks} </span>
                  <br />
                  <span>( Rating= {comment.rating} ) </span>
                  &nbsp;
                  <p>- {comment.username} </p>
               </div>
   
            ))}
            </div>
        </div>
    );
}