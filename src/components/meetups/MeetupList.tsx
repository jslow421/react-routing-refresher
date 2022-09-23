import MeetupItem, {Meetup} from "./MeetupItem";

import style from './MeetupList.module.scss';

function MeetupList(props: any) {
    return (
        <ul className={style.list}>
            {props.meetups.map(meetup => <MeetupItem key={meetup.id} Title={meetup.title} Id={meetup.id}
                                             Address={meetup.address} Description={meetup.description}
                                             ImageUrl={meetup.image}/>)}
        </ul>
    );
}

export default MeetupList;