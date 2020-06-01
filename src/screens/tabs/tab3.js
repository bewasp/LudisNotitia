import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
export default class Tab3 extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                 <Text>About us: </Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
