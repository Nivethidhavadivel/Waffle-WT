import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from "./Components/Routes";
function App() {
  return (
    <Router>
      <div className="App">
        <h1> WAFFLE1 </h1>
        <Routes/>
      </div>
    </Router>
  );
}

export default App;
