import React, {Component} from 'react';
import { ScrollView, Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'
import { fetchDataNews, getData } from '../actions'
import { getValeFromXML } from '../utils'
import { styles } from "../style";


class News extends Component {

    componentDidMount(){
        this.props.getData();
        this.props.fetchDataNews();
    }

    onPressTitle(navigation, id) {
        navigation.navigate('NewsDetails',id);
    }

    render() {
        let list;
        let itemsObject;
        let itemsArray;
        let decode = require('unescape');
        if (this.props.appData.dataNews.length > 0) {
            itemsObject = getValeFromXML(this.props.appData.dataNews);
            itemsArray = Array.prototype.slice.call(itemsObject);
            console.log(itemsArray);
            list = itemsArray.map( (news,i) => {
                return <View key={i} >
                    <TouchableOpacity
                        style={styles.textContainer}
                        onPress={() => {this.onPressTitle(this.props.navigation, [i+1,'news'])}}
                    >
                        <Text style={styles.text}>{decode(news.childNodes[1].childNodes[0].data.replace(/&#039;/g, "'"))}</Text>
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
        fetchDataNews: () => dispatch(fetchDataNews()),
        getData: () => dispatch(getData())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(News)


