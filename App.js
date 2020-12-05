/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react'
import { TouchableHighlight, View, Text, StyleSheet } from 'react-native'

import { connect } from 'react-redux'
import { fetchData } from './js/actions'
import { Tab } from './js/navigation'

let styles;

const App = (props) => {
    const {
        container,
        text,
        button,
        buttonText
    } = styles;

    return (
       <Tab />
    )
};

styles = StyleSheet.create({
    container: {
        marginTop: 100
    },
    text: {
        textAlign: 'center'
    },
    button: {
        height: 60,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0b7eff'
    },
    buttonText: {
        color: 'white'
    }
});

function mapStateToProps (state) {
    return {
        appData: state.appData
    }
}

function mapDispatchToProps (dispatch) {
    return {
        fetchData: () => dispatch(fetchData())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
