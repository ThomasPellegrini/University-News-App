import { FETCHING_DATA, FETCHING_DATA_SUCCESS_ALERTS, FETCHING_DATA_SUCCESS_EVENTS, FETCHING_DATA_FAILURE, FETCHING_DATA_SUCCESS_NEWS } from './constants'
import Axios from 'axios';

let endPointNews = 'https://www.unimib.it/rss_news';
let endPointEvents = 'https://www.unimib.it/rss_eventi';
let endPointAlerts = 'https://www.unimib.it/rss_avvisi';

export function getData() {
    return {
        type: FETCHING_DATA
    }
}

export function getDataSuccessEvents(data) {
    return {
        type: FETCHING_DATA_SUCCESS_EVENTS,
        data,
    }
}

export function getDataSuccessAlerts(data) {
    return {
        type: FETCHING_DATA_SUCCESS_ALERTS,
        data,
    }
}

export function getDataSuccessNews(data) {
    return {
        type: FETCHING_DATA_SUCCESS_NEWS,
        data,
    }
}

export function getDataFailure() {
    return {
        type: FETCHING_DATA_FAILURE
    }
}

/*return fetch('link')
            .then(response => response.text())
            .then((response) => {
                parseString(response, function (err, result) {
                    console.log(response);
                    dispatch(getDataSuccessEvents(response))
                });
            }).catch((err) => {
            console.log('fetch', err)
        })*/

export function fetchDataNews() {
    return (dispatch) => {
        return Axios.get(endPointNews)
            .then(response => {
                dispatch(getDataSuccessNews(response.data))
            })
            .catch(error => {
                throw(error);
                console.log(error);
                // #ToDO dispatch the error action
                //dispatch(fetchStruttureError(error))
            });
    };
}

export function fetchDataEvents() {
    return (dispatch) => {
        return Axios.get(endPointEvents)
            .then(response => {
                dispatch(getDataSuccessEvents(response.data))
            })
            .catch(error => {
                throw(error);
                console.log(error);
                // #ToDO dispatch the error action
                //dispatch(fetchStruttureError(error))
            });
    };
}

export function fetchDataAlerts() {
    return (dispatch) => {
        return Axios.get(endPointAlerts)
            .then(response => {
                dispatch(getDataSuccessAlerts(response.data))
            })
            .catch(error => {
                throw(error);
                console.log(error);
                // #ToDO dispatch the error action
                //dispatch(fetchStruttureError(error))
            });
    };
}