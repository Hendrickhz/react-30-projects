import React, { useEffect, useState } from 'react'
import Blog from './Blog'
import { ThemeContext, themes } from './context/theme-context'

const LightAndDark = () => {
   const [theme,setTheme]=useState(themes.dark)
   const changeTheme =()=>{
    console.log(theme)
    if(theme == "dark"){
        setTheme(themes.light)
    }
    else if(theme == "light"){
        setTheme(themes.dark)
    }
   }
   let body= document.body;
   useEffect(()=>{
        switch (theme) {
            case themes.dark:
                body.classList.remove("bg-white", "text-black");
                body.classList.add("bg-black", "text-white");
                break;
            case themes.light:
                body.classList.remove("bg-black", "text-white");
                body.classList.add("bg-white", "text-black");
                break;
        
           
        }

   },[theme])
   
  return (
    <ThemeContext.Provider value={{theme,changeTheme}}>
      <Blog />
    </ThemeContext.Provider>
  )
}

export default LightAndDark
