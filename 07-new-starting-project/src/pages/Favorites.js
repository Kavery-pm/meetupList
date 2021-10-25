import { useContext } from "react";
import MeetUpList from "../components/meetups/MeetupList";
import favoritesContext from "../store/favorite-context";

const Favorites = ()=>{
    
    const favCtx = useContext(favoritesContext);
    console.log(favCtx.favorites);
return <section>
    {favCtx.totalFavorites === 0 && <p>No favorites</p>}
    <MeetUpList data={favCtx.favorites}></MeetUpList>
</section>
}
export default Favorites; 