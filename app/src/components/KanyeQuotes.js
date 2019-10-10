//Set up KanyeQuotes Container Component

import React, { useEffect } from "react";

import { connect } from "react-redux";

import { kanyeQuotes } from "../actions/index";

import Kanye from "./Kanye";

const KanyeQuotes = props => {
    useEffect(() => {
        props.kanyeQuotes();
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
        kanyeQuotes: state.fetchQuotes,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(
    mapStateToProps,
    {kanyeQuotes}
)(KanyeQuotes);