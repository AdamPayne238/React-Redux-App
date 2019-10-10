//Set up Kanye Display Component
import React from "react";


const Kanye = props => {
    //CHECK AFTER RECIEVING DATA{PROPS>QUOTE>TEXT}???
    return (
    <div>
        <p>{props.data.quote}</p>
    </div>
    );
};

export default Kanye;