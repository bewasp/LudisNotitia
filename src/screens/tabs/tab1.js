import React, { Component } from 'react';
import { Alert, View, ActivityIndicator } from 'react-native';
import { Container, Content, List, Text } from 'native-base';
import {getArticles} from '../../service/news';

import  DataItem  from '../../component/dataItem';

export default class Tab1 extends Component {

    constructor(props) {
        super();

        this.state = {
            isLoading: true,
            data: null
        }
    }

    componentDidMount() {
        getArticles().then(data => {
            this.setState({
                isLoading: false,
                data: data
            });
        }, error => {
                Alert.alert('Error', 'Something went wrong!');
            }
        )
    }

    render() {
        console.log(this.state.data);

        let view = this.state.isLoading ? (
            <View>
                <ActivityIndicator animating={this.state.isLoading} />
                <Text style={{marginTop: 10}}>Please wait...</Text>
            </View>
        ) : (
            <List
                dataArray = {this.state.data}
                renderRow = {(item) => {
                    return (
                        <DataItem data = {item} />
                    )
                }} />
        )

        return (
            <Container>
                <Content>
                    {view}
                </Content>
            </Container>
        );
    }
}
