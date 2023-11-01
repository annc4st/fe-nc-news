import React, {useState, useContext } from "react";
import { postArticleComment } from "./api";
import {UserContext} from './contexts/UserContext';
import {Link} from "react-router-dom";

export const PostComment = ({ article_id}) => {
  const [postedComment, setPostedComment] = useState(''); //post commetn to backend
  const [text, setText] = useState(''); // to change state inside form > textarea
  const { user, setUser } = useContext(UserContext);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [comments, setComments] = useState([]);


  const handlePostComment = (e) => {
    e.preventDefault();
    if (user && text.trim() !== "") {
        setIsSubmitting(true); // Start submitting
        postArticleComment({body: text, username: user.username}, article_id)
        .then((newComment) => {
            setComments((prevComments) => [...prevComments, newComment]);

          setPostedComment(newComment);
          setText('');  
          setIsSubmitting(false);
        })
        .catch((error) => {
          console.log("Error :", error);
          setIsSubmitting(false);
        });
    }
  };

  return (
    <div className="post-comment">
      <h3>Post a Comment</h3>
      <form onSubmit={(e) => handlePostComment(e)}>
        <label htmlFor="post-comment-text">Your comment goes here:</label>
        <textarea
          id="post-comment-text"
          type="text"
          rows="5"
          required
          value={text}
          placeholder="Start typing your comment..."
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <button  type="submit" 
            disabled={!user || isSubmitting}
         >  
        {isSubmitting ? 'Submitting...' : user ? 'Post Comment' : 'Login to Comment'}
        </button> 
        {(!user) && (
        <p>
          Please log in to post a comment <Link to="/users">Users</Link>
        </p> 
      )}
      </form>
    </div>
  );
};
