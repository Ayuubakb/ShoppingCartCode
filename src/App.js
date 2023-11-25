import React, { useState }  from 'react';
import './App.css';
import Nav from './components/Nav';
import {Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';
import img1 from './assets/products/1.png';
import img2 from './assets/products/2.png';
import img3 from './assets/products/3.png';
import img4 from './assets/products/4.png';
import img5 from './assets/products/5.png';

function App() {
  const nbreObjt=[
  {id:0,n:0,desc:'Iphone',price:1000,img:img1},
  {id:1,n:0,desc:'Laptop',price:25000,img:img2},
  {id:2,n:0,desc:'Iphone2',price:5000,img:img3},
  {id:3,n:0,desc:'Iphone3',price:2000,img:img4},
  {id:4,n:0,desc:'Iphone4',price:100,img:img5}
  ];

  const [nbre,setNbre]=useState(nbreObjt);

  const handleAdd=(id)=>{
    setNbre(
      nbre.map((item)=>{
          if(item.id===id){
              return {...item,n:item.n+1}
          }
          else{
              return item;
          }
      })
    );
  }
  
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path='/' element={<Home nbre={nbre} onAdd={handleAdd}/>}></Route>
        <Route path='/Cart' element={<Cart nbre={nbre}/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
