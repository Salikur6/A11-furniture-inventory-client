import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import AddItem from './components/AddItem/AddItem';
import Blogs from './components/Blogs/Blogs';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import InventoryItem from './components/InventoryItemDetails/InventoryItemDetails';
import Login from './components/Login/Login';
import ManageInventory from './components/ManageInventory/ManageInventory';
import PrivetRoute from './components/PrivetRoute/PrivetRoute';
import Register from './components/Register/Register';

function App() {
  return (
    <div className="App">
      <ToastContainer></ToastContainer>
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>

        <Route path='/home' element={<Home></Home>}></Route>

        <Route path='/inventory/:itemId' element={
          <PrivetRoute>
            <InventoryItem></InventoryItem>
          </PrivetRoute>
        }></Route>

        <Route path='/manageinventory' element={
          <PrivetRoute>
            <ManageInventory></ManageInventory>
          </PrivetRoute>
        }></Route>

        <Route path='/register' element={<Register></Register>}></Route>

        <Route path='/login' element={<Login></Login>}></Route>

        <Route path='/blogs' element={<Blogs></Blogs>}></Route>

        <Route path='/additem' element={<AddItem></AddItem>}></Route>

      </Routes>


      <Footer></Footer>
    </div>
  );
}

export default App;
