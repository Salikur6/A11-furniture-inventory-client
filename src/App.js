import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import InventoryItem from './components/InventoryItem/InventoryItem';

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/inventory/:itemId' element={<InventoryItem></InventoryItem>}></Route>
      </Routes>


      <Footer></Footer>
    </div>
  );
}

export default App;
