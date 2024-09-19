import React, { Component } from "react";


class Busqueda extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peliculas: [],
            valorInput1:""
           
        };
    }

    controlarInputs(event){
        this.setState({
            valorInput1: event.target.value
        }
        )
    }

    evitarSubmit(event){
        event.preventDefault()
        this.props.history.push('/Search', {busqueda: this.state.valorInput1})
    }

    render(){
        return (
            <div className = "cardsbox">

            <form className="busqueda" onSubmit={(e) => this.evitarSubmit(e)} >
                <input
                    onChange={(event)=> this.controlarInputs(event)} 
                    type ="text" 
                    placeholder="Buscar película"
                />
                <button type="submit">Buscar</button>
               
            </form>


    
            </div>
   )}
    

}

export default Busqueda;
