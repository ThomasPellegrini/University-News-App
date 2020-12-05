import React, {Component} from 'react';
import { ScrollView, Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'
import { fetchDataEvents, getData } from '../actions'
import {getValeFromXML} from "../utils";
import { styles } from "../style";


class Events extends Component {

    componentDidMount(){
        this.props.getData();
        this.props.fetchDataEvents();
    }

    onPressTitle(navigation, id) {
        navigation.navigate('NewsDetails',id);
    }

    render() {
        let list;
        let itemsObject;
        let itemsArray;
        let decode = require('unescape');
        if (this.props.appData.dataEvents.length > 0) {
            itemsObject = getValeFromXML(this.props.appData.dataEvents);
            itemsArray = Array.prototype.slice.call(itemsObject);
            list = itemsArray.map( (events,i) => {
                return <View key={i} >
                    <TouchableOpacity style={styles.textContainer} onPress={() => {this.onPressTitle(this.props.navigation, [i+1,'events'])}}>
                        <Text style={styles.text}>{decode(events.childNodes[1].childNodes[0].data.replace(/&#039;/g, "'"))}</Text>
                    </TouchableOpacity>
                </View>
            });
        }
        return (
                <View style={styles.container}>
                    {
                        this.props.appData.isFetching ?
                            <Text>Loading...</Text>:
                            list
                    }
                </View>
        );
    }
}

function mapStateToProps (state) {
    return {
        appData: state.appData
    }
}

function mapDispatchToProps (dispatch) {
    return {
        fetchDataEvents: () => dispatch(fetchDataEvents()),
        getData: () => dispatch(getData())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Events)