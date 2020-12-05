import React from "react";
import { TabNavigator, StackNavigator } from "react-navigation";

import News from './screens/News';
import Events from './screens/Events';
import Alerts from './screens/Alerts';
import NewsDetails from './screens/NewsDetails';


export const NewsNavigator = StackNavigator(
    {
        News: {
            screen: News,
        },
        NewsDetails: {
            screen: NewsDetails
        }
    },{
        // Let each screen handle the header and navigation
        headerMode: "none"
    }
);

export const Tab = TabNavigator({
    News: {
        screen: NewsNavigator,
    },
    Events: {
        screen: Events,
    },
    Alerts: {
        screen: Alerts,
    }
});

