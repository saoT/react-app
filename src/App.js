import React, {Component} from 'react';
import $ from 'jquery';

import Item from './Item';

const myVar = 'chaussure';


// Je defini mon nouveau component
export default class App extends Component {
  // Dans la classe je peux decrire les methodes de mon lifecycle

  // AVANT que mon component s'affiche je vais lancer la requete
  componentWillMount () {
    $.get('http://localhost:4000/students', function (response) {
      
    });
  }

  // PERMET de mettre à jour mon HTML
  render () {
    return (
      <div>
        Hello world !
        <Item name={myVar}></Item>
      </div>
    )
  }
}
















