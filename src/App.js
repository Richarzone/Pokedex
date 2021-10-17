import React, { Component } from 'react';
import './App.css';
import {PokeList} from "./Components";
import StatScreen from "./Components/StatScreen";
import {Button} from "./Components";
import {PokeScreen} from './Components';

class App extends Component {
  state = {
    loading: true,
    pokemon: null,
    pokeImg: null,
    id: 1,
    value: 0
  };

  async componentDidMount(id) {
    if(id == null)
    {
      id = 1;
    }
    const url = "https://pokeapi.co/api/v2/pokemon/"+ id + "/";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ pokemon: data, pokeImg : data.sprites.front_default, loading: false, id: id});
    console.log(data.id)
    console.log(id);
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.pokemon) {
      return <div>didn't get a pokemon</div>;
    }

    return(
    <div>
      <div className="App">
        <div className="column">
          <div>
            <PokeScreen pokesprite={this.state.pokeImg}/>
          </div>
          <PokeList></PokeList>
        </div>
        <div className="column">
          <StatScreen pokename={this.state.pokemon.name} poketype={this.state.pokemon.types[0].type.name} pokeheight={this.state.pokemon.height} pokeweight={this.state.pokemon.weight}/>
          <div className="row">
            <button onClick={this.decrement}>
              <Button string={"-"}/>
            </button>
            <button onClick={this.increment}>
              <Button string={"+"}/>
            </button>
          </div>
          <div className="block">
            <input type="number" onChange={this.changeHandler} placeholder="Pokemon ID" id="form"/>
            <input type="button" value="button" onClick={this.submintHandler}/>
          </div>
        </div>
      </div>
    </div>
    );
  }

  increment = () =>{
    this.componentDidMount((this.state.id - 1) + 2);
  };

  decrement = () =>{
    this.componentDidMount(this.state.id - 1);
  };

  changeHandler = (e) =>{
    e.preventDefault();
    this.setState({value: e.target.value})
    console.log(this.state.value);
  };

  submintHandler = (e) =>{
    e.preventDefault();
    this.setState({value: e.target.value})
    console.log(this.state.value);

    if(!isNaN(this.state.value)){
      this.componentDidMount(this.state.value);
      this.setState({value: 0})
   }
   
   
  };
}

export default App;
