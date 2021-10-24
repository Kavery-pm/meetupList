import { useEffect } from "react";
import MeetupItem from "../components/meetups/MeetupItem";
import MeetUpList from "../components/meetups/MeetupList";

const DUMMY_DATA = [
  {
    id: "m1",
    title: "This is a first meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
  {
    id: "m2",
    title: "This is a second meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
];

const AllMeetUps = () => {
    useEffect(() => {
   const fetchMeetups = async()=>{
       console.log('hello')
const response = await fetch( "https://reacthook-f4714.firebaseio.com/meetups.json");
const data = await response.json();
console.log(data);
const meetups = [];
for (const key in data){
   const meetup = {
       id: key,
       ...data[key]
   }
   meetups.push(meetup) ;
}
console.log(meetups);
   }
    fetchMeetups();
    }, [])
  return (
    <section>
     <MeetUpList data={DUMMY_DATA}></MeetUpList>
    </section>
  );
};
export default AllMeetUps;
