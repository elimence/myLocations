import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Categories from './components/categories';
import CategoryDetailsView from './components/categories/category-details';
import Locations from './components/locations';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Categories/>}/>
      <Route path='/categories' element={<CategoryDetailsView/>}/>
      <Route path='/locations/:categoryId' element={<Locations/>}/>
      <Route path='/locations' element={<Locations/>}/>
    </Routes>
  );
}

export default App;
