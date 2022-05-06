import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import InventoryItem from './components/InventoryItemDetails/InventoryItemDetails';
import ManageInventory from './components/ManageInventory/ManageInventory';

function App() {
  return (
    <div className="App">
      <ToastContainer></ToastContainer>
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/inventory/:itemId' element={<InventoryItem></InventoryItem>}></Route>
        <Route path='manageinventory' element={<ManageInventory></ManageInventory>}></Route>
      </Routes>


      <Footer></Footer>
    </div>
  );
}

export default App;
