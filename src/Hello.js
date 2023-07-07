import React, {Component} from "react";


// class Hello extends Component {

//     render(){
//         return(
//             <div>
//                 <h1 className="f1 w-100 bg-red">hi it is Rudraksh yadav</h1>
//                 <p>just testing</p>
//                 <h3>{this.props.greet}</h3>
//             </div>
//         );
//     }
// }

// ....................................................................... both we can use as per need

const Hello = (poop) =>{
            return(
                    <div>
                        <h1 className="f1 w-100 bg-red">hi it is Rudraksh yadav</h1>
                        <p>just testing</p>
                        <h3>{poop.greet}</h3>
                    </div>
                );
}

export default Hello;