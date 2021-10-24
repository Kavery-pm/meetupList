import Card from "../../UI/card";
import classes from "./MeetupForm.module.css";
const MeetupForm = () => {
  return (
    <Card>
      <form className={classes.form}>
        <div className={classes.control}>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" required />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Image</label>
          <input type="url" id="image" required />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input type="text" id="address" required />
        </div>
        <div className={classes.control}>
          <label htmlFor="description"></label>
          <textarea type="text" id="description" required />
        </div>
        <div className={classes.actions}>
          <button>Enter a meetup</button>
        </div>
      </form>
    </Card>
  );
};
export default MeetupForm;
