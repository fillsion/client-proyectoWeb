import './Style/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Views/Home/Home';
import Login from './Views/Login/Login';
import Register from './Views/Register/Register';


function App() {

  return (
    <div>

      <div className="App">

          <Router>
              <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/login" element={<Login/>}/>
                <Route exact path="/register" element={<Register/>}/>
              </Routes>
          </Router>
      </div>
    
    </div>
  );
}

export default App;
