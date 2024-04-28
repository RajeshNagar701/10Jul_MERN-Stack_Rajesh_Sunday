import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./website/pages/Home";
import Contact from "./website/pages/Contact";
import Admin_login from "./admin/pages/Admin_login";
import Dashboard from "./admin/pages/Dashboard";
import Add_categories from "./admin/pages/Add_categories";
import Manage_categories from "./admin/pages/Manage_categories";


function App() {
  return (
   <>
   <BrowserRouter>
    <Routes>
      {// admin roues
      }
      <Route path="/" element={<Home/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>

      {// admin roues
      }

      <Route path="/admin-login" element={<Admin_login/>}></Route>
      <Route path="/dashboard" element={<Dashboard/>}></Route>
      <Route path="/add_categories" element={<Add_categories/>}></Route>
      <Route path="/manage_categories" element={<Manage_categories/>}></Route>


    </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
