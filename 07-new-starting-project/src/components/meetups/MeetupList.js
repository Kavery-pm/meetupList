import MeetupItem from "./MeetupItem";

const MeetUpList = (props) => {
  return (
    <div>
      {props.data.map((item) => (
        <MeetupItem
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
