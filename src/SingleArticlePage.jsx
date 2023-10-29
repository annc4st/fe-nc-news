import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import {
  getSingleArticle,
  getArticleComments,
  formatCommentDate, deleteComment,
} from "./api";
import {UserContext} from './contexts/UserContext';
import { Voter } from "./Voter";
import { PostComment } from "./PostComment";
import Picker from "emoji-picker-react";
import "./SingleArticle.css";


const SingleArticlePage = () => {
  const { article_id } = useParams();
  const [comments, setComments] = useState([]);
  const [singleArticle, setSingleArticle] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const {comment_id} = useParams();
  const [isDeleting, setIsDeleting] = useState(false);
  const { user, setUser } = useContext(UserContext);
 


  useEffect(() => {
    setIsLoading(true);
    getSingleArticle(article_id)
      .then((article) => {
        setIsLoading(false);
        setSingleArticle(article);
      })
      .catch((error) => {});
    getArticleComments(article_id)
      .then((comments) => {
        setComments(comments);
      })
      .catch((error) => {});
  }, [article_id]);

  // handle comment delete

  const handleDelComment = (comment_id) => {
     
    if (user) {
      setIsDeleting(true);// Start deleting
      console.log("comment_id", comment_id)
      deleteComment(article_id, comment_id)
     
      .then((comments) => {
        setComments(comments); // return comments without deleted
        setIsDeleting(false);
      })
      .catch((error) => {
        console.log("Error :", error);
      });
    }
  }

  if (isLoading) return <p className="loading-p">loading...</p>;


  return (
    <section className="single-article">
      {singleArticle ? (
        <>
          <h2>{singleArticle.title}</h2>
          <p className=
          {`topic-label 
          ${singleArticle.topic === "cooking" ? "topic-label__cooking": singleArticle.topic === "football" ? "topic-label__football" 
          : singleArticle.topic === "coding" ? "topic-label__coding" : ''}`}

          >{singleArticle.topic}</p>
      
         

          <img src={singleArticle.article_img_url} alt="picture of" />
          <div className="voter-article">
          <Voter
            votes={singleArticle.votes}
            article_id={singleArticle.article_id}
            setSingleArticle={setSingleArticle}
          />
            </div>

          <div className="single-article-content">
            <p> By {singleArticle.author}</p>
            <div className="article-body">{singleArticle.body}</div>
          </div>
        </>
      ) : (
        <p> Loading ... </p>
      )}

      {/* comments */}

    
      <div className="comments-section">
        <h3>Comments</h3>

        {comments.map((comment) => (
          <div className="single-comment" key={comment.comment_id}>
            <p>{comment.author} wrote on {formatCommentDate(comment.created_at)}</p>
            <p>{comment.body}</p>
            <p></p>
            <p>votes: {comment.votes}</p>
            {/* only comment author can delete the comment */}
            {user && user.username === comment.author && (
            <button className="delete-comnt-btn" 
            onClick={() => {handleDelComment(comment.comment_id)}}>
              Delete this comment
              </button>
            )}
            {isDeleting && isDeleting.commentId === comment.comment_id && (
              <p className="delete-cmnt">Your comment has been deleted </p>
            )}

            
          </div>
        ))}
      </div>

     <PostComment 
     article_id={singleArticle.article_id} 
     setComments={setComments}/>
    </section>
  );
};

export default SingleArticlePage;
