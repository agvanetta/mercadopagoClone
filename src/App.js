import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Sidebar from './components/Sidebar/Sidebar';
import Inicio from './components/Inicio/Inicio';

function App() {
  return (
    <div className="App">
      <Router  Redirect to="/" >
          <Routes>
            <Route path="/"    element={  <>  {" "}  <Header/> <Inicio/> <Sidebar/> {" "}  </> } />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
