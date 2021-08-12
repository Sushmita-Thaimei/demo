import './App.css';
import Navbar from './components/Navbar';
import {Home} from './components/Home';
import Register from './components/Registration';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    
    <Router>  

      <div>
        <Navbar />
        <Switch>
          <Route path="/home">
            <Home/>
          </Route>
          
          <Route path="/registration">
            <Register/>
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
