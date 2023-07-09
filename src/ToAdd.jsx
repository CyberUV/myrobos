import React, {useRef} from "react";
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push, set } from 'firebase/database';

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

     // Initialize Firebase
 const firebaseConfig = {
    apiKey: "AIzaSyDefTZ3hQl16jIvXbIQ3AXFvkvQWlwIpqI",
    authDomain: "dream-web-61ad8.firebaseapp.com",
    projectId: "dream-web-61ad8",
    storageBucket: "dream-web-61ad8.appspot.com",
    messagingSenderId: "40035040781",
    appId: "1:40035040781:web:ab016bb5d72c612e325f44",
    measurementId: "G-76X879JLY4"
  };
  // Initialize Firebase app
  firebase.initializeApp(firebaseConfig);

  const AddMe = () =>{
    const input1Ref = useRef(null).value;
    const input2Ref = useRef(null).value;
    const input3Ref = useRef(null).value;
  }


const ToAdd = ()=>{
    return(
        <div className=" dib br3 pa1 ma3 shadow-2 grow bw2 tc" >
            <div className={`bg${colorarry[Math.floor(Math.random()*10)]} + " dib br3 pa3 ma2  grow bw2 shadow-5 tc"`}  >

            <img src="robo.png" alt="Wating For Your Information" className="w5" />
          
            <div>
                <input type="text" ref={input1} placeholder="Your Full Name"/><br />
               
                 <input type="text" ref={input2}  placeholder="Your Nick Name"/>
                 <input type="email" ref={input3} placeholder="Your Email" />
                 <button onClick={AddMe}>Add Me</button>
               
            </div>
            </div>
        </div>
    )
}

export default ToAdd;