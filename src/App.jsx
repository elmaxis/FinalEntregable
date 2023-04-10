import React, { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { rutas, Login, Layout } from "./navigation/Routes";    //de forma nombrada con {}
import {ProtectedRoutes} from "./navigation/ProtectedRoutes";
import NewContextProvider from "./context/Context";
import { DarkModeContext } from "./context/DarkModeContext";




function App() {
  const { isModeDark } = useContext(DarkModeContext);

  return ( 
    <NewContextProvider>
      <BrowserRouter>
        <div className={ isModeDark? "dark" : "clasequenoexiste"}>
          <Routes>
            <Route path='/login' element={<Login/>}/>          
            <Route element={<ProtectedRoutes/>}>       
              <Route element ={<Layout/>}>
                {
                rutas.map(({ id, path, Component }) => (
                      <Route key={id} path={path} element={<Component />} />                      
                  ))          
                  
                }                    
              </Route>      
            </Route>
            <Route path='/' element={<Navigate to="/login" />}/>          
          </Routes>    
        </div>
    </BrowserRouter>
  </NewContextProvider>
  );
}

export default App




//  {/* {Route path="/home" element={<Home />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/favs" element={<Favs />} />
//         <Route path="/detail/:id" element ={ <Detail />} /> } */}
