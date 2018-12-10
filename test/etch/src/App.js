import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      height: 500,
      width: 500,
      dimension: 10
    }

    this.renderSquares = this.renderSquares.bind(this);
    this.resetSquares = this.resetSquares.bind(this);
    this.redrawGrid = this.redrawGrid.bind(this);
    this.updateDimensions = this.updateDimensions.bind(this);
  }

  renderSquares() {
    let squares = [];
    let totalSquares = Math.pow(this.state.dimension, 2);
    for(let i = 0; i < totalSquares; i++) {
      squares.push(
        <div className="Square"
             id={i}
             key={'box-'+i}
             onMouseOver={this.colorSquare}
             style={{height: this.state.height/this.state.dimension, 
                     width: this.state.width/this.state.dimension}}
        >
        </div>
      );
    }
    return squares;
  }

  colorSquare(e) {
    e.target.classList.add('Colored');
  }

  resetSquares() {
    document.querySelectorAll('.Square').forEach(box => box.classList.remove('Colored'));
  }

  updateDimensions(e) {
    this.setState({dimension: e.target.value});
  }

  redrawGrid() {
    let boxes = document.querySelectorAll('.Square');
    // console.log(boxes[0].parentNode.removeChild(boxes[0]));
    while(boxes) {
      boxes[0].parentNode.removeChild(boxes[0]);
    }
  }

  render() {
    // let squares = this.renderSquares();
    return [
      <header>
        <h1>Etch-a-Sketch</h1>
        <button onClick={this.resetSquares}>Reset</button>
        <label htmlFor="grid-dimension">Set Dimension</label>
        <input type="number" id="grid-dimension" onChange={this.updateDimensions}/>
        <button onClick={this.redrawGrid}>Submit</button>
      </header>,
      <main className="Board">
        {this.renderSquares()}
      </main>
    ];
  }
}

export default App;
