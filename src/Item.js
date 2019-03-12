import React, {Component} from 'react';

export default class Item extends Component{

  // Constructor
  constructor (props) {
    super(props);
    this.state = {
      price : 25
    };
  }

  // Premiere etape du lifecycle
  componentWillMount () {
    console.log(this);
  }

  // troisieme etape du lifecycle
  componentDidMount () {
    //this.setState({price : 35});
  }

  // Quatrieme etape du lifecycle
  componentWillUpdate () {
    console.log('mon component va s\'update');
  }

  customUpdate () {
    this.setState({price : 35}); 
  }

  // Deuxieme etape du lifecycle
  // Cinquième etape du lifecycle
  render () {
    return (
      <div>
        {this.props.name} : {this.state.price} euros

        <button onClick={() => {this.customUpdate}}>
          Hello
        </button>
      </div>
    )
  }
}















