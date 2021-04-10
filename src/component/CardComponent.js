import React from 'react';
import { View, StyleSheet, Text } from 'react-native'

const CardComponent = ({ item }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.titleTrack}>{item.trackName}</Text>
            <Text style={styles.artist} numberOfLines={1}>{item.artistName}</Text>
        </View>
    )
}

export default CardComponent

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#efefef',
        padding: 10,
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 10,
        width:'98%'
    },

    titleTrack: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
        marginBottom: 5
    },

    artist: {
        fontSize: 16,
        color: 'black',
    }

})