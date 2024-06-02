// dependancy 
//npm i -g axios react-router-dom react-toastify json-server @reduxjs/toolkit react-redux

import { BrowserRouter,Routes,Route } from "react-router-dom";

import Home from "./feature/website/Pages/Home";
import Add_user from "./feature/website/Pages/Add_user";
import Edit_user from "./feature/website/Pages/Edit_user";


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div>
      <BrowserRouter>
        <ToastContainer></ToastContainer>
        <Routes>
          <Route path="/" element={<><Home/></>}></Route>
          <Route path="/add_user" element={<><Add_user/></>}></Route>
          <Route path="/edit_user/:id" element={<><Edit_user/></>}></Route>
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
