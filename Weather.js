import React from 'react';
import {StyleSheet, View, Text, StatusBar} from 'react-native';
import PropsTypes from 'prop-types';
import {LinearGradient} from "expo-linear-gradient";
import {MaterialCommunityIcons} from "@expo/vector-icons";

const weatherOptions = {
    Haze: {
        iconName: "weather-hail",
        gradient: ["#4da0b0", "#d39d38"],
        title: "Haze",
        subtitle: "don't go out side"    
    },
    Thunderstorm: {
        iconName: "weather-lightning",
        gradient: ["#3A6073", "#16222A"],
        title: "Thunderstorm",
        subtitle: "Thunderstorm is comming"   
    },
    Drizzle: {
        iconName: "weather-hail",
        gradient: ["#93F9B9", "#1D976C"],
        title: "Drizzle",
        subtitle: "you should bring umbrella"       
    },
    Rain: {
        iconName: "weather-rainy",
        gradient: ["#003973", "#E5E5BE"],
        title: "Rainny",
        subtitle: "you must bring umbrella"       
    },
    Snow: {
        iconName: "weather-snowy",
        gradient: ["#BBD2C5", "#536976"],
        title: "Snow",
        subtitle: "make snowman"       
    },
    Atmosphere: {
        iconName: "weather-hail",
        gradient: ["#3CD3AD", "#4CB8C4"],
        title: "Atmosphere",
        subtitle: "what is Atmosphere"       
    },
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#f7797d", "#FBD786", "#C6FFDD"],
        title: "Clear",
        subtitle: "just go out side"   
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#F7BB97", "#DD5E89"],
        title: "Clouds",
        subtitle: "Find a pretty cloud"      
    },
    Mist: {
       iconName: "weather-hail",
       gradient: ["#1FA2FF", "#12D8FA", "#A6FFCB"],
       title: "Mist",
       subtitle: "you should bring umbrella"        
    },
    Dust: {
       iconName: "weather-hail",
       gradient: ["#E7E9BB", "#403B4A"],
       title: "Clear",
       subtitle: "fuck China"        
    }
}

export default function Weather({temp, condition}) {
    return( 
        <LinearGradient
        // Button Linear Gradient
            colors={weatherOptions[condition].gradient}
            style={styles.container}
        >
            <StatusBar barStyle="light-content"/>
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons 
                    size={96} 
                    name={weatherOptions[condition].iconName}
                    color="#fff" 
                />
                <Text style={styles.temp}>{temp}°</Text>
            </View>
            <View style={{...styles.halfContainer, ...styles.textContainer}}>
                <View>
                    <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                    <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
                </View>
            </View>
        </LinearGradient>
    );
}

Weather.PropsTypes = {
    temp: PropsTypes.number.isRequired,
    condition: PropsTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds" ,
        "Haze",
        "Mist",
        "Dust" 
    ]).isRequired
};

const styles = StyleSheet.create({
   container: {
       flex: 1,
       justifyContent: "center",
       alignItems: "center",
   },
   temp: {
        fontSize: 42,
        color: "#fff",
   },
   halfContainer: {
       flex: 1,
       justifyContent: "center",
       alignItems: "center"
   },
   title: {
       color: "#fff",
       fontSize: 44,
       fontWeight: "300",
       marginBottom: 10
   },
   subtitle: {
       fontWeight: "600",
       color: "#fff",
       fontSize: 24
   },
   textContainer: {
       paddingHorizontal: 20,
       alignItems: "flex-start"
   }
})