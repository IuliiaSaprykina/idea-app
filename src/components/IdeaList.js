import React from 'react'
import IdeaItem from "./IdeaItem"

export default function IdeaList({ ideas, addVote }) {
    // console.log(ideas)
    const showIdeas = ideas.map((idea, i) => <IdeaItem key={i} idea={idea} addVote={addVote}/>)
    return(
        <div className="idea-list">
            <h1>Ideas List</h1>
            {showIdeas}
        </div>
    )
}