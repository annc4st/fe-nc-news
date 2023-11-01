import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import {
  getSingleArticle,
  getArticleComments,
  formatCommentDate,
  deleteComment,
  updateVotes,
} from "./api";
import { UserContext } from "./contexts/UserContext";
import { Voter } from "./Voter";
import { PostComment } from "./PostComment";
import "./SingleArticle.css";

const SingleArticlePage = () => {
  const { article_id } = useParams();
  const [comments, setComments] = useState([]);
  const [singleArticle, setSingleArticle] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { user, setUser } = useContext(UserContext);
  const [isDeleting, setIsDeleting] = useState(false);
  const [deletingCommentId, setDeletingCommentId] = useState(null);

  const handleDelComment = (comment_id) => {
    if (user) {
      setIsDeleting(true);

      // Optimistically remove the comment from the list
      setComments((prevComments) => {
        return prevComments.filter((comment) => comment.comment_id !== comment_id);
      });

      deleteComment(comment_id)
        .then(() => {
          setIsDeleting(false);
          setDeletingCommentId(null);
        })
        .catch((error) => {
          setComments((prevComments) => [...prevComments]);
          setIsDeleting(false);
          setDeletingCommentId(null);
        });
    }
  };

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

  if (isLoading) return <div className="loading-p">loading...</div>;
  if (isDeleting)
    return <div className="deleting-cmt"> Your comment is being deleted </div>;
  return (
    <section className="single-article">
      {singleArticle ? (
        <>
          <h2>{singleArticle.title}</h2>
          <p
            className={`topic-label 
          ${
            singleArticle.topic === "cooking"
              ? "topic-label__cooking"
              : singleArticle.topic === "football"
              ? "topic-label__football"
              : singleArticle.topic === "coding"
              ? "topic-label__coding"
              : ""
          }`}
          >
            {singleArticle.topic}
          </p>

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

      {/* comments section*/}
      <div className="comments-section">
        <h3>Comments</h3>

        {comments.map((comment) => (
          <div className="single-comment" key={comment.comment_id}>
            <p>
              {comment.author} posted on {formatCommentDate(comment.created_at)}
            </p>
            <p>{comment.comment_id}</p>
            <p>{comment.body}</p>
            <p></p>
            <p>votes: {comment.votes}</p>

            {/* only comment author can delete the comment */}
            {user && user.username === comment.author && (
              <div>
                {deletingCommentId === comment.comment_id ? (
                  <p className="delete-cmnt">Deleting comment...</p>
                ) : (
                  <button
                    className="delete-comnt-btn"
                    onClick={() => handleDelComment(comment.comment_id)}
                    disabled={deletingCommentId === comment.comment_id}
                  >
                    {isDeleting ? "Deleting comment" : " Delete this comment"}
                  </button>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      <PostComment
        article_id={singleArticle.article_id}
        setComments={setComments}
      />
    </section>
  );
};

export default SingleArticlePage;
