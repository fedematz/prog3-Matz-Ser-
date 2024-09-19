import React, {Component} from "react";
import Pelicula2 from "../Pelicula2/Pelicula2"; 
import "./style.css";
let api_key = "701b3103c42750c129f8fa4974fad18a";

class Peliculas2 extends Component {
    constructor(props){
        super(props)
        this.state = {
            peliculas: [],
            loading: true
        }
    }


    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}`)
            .then((resp) => resp.json())
            .then((data) => {
                console.log('data', data)
                this.setState({
                    peliculas: data.results,
                    loading: false
                })
            })
            .catch((err) => console.log(err))
    } 
    

    render(){
        const loading = this.state.loading;
        return (
            <div className="cardsbox">
                {loading ? (
                    <div className="loading-container">
                        <h1>Cargando...</h1>
                        <img src="/img/giphy.png" alt="Cargando..." />
                    </div>
                ) : (
                    <>
                        {this.state.peliculas.length > 0 ? (
                            this.state.peliculas.slice(0, 5).map((elm) => (
                                <Pelicula2 id={elm.id} poster_path={elm.poster_path} title={elm.title} overview={elm.overview} />
                            ))
                        ) : (
                            <h1>Cargando...</h1>
                        )}
                    </>
                )}
            </div>
        );
    }
}

export default Peliculas2;