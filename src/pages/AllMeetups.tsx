import MeetupList from "../components/meetups/MeetupList";
import {useState, useEffect} from "react";

export default function AllMeetupsPage() {
    const [isLoading, setIsLoadingState] = useState(true);
    const [loadedMeetups, setLoadedMeetups] = useState([]);

    useEffect(() => {
        setIsLoadingState(true);
        fetch("https://reactlearning-3a786-default-rtdb.firebaseio.com/meetups.json").then(resp => {
            return resp.json();
        }).then(data => {
            const meetups = [];

            for (const key in data) {
                const meetup = {
                    id: key,
                    ...data[key]
                }

                meetups.push(meetup);
            }
            setLoadedMeetups(meetups);
            setIsLoadingState(false);
        });
    }, []);

    if (isLoading) {
        return(
            <section>
                <p>Loading...</p>
            </section>
        );
    }

    return (
        <section>
            <h1>All Meetups</h1>
            <MeetupList meetups={loadedMeetups}/>
        </section>
    );
}