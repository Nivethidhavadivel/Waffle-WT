import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from "./Components/Routes";
import {Navbar} from 'react-bootstrap'
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar bg="light" expand="lg">
          <h3 style={{color: "red"}}> WAFFLE </h3>
        </Navbar>
        
        <Routes/>
      </div>
    </Router>
  );
}

export default App;
