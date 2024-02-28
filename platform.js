import React from "react";
import { StyleSheet, Text, View, Image } from 'react-native';

export default function PlatformMain({pLeft, pBottom}){

    return(
        <View
        style={{
        alignItems: "center",
        justifyContent: "center",
        width: 100,
        height: 20,
        borderRadius: 10,
        backgroundColor: "green",
        left: pLeft,
        bottom: pBottom,
        position: "absolute",
        }}/>
    )
}