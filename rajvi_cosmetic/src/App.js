import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./website/pages/Home";
import Contact from "./website/pages/Contact";
import Admin_login from "./admin/pages/Admin_login";
import Dashboard from "./admin/pages/Dashboard";
import Add_categories from "./admin/pages/Add_categories";
import Manage_categories from "./admin/pages/Manage_categories";
import Add_services from "./admin/pages/Add_services";
import Add_blog from "./admin/pages/Add_blog";
import Manage_services from "./admin/pages/Manage_services";
import Manage_blog from "./admin/pages/Manage_blog";
import Manage_contact from "./admin/pages/Manage_contact";
import Manage_customer from "./admin/pages/Manage_customer";
import Login from "./website/pages/Login";
import Signup from "./website/pages/Signup";
import About from "./website/pages/About";
import Services from "./website/pages/Services";
import View_service from "./website/pages/View_Service";
import Blog from "./website/pages/Blog";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Profile from "./website/pages/Profile";
import Edit_profile from "./website/pages/Edit_profile";
import PNF from "./website/pages/PNF";


function App() {
  return (
   <>
   
   <BrowserRouter>
   <ToastContainer></ToastContainer>
    <Routes>
      {// Websites
      }
      <Route path="/" element={<Home/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/services" element={<Services/>}></Route>
      <Route path="/view_service/:id" element={<View_service/>}></Route>
      <Route path="/blog" element={<Blog/>}></Route>
      <Route path="/profile" element={<Profile/>}></Route>
      <Route path="/edit_profile/:id" element={<Edit_profile/>}></Route>
      
      <Route path="*" element={<PNF/>}></Route>
      
      {// admin roues
      }

      <Route path="/admin-login" element={<Admin_login/>}></Route>
      <Route path="/dashboard" element={<Dashboard/>}></Route>
      <Route path="/add_categories" element={<Add_categories/>}></Route>
      <Route path="/manage_categories" element={<Manage_categories/>}></Route>
      <Route path="/add_services" element={<Add_services/>}></Route>
      <Route path="/manage_services" element={<Manage_services/>}></Route>
      <Route path="/add_blog" element={<Add_blog/>}></Route>
      <Route path="/manage_blog" element={<Manage_blog/>}></Route>
      <Route path="/manage_contact" element={<Manage_contact/>}></Route>
      <Route path="/manage_customer" element={<Manage_customer/>}></Route>
                                                                  
    </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
