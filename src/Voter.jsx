import React, {useState} from 'react';
import { updateVotes } from './api';


export const Voter = ({article_id, votes, setSingleArticle}) => {
    const [votesDiff, setVotesDiff] = useState(0)
    const [error, setError] = useState(null);

    const handleVote  = (value) => {
        setSingleArticle((currentArticle) => {
           const clonedArticle = {...currentArticle}
           clonedArticle.votes += value
            return clonedArticle
        })
        setVotesDiff((currentVotes) => {
            return currentVotes + value;
        });
        // Clear any previous errors
        setError(null);
     
        //API request to update votes
        updateVotes(article_id, value)
        .then(() => {

        })
    
          .catch((error) => {
            console.error("Error updating votes:", error);
            setError("Error updating votes. Please try again later.")
          });
      };


    return (
        <>
        <p>🧡 {votes}</p>
        {error && <p className="error">{error}</p>}
        <button className='voting-positive'
        disabled={votesDiff=== 1}
            aria-label = "like"
            onClick={() => {
                handleVote(1);
            }}
        >Great </button>
     
        <button className='voting-negative' 
        disabled={votesDiff === -1}
            aria-label = "dislike"
            onClick={() => {
                handleVote(-1)
            }}
            >Not Great</button>
        </>
    )

}