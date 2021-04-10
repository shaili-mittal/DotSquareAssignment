import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

const Angle = () => {

    const calculateAngle = () => {
        let hour = 4
        let min = 13
        let angleForHour = (60 * hour + min) * 0.5;
        let angleForMinute = min * 6;

        let angle = angleForHour - angleForMinute

        return getMinAngle(angle, 360 - angle)
    }

    const getMinAngle = (x, y) => {
        return x > y ? y : x;
    }

    return (
        <View style={styles.container}>
            <Text>Time - 4:13 O’clock</Text>
            <Text>Angle - {calculateAngle()} degrees</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center'
    },
});


export default Angle;