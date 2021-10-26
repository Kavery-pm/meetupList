import { useEffect, useState } from "react";

import MeetUpList from "../components/meetups/MeetupList";

const AllMeetUps = () => {
  const [Loading, setLoading] = useState(null);
  const [loadedMeetups, setloadedMeetups] = useState([]);

  useEffect(() => {
    fetch("https://reacthook-f4714.firebaseio.com/meetups.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }
        console.log(meetups);
        setLoading(false);
        setloadedMeetups(meetups);
      });
  }, []);
  if (Loading) {
    return <p>Loading::::</p>;
  }
  return (
    <section>
      <MeetUpList data={loadedMeetups}></MeetUpList>
    </section>
  );
};
export default AllMeetUps;
