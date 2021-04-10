import React from 'react';
import { Text, View, StyleSheet } from 'react-native'
import withProgressBar from './withProgressBar';


class Test extends React.Component {
    render() {
        return (
            <View style={[styles.container, styles.horizontal, this.props.backGroundColour]}>
                <Text>{this.props.children}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center'

    },
    horizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
    }
});

export default withProgressBar(Test, "large", "#000000")