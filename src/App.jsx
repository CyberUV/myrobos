import React from "react";
import {Robodata} from './Robodata'
import RoboTitle from './RoboTitle'
import CardList from './CardList';

const App = () => {
    return(
        <div>
                <RoboTitle/>
                <CardList Robodata={ Robodata } />
        </div>
    );
}

export default App;