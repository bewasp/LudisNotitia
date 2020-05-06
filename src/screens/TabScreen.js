import React, { Component } from 'react';
import { StyleSheet} from "react-native";
import { Container, Header, Left, Body, Right, Title, Tab, Tabs } from 'native-base';
import Tab1 from './tabs/tab1';
import Tab2 from './tabs/tab2';
import Tab3 from './tabs/tab3';

export default class TabsExample extends Component {
    render() {
        return (
            <Container>
                <Header style={{backgroundColor:'#000000'}} hasTabs>
                    <Left/>
                      <Body>
                         <Title>Ludis Notitia</Title>
                      </Body>
                    <Right />
                </Header>
                <Tabs tabBarUnderlineStyle={{backgroundColor:'white'}}>
                    <Tab tabStyle={{backgroundColor:'#808080'}}
                         activeTabStyle={{backgroundColor:'#000000'}}
                         textStyle={{color:'white'}}
                         heading="Football">
                        <Tab1 />
                    </Tab>
                    <Tab tabStyle={{backgroundColor:'#808080'}}
                         activeTabStyle={{backgroundColor:'#000000'}}
                         textStyle={{color:'white'}}
                         heading="NBA">
                        <Tab2 />
                    </Tab>
                    <Tab tabStyle={{backgroundColor:'#808080'}}
                         activeTabStyle={{backgroundColor:'#000000'}}
                         textStyle={{color:'white'}}
                         heading="NHL">
                        <Tab3 />
                    </Tab>
                </Tabs>
            </Container>
        );
    }
}

