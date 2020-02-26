//Set up Kanye Display Component
import React from "react";


const Kanye = props => {
    //CHECK AFTER RECIEVING DATA{PROPS>QUOTE>TEXT}???
    console.log(props.kanye.quote)
    return (
    <div>
        <h3>Quote of the day: "Sometimes I push the door close button on people running towards the elevator. I just need my own elevator sometimes. My sanctuary." - Kanye</h3>
        <p>"{props.kanye.quote}" - Kanye</p>
        <p>"{props.kanye.quote}" - Kanye</p>
    </div>
    );
};

export default Kanye;