import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const SearchComponent = ({ onChangeText, value }) => {
    return (
        <TextInput
            style={styles.container}
            placeholder="Search Here"
            onChangeText={text => onChangeText(text)}
            value={value}
        />
    );
}

export default SearchComponent;

const styles = StyleSheet.create({
    container: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        textAlign: 'center',
        width:'98%',
        borderRadius:20
    }
})