
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

      <Apisonu />
    
    </div >

  );
}
export default App;
