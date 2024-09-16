import React, { Component } from "react";
import Pelicula from "../Pelicula/Pelicula"; 
let api_key = "701b3103c42750c129f8fa4974fad18a";

class NavBar extends Component {
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
        }, () => this.busqueda()
        )
    }

    evitarSubmit(event){
        event.preventDefault()
        this.props.history.push('/favoritos', {busqueda: this.state.valorInput1})
    }




    render(){
        return (
            <div className = "cardsbox">

            <form onSubmit={(e) => this.evitarSubmit(e)} >
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

export default NavBar;
