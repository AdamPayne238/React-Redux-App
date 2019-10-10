import axios from 'axios';

export const START_AXIOS = 'START_AXIOS';
export const AXIOS_SUCCESS = 'AXIOS_SUCCESS';
export const AXIOS_FAILURE = 'AXIOS_FAILURE';

export const kanyeQuotes = () => dispatch => {
    dispatch({ type: START_AXIOS });

    axios
        .get(
            "https://api.kanye.rest"
        )
    .then(response => dispatch({ type: AXIOS_SUCCESS, payload: response}))
    .catch(error => dispatch({ type: AXIOS_FAILURE, payload: error.response}));
};



// same as:

// const fetchFacts = () => {
//   return dispatch => {
//     dispatch({ type: START_FETCHING });
//     // do some async action and dispatch an error or success action
//     axios
//       .get('https://cat-fact.herokuapp.com/facts')
//       .then(res => dispatch({ type: FETCH_SUCCESS, payload: res.data }))
//       .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.response }));
//   };
// };

// redux thunk
// const thunk = next => action => store => {
//   if (typeof action === 'object') {
//     next(action); // forward action untouched
//   } else if (typeof action === 'function') {
//     action(store.dispatch) // stop the action and call the function
//   }
// }