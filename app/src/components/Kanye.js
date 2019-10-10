//Set up Kanye Display Component
import React from "react";

const Kanye = props => {
    //CHECK AFTER RECIEVING DATA{PROPS>QUOTE>TEXT}???
    return <p>{props.quote.text}</p>;
};

export default Kanye;