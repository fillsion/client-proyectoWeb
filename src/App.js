import './Style/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Views/Home/Home';
import Login from './Views/Login/Login';


function App() {

  return (
    <div>

      <div className="App">

          <Router>
              <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/login" element={<Login/>}/>
              </Routes>
          </Router>
      </div>
    
    </div>
  );
}

export default App;
