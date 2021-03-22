import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from "./Components/Routes";
import Main from "./Components/Main.js"
function App() {
  return (
    <Router>
      <div className="App">
        <Main/>
   
        <Routes/>
      </div>
    </Router>
  );
}

export default App;
