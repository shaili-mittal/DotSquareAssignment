import React from 'react';
import { View, StyleSheet, FlatList, StatusBar,Text } from 'react-native';
import { connect } from 'react-redux';

import { fetchList } from '../redux';
import SearchComponent from '../component/SearchComponent';
import CardComponent from '../component/CardComponent'

class Home extends React.Component {

    state = {
        value: '',
        songList: []
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.songList !== prevState.songList) {
            return {
                songList: nextProps.songList
            }
        }
        return null
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.songList !== this.props.songList) {
            this.setState({
                songList: this.props.songList
            })
        }
    }

    onChangeText = (text) => {
        const { fetchListFunc } = this.props;
        this.setState({
            value: text
        })
        fetchListFunc(text);
    }

    renderItem = ({ item }) => {
        return <CardComponent item={item} />
    }

    renderEmptyContainer = () => {
        return (
            <View style = {styles.emptyContainer}>
                <Text>Start typing to search</Text>
            </View>
        )
    }

    render() {
        const { value, songList } = this.state;
        return (
            <View style={styles.container}>
                <SearchComponent
                    onChangeText={this.onChangeText}
                    value={value}
                />

                <FlatList
                    data={songList}
                    renderItem={this.renderItem}
                    ListEmptyComponent={this.renderEmptyContainer()}
                    keyExtractor={(item, index) => `${index}`}
                />
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        songList: state.songList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchListFunc: (value) => { dispatch(fetchList(value)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: StatusBar.currentHeight
    },
    emptyContainer:{
        flex:1,
        alignItems:"center",
        marginTop:250
    }
});