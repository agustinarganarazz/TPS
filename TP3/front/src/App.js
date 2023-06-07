import { BrowserRouter , Routes, Route } from "react-router-dom"
import './App.css';
import Home from './Pages/Home';
import Contact from "./Pages/Contact"
import About from "./Pages/About"
import Error404 from "./components/Error404";
import {contact, home, about} from "./Routes/myRoutes"



function App() {
  return (
   <>
     <>
      <BrowserRouter>
        <Routes>
          <Route path={home} element={<Home/>}/>
          <Route path={contact} element={<Contact/>}/>
          <Route path={about}element={<About/>}/>
          <Route path="*" element={<Error404/>}/>
        </Routes>
     </BrowserRouter>
    </>
   </>
  );
}

export default App;
