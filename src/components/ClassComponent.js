import React from "react";


class ClassComponent extends React.Component {
    state = {
        value : 0
    }
  

  HandlePlus = () => {
    this.setState({value : this.state.value + 1});
  }

  HandleMinus = () => {
    if (this.state.value > 1) {
        this.setState({value: this.state.value - 1});
    }
  }

  render() {
    return (
      <div>
        <h1>Komponen ini dibuat dengan Class Component</h1>
        <h2>Hallo, {this.props.nama}</h2>
        <button onClick={this.HandleMinus} >-</button>
        <h1>{this.state.value}</h1>
        <button onClick={this.HandlePlus} >+</button>
      </div>
    )
  }
}

export default ClassComponent;