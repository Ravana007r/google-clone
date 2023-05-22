import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/jsPages/Home';
import SearchPage from './pages/jsPages/SearchPage';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route exact path='/search' Component={SearchPage}/>
        <Route exact path='/' Component={Home}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
