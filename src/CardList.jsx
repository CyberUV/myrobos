import React from "react";
import Card from "./Card";

const CardList = ({Robodata}) => {

    const CardArray = Robodata.map((use, i) => {
        return <Card key={i} id={Robodata[i].id} name={Robodata[i].name} user={Robodata[i].user} />
        // here key cannot be change it is like #id
    } )

    return(
        <div className='main flex items-center mt5 flex-wrap items-center w-100 justify-center'>
                            {CardArray}


 {/* To Make this hard work we can use looping */}
 
        </div>
    )
}
export default CardList;