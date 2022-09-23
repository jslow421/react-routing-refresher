import React from 'react';
import './App.scss';
import {Route, Routes} from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";

function App() {
    return (
        <Routes>
            <Route path='/' element={<AllMeetupsPage/>}></Route>
            <Route path='/new-meetup' element={<NewMeetupPage/>}></Route>
            <Route path='/favorites' element={<FavoritesPage/>}></Route>
        </Routes>
    );
}

export default App;
