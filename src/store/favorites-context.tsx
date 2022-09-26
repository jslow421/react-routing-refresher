import {createContext, useState} from "react";
import favorites from "../pages/Favorites";

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoriteMeetup) => {},
    removeFavorite: (meetupId) => {},
    itemIsFavorite: (meetupId): boolean => false,
});

export function FavoritesContextProvider(props: any) {
    const [userFavorites, setUserFavorites] = useState([]);

    function addFavoriteHandler(favoriteMeetup: any) {
        setUserFavorites((prevUserFavorites) => {
           return prevUserFavorites.concat(favoriteMeetup);
        });
    }

    function removeFavoriteHandler(meetupId) {
        setUserFavorites((prevUserFavorites:any[]) => {
            return prevUserFavorites.filter(meetup => meetup.id !== meetupId);
        })
    }

    function itemIsFavoriteHandler(meetupId): boolean {
        return userFavorites.some(meetup => meetup.id === meetupId);
    }

    const context:any = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler
    };


    return(
/*        <FavoritesContext.Provider value={{favorites: [], totalFavorites: 0}}>
            {props.children}
        </FavoritesContext.Provider>*/
        <FavoritesContext.Provider value={context}>
            {props.children}
        </FavoritesContext.Provider>
    );
}

export default FavoritesContext;