import MeetupForm from "../components/meetups/MeetupForm";

const NewMeetups = ()=>{
    const addnewMeetupHandler = (meetupData)=>{
console.log(meetupData);
    }
return <section>
    <h1>Add a new Meetup</h1>
    <MeetupForm onAddNewMeetup={addnewMeetupHandler}></MeetupForm>
</section>
}
export default NewMeetups;