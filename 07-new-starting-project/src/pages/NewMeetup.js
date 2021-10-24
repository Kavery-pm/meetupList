import { useHistory } from "react-router";
import MeetupForm from "../components/meetups/MeetupForm";

const NewMeetups = () => {
  const history = useHistory();

  const addnewMeetupHandler = async (meetupData) => {
    await fetch(
      "https://reacthook-f4714.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    history.replace("/");
  };
  return (
    <section>
      <h1>Add a new Meetup</h1>
      <MeetupForm onAddNewMeetup={addnewMeetupHandler}></MeetupForm>
    </section>
  );
};
export default NewMeetups;
