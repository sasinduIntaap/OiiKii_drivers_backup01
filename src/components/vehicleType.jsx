import React, { Component } from 'react'
import { Text, View,StyleSheet } from 'react-native'


const vehicleType = ({text,svgfile}) => {
    return (
        <View style={styles.scanCont}>
            <View style={{borderColor: "black",height: 90,width: '40%',
            borderWidth: 0.5,
            borderRadius: 7.5,
            }}>
            
            <Text>{text}</Text>
            </View>
        </View>
    );
    }

const styles = StyleSheet.create({
    scanCont: {
        flexDirection: "row",
        height: 110,
        alignItems: "center",
      },
      scan: {
        fontFamily: "Roboto",
        fontSize: 12,
        fontWeight: "700",
        textAlign: "center",
        lineHeight: 14,
        top: 15,
      },
});

export default vehicleType;