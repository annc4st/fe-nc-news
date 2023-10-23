import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleArticle, getArticleComments, formatCommentDate } from "./utils";

const SingleArticlePage = () => {
  const { article_id } = useParams();
  console.log("lskdfj", article_id);
  const [comments, setComments] = useState([]);
  const [singleArticle, setSingleArticle] = useState({});

  useEffect(() => {
    getSingleArticle(article_id)
      .then((article) => {
        setSingleArticle(article);
      })
      .catch((error) => {
        console.log("error", error);
      });
    getArticleComments(article_id)
      .then((comments) => {
        console.log("cometns", comments);
        setComments(comments);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, [article_id]);

  return (
    <section className="single-article">
      <div className="single-article-title">
        <h2>{singleArticle.title}</h2>
      </div>

      <p>votes: {singleArticle.votes}</p>
      <div className="single-article-img">
        <img src={singleArticle.article_img_url} alt="picture of" />
      </div>

      <div className="single-article-content">
        <p> By {singleArticle.author}</p>
        <p>topic {singleArticle.topic}</p>
        <div className="article-body">{singleArticle.body}</div>
      </div>
      {/* comments */}

      <div className="comments-section">
        <h3>Comments</h3>

        {comments.map((comment) => (
          <div className="comment-div" key={comment.comment_id}>
            <p>{comment.author}</p>
            <p>{comment.body}</p>
            <p>published: {formatCommentDate(comment.created_at)}</p>
            <p>votes: {comment.votes}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SingleArticlePage;
