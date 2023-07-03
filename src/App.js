import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Signin from "./components/signin/Signin";
import Signup from "./components/signup/signup";
import Dashboard1 from "./components/dashboard/dashboard1";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Signin />}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/dashboard1' element={<Dashboard1/>}/>
      </Routes>
      </BrowserRouter>
    </>
   
  );
}

export default App;
