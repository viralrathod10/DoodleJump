import React from "react";
import { StyleSheet, Text, View, Image } from 'react-native';
import Position from "react-native/Libraries/Components/Touchable/Position";

export default function DoodlerMain({dLeft, dBottom}){

    return(
        /*
        <View
        style={{
        alignItems: "center",
        justifyContent: "center",
        width: 50,
        height: 100,
        backgroundColor: "green",
        left: dLeft,
        bottom: dBottom
        }}/>
        */
        
        
        <Image
        style={{
        alignItems: "center",
        justifyContent: "center",
        resizeMode: "contain",
        width: 100,
        left: dLeft,
        bottom: dBottom,
        position: "absolute"
        }}
        source={require("./assets/doodler.webp")}/>
        
        
         
        )
}
