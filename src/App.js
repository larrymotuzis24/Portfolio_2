import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <h1> Larry Motuzis</h1>
      <Router>
        <Routes>
        <Route path='/' element={<Main />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
