import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Categories from './components/categories';
import Locations from './components/locations';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Categories/>}/>
      <Route path='/locations' element={<Locations/>}/>
    </Routes>
  );
}

export default App;
