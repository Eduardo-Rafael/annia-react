import React from "react";
import "./Form.css"

class InputControl extends React.Component
{
  constructor(props){
    super(props);
  }

  render(){
    return <input type="text" ref={this.props.reference} placeholder="Type Something"/>;
  }
}

class Formulario extends React.Component
{
  constructor(props){
    super(props);

    this.state= {
      message: "No message to show"
    };

    this.firstReference = React.createRef();

    this.addMessage = this.addMessage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  addMessage(){
    const value = this.firstReference.current.value;
    console.log(value);
    this.setState({
      message: (value != null)? value : "No message to show"
    });
    this.firstReference.current.value = "";
  }

  handleSubmit(event){
    event.preventDefault();
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit} className="form" >
        <h1>{this.state.message}</h1>
        <hr/>
        <InputControl reference={this.firstReference}/>
        <br/><br/>
        <button onClick={this.addMessage}>Show Message</button>
      </form>
    );
  }
}

export default Formulario;