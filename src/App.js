import React, { useState } from "react";
import "./App.css";
import ButtonSearch from "./Buttonsearch";
import ButtonSub from "./ButtonSub";


const intialTheme = "light"

function App() {

  const [theme, setTheme] = useState(intialTheme);

  const changeColor = (e) =>{
    if(theme === "light" ){
      setTheme("dark");
    }else{
      setTheme("light")
    }
    
    
  }

  return (
    <div className="container text-center mt-5">

      <ButtonSearch theme={theme} changeColor={changeColor} />

      <ButtonSub theme={theme} changeColor={changeColor} />

      <button onClick={changeColor}>Change Theme</button>
    </div>
  );
}
export default App;
