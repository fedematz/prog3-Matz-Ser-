import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import NotFound from "./screens/NotFound";
import Home from "./screens/Home";
import Favoritos from "./screens/Favoritos";
import masValoradas from "./screens/masValoradas";
import Populares from "./screens/Populares";
import {Switch, Route} from "react-router-dom";
import Detalle from "./screens/Detalle";
import Search from "./screens/Search"; 


function App() {
  return (
   <>
   <Header/>

    <Switch>
    <Route path="/" exact={true} component={Home}/>
    <Route path="/favoritos" component={Favoritos}/>
    <Route path="/Populares" component={Populares}/>
    <Route path="/masValoradas" component={masValoradas}/>
    <Route path="/Detalle/id/:id" component={Detalle}/>
    <Route path="/Search" component={Search}/>
    <Route path="" component={NotFound}/>
    </Switch>
  
   <Footer/>
   </>
  );
}

export default App;
