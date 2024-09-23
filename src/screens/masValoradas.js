import React from "react";
import MasValoradas from "../components/MasValoradas/MasValoradas";


function masValor() {
    return (
  
        <React.Fragment>
        <h1>Peliculas mas valoradas</h1>
        <iframe src="https://player.vimeo.com/video/991844151?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"  width="100%" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
        <p><a href="https://vimeo.com/991844151"></a></p>
        <main>
        <MasValoradas/>
        </main>
        
        
            
    </React.Fragment>
            
    )
}

export default masValor