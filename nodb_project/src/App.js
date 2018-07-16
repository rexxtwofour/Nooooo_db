import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Kinghockeyheader from "./kinghockyheader/Kinghockeyheader";
import axios from "axios";
import Hockey from "./Hockey/Hockey";


//import hardcoded from "./nodb_project/server/controller/hardcoded"

class App extends Component {

  constructor () {
    super()
    this.state= {
      firstName:"",
      players: [],
      number:"",
      position: "",
      id: '',

    }

  }

  componentDidMount(){
    axios.get('/api/hockeycontroller').then( (players) => {
      this.setState({
        players: players.data
      })
    })
  }

  createPlayer =() => {  
     let player = {
      firstName: this.state.firstName,
      number: this.state.number,
      position: this.state.position,
    };
    console.log('createplayer', player)
    axios.post('/api/hockeycontroller', player).then( results => {
      console.log('axio create player', results)
      this.setState({players: results.data });
    })
  }   




getPlayer = () => {
  console.log('getPlayer')
  axios.get('/api/hockeycontroller').then(response => {
    console.log('getplayer response' ,response.data)
    this.setState({
      players: response.data
    })
  })
}




deletePlayer(id) {
  axios.delete(`/api/hockeycontroller/${ id }`).then( results =>{
    console.log('did player get kicked out', results.data)
     this.setState({players: results.data });
  })

}


changePlayer = () => {
  let player = {
    firstName: this.state.firstName,
    number: this.state.number,
    position: this.state.position,
  };

  let id = this.state.id

  axios.put(`/api/hockeycontroller/${ id }`, player).then( results => { 
    console.log('working or not',results.data)
    this.setState({players: results.data });
  })
}


//let comments = [];
handleChangeFirstName = (e) => {
  console.log(e.target.value)
  this.setState({ firstName: e.target.value})

}

handleChangePosition = (e) => {
  console.log(e.target.value)
  this.setState({ position: e.target.value})
}

handleChangeNumber = (e) => {
  console.log(e.target.value) 
  this.setState({ number: e. target.value})
}

handleChangeID = (e) => {
  console.log(e.target.value) 
  this.setState({ id: e. target.value})
}


render() {
  
  let displayedPlayers = this.state.players ? this.state.players.map((e, i) =>  {
  return (
    <div className="players-showing">
      <div className="players-showing-flex">
        <div key={e.id}>{e.id},{e.firstName}, {e.position}, {e.number}, {e.comments} </div>
        <button onClick={()=> this.deletePlayer(e.id)}>delete</button>
      </div>
    </div>
  )}
)  : null
  return (
      <div className="App">
        <header className="App-header">
       
          <h1 className="App-title">Los Angeles Kings Hockey</h1>
        
        <Hockey />
        
        </header>
        <Kinghockeyheader />
      



        <body className="App-body">




        <div className="dropdown">

          <button className="dropbtn">Select Player</button>
          <div className="dropdown-content">
            <a href="player1">player1</a>
            <a href="player2">player2</a>
            <a href="player3">player3</a>
            <a href="player4">player4</a>
            <a href="player5">player5</a>
            <a href="player6">player6</a>
            <a href="player6">player7</a>
            <a href="player6">player8</a>
            <a href="player6">player9</a>
            <a href="player6">player10</a>
            <a href="player6">player11</a>
            <a href="player6">player12</a>
            <a href="player6">player13</a>
            <a href="player6">player14</a>
            <a href="player6">player15</a>
            <a href="player6">player16</a>
            <a href="player6">player17</a>
            <a href="player6">player18</a>
            <a href="player6">player19</a>
            <a href="player6">player20</a>
          </div>
        </div>



      {/* <textarea className="commentBox" onChange={(e)=> this.changeHandler(e.target.value)} placeholder="Lineup Commnents">
      </textarea>
      <button onClick={()=>this.postComment()}> Post it!</button> */}
      <button onClick={()=> {this.getPlayer()}}> Get Players</button>
      <input onChange={this.handleChangeFirstName} placeholder="First Name" />
      <input onChange={this.handleChangePosition} placeholder="Position" />
      <input onChange={this.handleChangeNumber} placeholder="Number" />
      <button onClick={this.createPlayer}>create player</button>
      <button onClick={this.changePlayer}>change player</button>
      <input onChange={this.handleChangeID} placeholder="id number" />


 <div>{displayedPlayers} </div>

</body>
      



      
      
      
      {/* <Hockey /> */}
      </div>
);
}
}

export default App;
// bestPlayer={'leBron'} lastName={'James'} 