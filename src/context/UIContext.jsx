import React,{createContext,useState} from 'react'

export const UiContext = createContext();

export const UiProvider = ({children}) => {

    const [ocultarMenu, setOcultarMenu] = useState(false)  

    const showMenu = ()=>{
        setOcultarMenu(false)
    }

    const hiddenMenu = () =>{
        setOcultarMenu(true)
    }
  return (
   <UiContext.Provider value={{ocultarMenu,showMenu,hiddenMenu}}>
    {children}
   </UiContext.Provider>
  )
}
