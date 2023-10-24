import React from 'react';
import {useState, useEffect} from 'react';
import Picker from 'emoji-picker-react';


export const Voter = ({votes, update }) => {
    const [userVotes, setUserVotes] = useState(0)
    const [isError, setError] = useEffect(false);

    const updateVotes = (value) => {
        setUserVotes((currentVotes) => {
            return currentVotes + value;
        });
        update(value)
        .catch(() => {
            setError(true)
        })
    };




    return (
        <>
        <p>Votes: {votes}</p>
        <button 
            aria-label = "like"
            onClick={() => {
                updateVotes(1)
            }}
        >Great</button>
        <button 
            aria-label = "dislike"
            onClick={() => {
                updateVotes(-1)
            }}
            >Bad</button>
        </>
    )

}