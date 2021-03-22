import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from "./Components/Routes";
import Main from "./Components/Main.js"
function App() {
  return (
    <Router>
      <div className="App">
<<<<<<< HEAD
        <Main/>
=======
        <Navbar bg="light" expand="lg">
          <h3 style={{color: "red"}}> WAFFLE </h3>
        </Navbar>
   
>>>>>>> 1ea77a41c71a7eeed524ff9602f11da953652ffe
        <Routes/>
      </div>
    </Router>
  );
}

export default App;
