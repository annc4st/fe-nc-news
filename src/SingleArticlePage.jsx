import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleArticle, getArticleComments, formatCommentDate, updateVotes} from "./api";

import { Voter } from "./Voter";
import Picker from 'emoji-picker-react';
import './SingleArticle.css'

const SingleArticlePage = () => {
  const { article_id } = useParams();
  const [comments, setComments] = useState([]);
  const [singleArticle, setSingleArticle] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getSingleArticle(article_id)
      .then((article) => {
        setIsLoading(false)
        setSingleArticle(article);
      })
      .catch((error) => {
      });
    getArticleComments(article_id)
      .then((comments) => {
        setComments(comments);
      })
      .catch((error) => {
      });
  }, [article_id]);

  if (isLoading) return <p className="loading-p">loading...</p>

  return (
    <section className="single-article">
      {singleArticle ? ( 
        <>
      
        <h2>{singleArticle.title}</h2>
   
      <Voter votes = {singleArticle.votes}  article_id = {singleArticle.article_id}
      setSingleArticle={setSingleArticle}/>

        <img src={singleArticle.article_img_url} alt="picture of" />


      <div className="single-article-content">
        <p> By {singleArticle.author}</p>
        <p>topic {singleArticle.topic}</p>
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
            <p>{comment.author}</p>
            <p>{comment.body}</p>
            <p>published: {formatCommentDate(comment.created_at)}</p>
            <p>votes: {comment.votes}</p>
          </div>
        ))}
      </div>

      <div className="post-comment">
        <h3>Post a Comment</h3>
        <form>
        <label htmlFor="post-comment-text">Your comment goes here:</label>
        <textarea id="post-comment-text" type="text" rows="5"></textarea>
        <button disabled type="submit">Post Comment</button>

        </form>
        
      </div>
    </section>
  );
};

export default SingleArticlePage;
