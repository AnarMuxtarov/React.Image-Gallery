
import React ,{useState} from "react";

import './App.css';

import image from './assets/image/image';

function App() {

  const[selectedImg,setsSelectedImg]=useState(image[1])
  return (
    <div className="App">
       <div className="selected_image">
      <img src={selectedImg} alt="selected" className="selected" />

       </div>
       <div className="images">

      {image.map((image,index)=>
       <img src={image} key={index} alt="mcdonalds" className="image"
       onClick={()=>setsSelectedImg(image)}
       />
      )}
         </div>


    </div>
  );
}

export default App;
