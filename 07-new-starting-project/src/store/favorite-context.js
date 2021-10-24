import { createContext } from "react";

const favoritesContext = createContext({
favorites:[],
totalFavorites: 0
});

const favoritesContextProvider = (props)=>{
    const context ={}
    return <favoritesContext.Provider value={context}>{props.children}</favoritesContext.Provider>
}
export default favoritesContextProvider;