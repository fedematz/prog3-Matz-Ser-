import React, { Component} from 'react'

class MiComponenteControlado extends Component{
    constructor(props){
        super(props)
        this.state = {
            valorInput1: ''
        }
    }

    evitarSubmit(event){
        console.log(event)
        event.preventDefault()
    }

    controlarInputs(event){
        this.setState({
            valorInput1: event.target.value
        }, () => this.props.filtrarPeliculas(this.state.valorInput1)
        )

    }

    render(){
        return(
            <form onSubmit={(event) => this.evitarSubmit(event)} >
                <input 
                    onChange={(event)=> this.controlarInputs(event)} 
                    value={this.state.valorInput1}
                    placeholder="Buscar película"
                />
               
            </form>
        )
    }

}

export default MiComponenteControlado