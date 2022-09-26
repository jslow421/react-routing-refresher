import NewMeetupForm from "../components/meetups/NewMeetupForm";
import {DataStore} from '@aws-amplify/datastore';
import {Meetup} from "../models";
import {useNavigate} from "react-router-dom";


export default function NewMeetupPage() {
    let navigate = useNavigate();

    function addMeetupHandler(meetup: Meetup) {
        fetch("https://reactlearning-3a786-default-rtdb.firebaseio.com/meetups.json", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(meetup),
        }).then(() => {
            navigate("/");
        });
    }

    return (
        <section>
            <h1>Add New Meetup</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler}/>
        </section>
    );
}