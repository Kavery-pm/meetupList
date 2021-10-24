import MeetupForm from "../components/meetups/MeetupForm";

const NewMeetups = ()=>{
    const addnewMeetupHandler = async(meetupData)=>{
const response = await fetch('https://reacthook-f4714.firebaseio.com/meetups.json',{
    method: 'POST',
    body: JSON.stringify(meetupData),
    headers:{
        'Content-Type': 'application/json'
    }
});
    }
return <section>
    <h1>Add a new Meetup</h1>
    <MeetupForm onAddNewMeetup={addnewMeetupHandler}></MeetupForm>
</section>
}
export default NewMeetups;