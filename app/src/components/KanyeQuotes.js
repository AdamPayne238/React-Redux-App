//Set up KanyeQuotes Container Component

import React, { useEffect } from "react";

import { connect } from "react-redux";

import { fetchQuotes } from "../actions";

import Kanye from "./Kanye";

const KanyeQuotes = props => {
    useEffect(() => {
        props.fetchQuotes();
    // add {} inside array to start infinite loop? lol
    // also add props inside of [] for same result?
    }, []);

    if (props.isFetching){
        return <h2>Loading Kanye Quotes.....skrrt.....</h2>
    }

    return (
        <div>
            {props.error && <p>{props.error}</p>}
            {props.kanyeQuotes.map(kanye => (
                <Kanye 
                key={kanye._id} 
                kanye={kanye} 
                />
            ))}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        kanyeQuotes: state.kanyeQuotes,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(
    mapStateToProps,
    {fetchQuotes}
)(KanyeQuotes);