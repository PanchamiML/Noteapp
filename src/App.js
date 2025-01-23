import Home from "./Home";
import Navbar from "./Navbar";
import { BrowserRouter as Router,Route,Switch } from "react-router-dom/cjs/react-router-dom.min";
import Newnote from "./Newnote";
import DetailedNote from "./DetailedNote";
import NotFound from "./NotFound";


function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <div className="maincontents">
        <Switch>
          <Route exact path="/">
      <Home/>
      </Route>
      <Route path="/new">
      <Newnote/>
      </Route>
      <Route path="/notes/:id">
      <DetailedNote/>
      
      </Route>

      <Route path="*">
      <NotFound/>
      
      </Route>
      
      



      
      </Switch>
       </div>
    </div>
    </Router>
  );
}

export default App;
