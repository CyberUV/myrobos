// import React, {Component} from "react";

// class Card extends Component{
//     render(){
//         return(
//             <h1>Hello</h1>
//         )
//     }
// }

// export default Card;

import React from "react";
const colorarry = [ '-light-yellow', 
'white',
'-light-green', 
'-lightest-blue', 
'-washed-yellow', 
'-washed-red',
 '-light-pink',
 '-lighest-green',
  '-light-blue',
   '-lightest-blue',
    '-washed-green'];


const Card = ({user, name}) =>{
    const urlid = user + String(Math.floor(Math.random()*10));

    return(
        <div className=" dib br3 pa1 ma3 shadow-2 grow bw2 tc" >
            <div className={`bg${colorarry[Math.floor(Math.random()*10)]} + " dib br3 pa3 ma2  grow bw2 shadow-5 tc"`}  >

            <img src= {`https://robohash.org/${urlid}?50x50`} alt="Wait For Robo" className="w5" />
          
            <div>
                <h1>{user}</h1><br />
                {/* <h4>{name}</h4> */}
                <h4> {name} <br /> <br /> { ((user + String(Math.floor(Math.random()*1000)) + "@gmail.com").toLowerCase()).replace(/\s/g, "") } </h4>
               
            </div>
            </div>
        </div>
    );
}

export default Card;
