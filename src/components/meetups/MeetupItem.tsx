import {useContext} from "react";
import style from "./MeetupItem.module.scss";
import Card from "../ui/card/Card";
import FavoritesContext from "../../store/favorites-context";

export interface Meetup {
    ImageUrl: string;
    Title: string;
    Address: string;
    Description: string;
    Id: string;
}

export default function MeetupItem(props: any) {
    const favoritesCtx = useContext(FavoritesContext);
    const itemIsFavorite = favoritesCtx.itemIsFavorite(props.Id);
    function toggleFavoriteStatusHandler() {
        if (itemIsFavorite) {
            favoritesCtx.removeFavorite(props.Id);
        } else {
            favoritesCtx.addFavorite({
                id: props.Id,
                title: props.Title,
                description: props.Description,
                image: props.ImageUrl,
                address: props.Address
            });
        }
    }

    return (
        <li className={style.item}>
            <Card>
                <div className={style.image}>
                    <img src={props.ImageUrl} alt={props.Title} />
                </div>
                <div className={style.content}>
                    <h3>{props.Title}</h3>
                    <address>{props.Address}</address>
                    <p>{props.Description}</p>
                </div>
                <div className={style.actions}>
                    <button onClick={toggleFavoriteStatusHandler}>{itemIsFavorite ? 'Remove From Favorites' : 'To Favorites'}</button>
                </div>
            </Card>
        </li>
    );
}