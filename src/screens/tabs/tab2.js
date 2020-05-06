import React, { Component } from 'react';
import { Container, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
export default class Tab2 extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <List>
                        <ListItem thumbnail>
                            <Left>
                                <Thumbnail square source={{ uri: 'https://cdn11.bigcommerce.com/s-2sxhiat0li/images/stencil/1280x1280/products/182/588/GL7X_AD__99451.1461966775.jpg?c=2&imbypass=on' }} />
                            </Left>
                            <Body>
                                <Text>NBA news</Text>
                                <Text note numberOfLines={1}>New world record in... </Text>
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
