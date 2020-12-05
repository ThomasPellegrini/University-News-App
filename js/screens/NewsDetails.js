import React, {Component} from 'react';
import { ScrollView, Text, StyleSheet, Button, Dimensions } from 'react-native';
import {connect} from "react-redux";
import { getValeFromXML, getSpecificValeFromXML } from '../utils';
import HTML from 'react-native-render-html';
import { detailsStyle } from "../style";

class NewsDetails extends Component {

    render() {

        const id = this.props.navigation.state.params[0] - 1;
        let caller = this.props.navigation.state.params[1];

        let dataObject;
        let goBack;

        let decode = require('unescape');

        switch (caller) {
            case 'news':
                dataObject = getValeFromXML(this.props.appData.dataNews);
                goBack = 'News';
                break;
            case 'events':
                dataObject = getValeFromXML(this.props.appData.dataEvents);
                goBack = 'Events';
                break;
            case 'alerts':
                dataObject = getValeFromXML(this.props.appData.dataAlerts);
                goBack='Alerts';
                break;
        }
        const dataArray = Array.prototype.slice.call(dataObject);

        const title = dataArray[id].childNodes[1].childNodes[0].data;
        const description = dataArray[id].childNodes[5].childNodes[0].data;

        return (
            <ScrollView style={detailsStyle.container}>
                <Text style={detailsStyle.textTitle}> {decode(title.replace(/&#039;/g, "'"))} </Text>
                <HTML html={description} imagesMaxWidth={Dimensions.get('window').width} />
                <Button
                    title="INDIETRO"
                    onPress={() => {this.props.navigation.navigate(goBack)}}
                />
            </ScrollView>
        );
    }
}

function mapStateToProps (state) {
    return {
        appData: state.appData
    }
}


export default connect(
    mapStateToProps
)(NewsDetails)
