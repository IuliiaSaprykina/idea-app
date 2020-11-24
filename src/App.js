import React, { Component } from 'react'
import IdeaList from './components/IdeaList'


class App extends Component {

  state = {
    ideas: [{ name: "ModernOffice", votes: 0 }, { name: "Offsite", votes: 0 }]
  }

  addVote = (idea) => {
    let vote = idea.votes += 1;
    const newIdea = {
      name: idea.name,
      votes: vote
    }
    this.setState({
      ideas: [...this.state.ideas, newIdea]
    })
  }

  render(){
    return (
      <div className="App">
        <IdeaList ideas={this.state.ideas} addVote={this.addVote}/>
        
      </div>
    );
  }
  
}

export default App;
