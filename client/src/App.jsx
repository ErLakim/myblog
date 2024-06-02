import{ Routes, Route} from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import ForgetPassword from "./pages/ForgetPassword";
import VerifyPassword from "./pages/VerifyPassword";

function App() {


  return (
    <>
    <Routes>
    <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/forget-password" element={<ForgetPassword/>}/>
      <Route path="/verify-password" element={<VerifyPassword/>}/>

      <Route path="*" element={<NotFound/>}/>

    </Routes>
   
    </>
  )
}

export default App
