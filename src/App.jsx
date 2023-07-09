import React, {Component} from "react";
import {Robodata} from './Robodata';
import RoboTitle from './RoboTitle';
import CardList from './CardList';
import SearchFeild from './SearchFeild';
import Instruction from "./Instruction";

class App extends Component {
    constructor(){
        super()
        this.state = {
            Robodata: Robodata,
            searchFeilds: ''
        }
    }    


    onSearchChanges = (event) => {
        this.setState({ searchFeilds: event.target.value.toLowerCase()})
    }

    render(){
        const filteredRobot = this.state.Robodata.filter(Robodata =>{
            return Robodata.name.toLowerCase().includes(this.state.searchFeilds);
        })
       
        return(
            <div className="">
                    <RoboTitle/>
                    <SearchFeild SearchChanges={this.onSearchChanges} />
                    <Instruction/>
                    <CardList Robodata={ filteredRobot } />
            </div>
        );
    }
}

export default App;