import React, { useContext } from "react";
import ThemeContext from './Theme';



const Home = () => {
    const themes = useContext(ThemeContext);

    return (
        <div style={{ background: themes.blue }}>

            <h1>oi</h1>
        </div >
    )
};

export default Home;