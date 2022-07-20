import { useEffect,useContext } from 'react'
import { UiContext } from '../context/UIContext'

export const useHideMenu = (ocultar) => {

    const {showMenu,hiddenMenu} = useContext(UiContext)

    useEffect(() => {
        if (ocultar){
            hiddenMenu()
        }else{
            showMenu()
        }
    }, [ocultar,hiddenMenu,showMenu])
}
