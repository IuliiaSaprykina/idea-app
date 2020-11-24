import React from 'react'

export default function IdeaList({idea, addVote}) {

    const handleClick = (event) => {
        // console.log(idea)
        addVote(idea)
    }

    return(
        <div className="idea-item">
            <h2>{idea.name}</h2>
            <h3>{idea.votes}</h3>
            <button className="vote" onClick={handleClick}>+</button>
        </div>
    )
}