import React, {Component} from "react";
import Pelicula from "../components/Pelicula/Pelicula"
import "../components/Peliculas/style.css";
let api_key = "701b3103c42750c129f8fa4974fad18a";

class Search extends Component {
    constructor(props){
        super(props)
        this.state = {
            peliculas : [],
            loading: true
        }
    }

    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${this.props.history.location.state.busqueda}`)
            .then((resp) => resp.json())
            .then((data) => {
                console.log('data', data);
                this.setState({
                    peliculas: data.results,
                    loading: false
                    
                }, ()=> console.log('state', this.state));
            })
            .catch((err) => console.log(err));
    }

    render(){
        const loading = this.state.loading;
        return ( 
            <section className="cardsbox">
              {loading ? (
                    <div className="loading">
                        <img src="/img/giphy.png" alt="Cargando..." />
                    </div>
                ) : (   
            this.state.peliculas.length > 0
                ? ( this.state.peliculas.map((elm) => (
                    
                    <Pelicula
                        key={`${elm.id}-${elm.title}`}
                        id={elm.id}
                        poster_path={elm.poster_path}
                        title={elm.title}
                        overview={elm.overview}
                    />
                    // <h1>
                    //     {elm.title}
                    // </h1>
               
                ))
            ):( <img className="loading" src="/img/giphy.png" alt="Cargando..." />
            )
            )}
            </section>  
          
                
        )
    }
}

export default Search