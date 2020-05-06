import React, { Component } from 'react';
import { Container, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
export default class Tab1 extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <List>
                        <ListItem thumbnail>
                            <Left>
                                <Thumbnail square source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Football_%28soccer_ball%29.svg/1200px-Football_%28soccer_ball%29.svg.png' }} />
                            </Left>
                            <Body>
                                <Text>Football news</Text>
                                <Text note numberOfLines={1}>It's hard time for... </Text>
                            </Body>
                            <Right>
                                <Button transparent>
                                    <Text>View more</Text>
                                </Button>
                            </Right>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        );
    }
}
