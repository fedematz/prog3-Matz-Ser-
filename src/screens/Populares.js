import React from "react";
import Populares from "../components/Populares/Populares"


function Popu() {
    return (
  
    <React.Fragment>
        <h1>Peliculas mas populares</h1>
        <iframe src="https://player.vimeo.com/video/829821337?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"  width="100%" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
        <p><a href="https://vimeo.com/829821337"></a></p>
        <main>
        <Populares/>
        </main>
        

        
            
    </React.Fragment>
            
    )
}

export default Popu