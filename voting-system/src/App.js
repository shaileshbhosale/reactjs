import React from 'react';
import cms from './assets/cms.json';
import './App.css';

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			cms: cms,
		};
	}

	vote = i => {
    this.setState(state => {
      const cms = state.cms.map((item, j) => {
        if (j === i) {
          return (
          	{ name: item.name, votes: item.votes++ }
          )
        } else {
          return item;
        }
      });
      return {
        cms,
      };
    });	
	}

	render() {
	  return (
	  	<div className="voting">
		  	<h1>Vote for your favourite CMS</h1>
		    <div className="cmsList">
		      {
		      	this.state.cms.map((item, index) =>
		      		<div key={index} className="cms">
		      			<div key={item.name} className="cmsName">
		      				{item.name}
		      			</div>
		      			<div key={item.votes} className="cmsVotes">
		      				{item.votes}
		      			</div>
		      			<div className="click">
		      				<button onClick={ () => this.vote(index)}>Click to vote</button>
		      			</div>
		      		</div>
		      	)
		      }
		    </div>
	    </div>
	  );
	}
}

export default App;
