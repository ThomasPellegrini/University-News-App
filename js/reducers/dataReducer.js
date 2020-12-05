import {
    FETCHING_DATA, FETCHING_DATA_SUCCESS_ALERTS, FETCHING_DATA_FAILURE, FETCHING_DATA_SUCCESS_NEWS,
    FETCHING_DATA_SUCCESS_EVENTS
} from '../constants'
const initialState = {
    dataEvents: [],
    dataNews: [],
    dataAlerts: [],
    dataFetched: false,
    isFetching: false,
    error: false
};

export default function dataReducer (state = initialState, action) {
    switch (action.type) {
        case FETCHING_DATA:
            return {
                ...state,
                isFetching: true
            };
        case FETCHING_DATA_SUCCESS_NEWS:
            const newState = {
                ...state,
                isFetching: false,
                dataNews: action.data
            };
            return newState
        case FETCHING_DATA_SUCCESS_EVENTS:
            const newStateEvents = {
                ...state,
                isFetching: false,
                dataEvents: action.data
            };
            return newStateEvents;
        case FETCHING_DATA_SUCCESS_ALERTS:
            const newStateAlerts = {
                ...state,
                isFetching: false,
                dataAlerts: action.data
            };
            return newStateAlerts;
        case FETCHING_DATA_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: true
            };
        default:
            return state
    }
}