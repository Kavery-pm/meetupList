import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";
const MeetUpList = (props) => {
    console.log(props);
  return (
    <div className={classes.list}>
      {props.data.map((item) => (
        <MeetupItem
          key={item.id}
          image={item.image}
          alt={item.title}
          title={item.title}
          address={item.address}
          description={item.description}
        ></MeetupItem>
      ))}
    </div>
  );
};
export default MeetUpList;
