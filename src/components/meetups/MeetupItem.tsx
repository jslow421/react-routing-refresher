import style from "./MeetupItem.module.scss";

export interface Meetup {
    ImageUrl: string;
    Title: string;
    Address: string;
    Description: string;
    Id: string;
}

function MeetupItem(props: any) {
    return (
        <li className={style.item}>
            <div className={style.image}>
                <img src={props.ImageUrl} alt={props.Title} />
            </div>
            <div className={style.content}>
                <h3>{props.Title}</h3>
                <address>{props.Address}</address>
                <p>{props.Description}</p>
            </div>
            <div className={style.actions}>
                <button>To Favorites</button>
            </div>
        </li>
    );
}

export default MeetupItem;