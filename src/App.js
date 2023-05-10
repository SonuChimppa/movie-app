
import './App.css';
// import Apisonu from './Apisonu';
// import Name from './props';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './Sidebar';
import UseEffect from './UseEffect';
import Input from './Input';
import Props from './props';
import Maps from './Maps';
import Filter from './Filter';
import HomeE from './HomeE';
import AboutE from './AboutE';
import Apisonu from './Apisonu';
import Prices from './Prices';
import GalleryE from './GalleryE';
import BlogE from './BlogE';
import Shop from './Shop';
import ConntactE from './ConntactE';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Electricion from './Electricion';
import Usememo from './Usememo';
import UseRef from './UseRef';
import Sonu from './ForwordRef';
import { createContext, useRef, useState } from 'react';
import ContextApi from './ContextApi';
import Interview from './Interview';
export let global = createContext()
function App() {
  let [color, setcolor] = useState("blue")
  let input = useRef()
  function updateref() {
    input.current.value = "12121212122"
  }
  return (
    <div className="App">

      {/* <Sonu ref={input}></Sonu>
      <button onClick={() => updateref()}>forword ref</button> */}







      {/* <global.Provider value={{ color: color }}>
        <ContextApi>

        </ContextApi>
      </global.Provider> */}




      {/* <Interview></Interview> */}










      {/* <Sonu ref={ref} ></Sonu>
      <button onClick={() => handle()}>forword ref</button> */}
      {/* <UseRef></UseRef> */}











      {/* < Usememo></Usememo> */}





      {/* <BrowserRouter>

        <Electricion />

        <Routes>
          <Route path='/' element={<Sidebar />} />
      
          <Route path='/About' element={<AboutE />}></Route>
          <Route path='/PricesE' element={<Prices />}></Route>
          <Route path='/GalleryE' element={<GalleryE />}></Route>
          <Route path='/BlogE' element={<BlogE />}></Route>
          <Route path='/Shop' element={<Shop/>}></Route>
          <Route path='/ContactE' element={<ConntactE/>}></Route>
        </Routes>
      </BrowserRouter> */}

















      {/* <Filter></Filter> */}
      <Apisonu />
      {/* <Input /> */}






      {/* <UseEffect /> */}
      {/* <Maps></Maps>  */}

      {/* <Props name="sonu " mobile="6543234123" email="sonu@gmail.com" />
      <Props name="monu" mobile="6549876543" email="monu@gmail.com" />
      <Props name="suresh" mobile="987654323" email="suresh@gmail.com" /> */}





      {/* <BrowserRouter>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li> 
          <Link to="/Form">Form</Link>
        </li>
        <Routes>
          <Route excat path='/' element={<Home />}></Route>
          <Route excat path='/About' element={<About />}></Route>
          <Route excat path='/Form' element={<Form />}></Route>
        </Routes>
      </BrowserRouter> */}
      {/* <UseEffect /> */}
    </div >

  );
}
export default App;
