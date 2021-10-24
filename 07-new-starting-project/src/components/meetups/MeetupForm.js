import { useRef } from "react";
import Card from "../../UI/card";
import classes from "./MeetupForm.module.css";
const MeetupForm = () => {
    const titleInputRef = useRef('');
    const addressInputRef = useRef('');
    const imageInputRef = useRef('');
    const descriptionInputRef = useRef('');
    const submitHandler = (event)=>{
        event.preventDefault();
      const enteredTitle = titleInputRef.current.value; 
      const enteredAddress = addressInputRef.current.value; 
      const enteredImage=imageInputRef.current.value;
      const enteredDescription = descriptionInputRef.current.value;
      const meetupData = {
          title: enteredTitle,
          image:enteredImage,
          address: enteredAddress,
          description: enteredDescription
      }
      console.log(meetupData);
    }
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" required ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Image</label>
          <input type="url" id="image" required ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input type="text" id="address" required ref={addressInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea type="text" id="description" required ref={descriptionInputRef} />
        </div>
        <div className={classes.actions}>
          <button>Enter a meetup</button>
        </div>
      </form>
    </Card>
  );
};
export default MeetupForm;
