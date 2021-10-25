import { useContext } from "react";
import  favoritesContext  from "../../store/favorite-context";
import Card from "../../UI/card";
import classes from "./meetupItem.module.css";
const MeetupItem = (props) => {
    console.log(props);
  const favCtx = useContext(favoritesContext);
  const isItemFavorite = favCtx.itemIsFavorite(props.id);
  const toggleFavoriteHandler = () => {
    if (isItemFavorite) {
      favCtx.removeFavorite(props.id);
    } else {
      favCtx.addFavorites({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      });
    }
  };
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteHandler}>{isItemFavorite? 'remove favorite' : 'add favorite'}</button>
        </div>
      </Card>
    </li>
  );
};
export default MeetupItem;
