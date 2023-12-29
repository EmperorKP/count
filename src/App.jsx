import React from "react"
class Counter extends React.Component{

  state = {
    count : 0,
  }

  Inc = () => {
    this.setState( { count : this.state.count + 1} )
    
  }

  render() {

    let Dec = () => {
      if(this.state.count > 0){
        this.setState( { count : this.state.count - 1 } )
      }
    }

    let Reset = () => {
      this.setState( { count : 0 } )
    }
    return (
      <>
        <h1  style={{textAlign:"center"}}>Counter App</h1>
        <h1  style={{textAlign:"center"}} > {this.state.count} </h1>

        <div style={{display:"flex", justifyContent:"center", gap:20,quotesalignContent:"center",alignItems:"center"}}>
          <button onClick={ this.Inc } color={ this.state.color }>+</button>
          <button onClick={ Dec }>-</button>
          <button onClick={ Reset }>Reset</button>
        </div>
      </>
    )
  }
}

export default Counter;