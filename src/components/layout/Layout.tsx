import style from './Layout.module.scss'
import MainNavigation from "./MainNavigation";
import React from "react";

function Layout(props: any) {
    return(
        <div>
            <MainNavigation/>
            <main className={style.main}>
                {props.children}
            </main>
        </div>
    );
}

export default Layout;