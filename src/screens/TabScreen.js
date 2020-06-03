import React, {Component} from 'react';
import {
    Container,
    Header,
    Left,
    Body,
    Right,
    Title,
    Tab,
    Tabs,
} from 'native-base';
import Tab1 from './tabs/tab1';
import Tab2 from './tabs/tab2';
import Tab3 from './tabs/tab3';

export default class TabsExample extends Component {
    render() {
        return (
            <Container>
                <Header style={{backgroundColor: '#e2ab24'}} hasTabs>
                    <Left />
                    <Body>
                        <Title>Ludis Notitia</Title>
                    </Body>
                    <Right />
                </Header>
                <Tabs tabBarUnderlineStyle={{backgroundColor: 'white'}}>
                    <Tab
                        tabStyle={{backgroundColor: '#c2a87c'}}
                        activeTabStyle={{backgroundColor: '#eac067'}}
                        textStyle={{color: 'white'}}
                        heading="Sport news">
                        <Tab1 />
                    </Tab>
                    <Tab
                        tabStyle={{backgroundColor: '#c2a87c'}}
                        activeTabStyle={{backgroundColor: '#eac067'}}
                        textStyle={{color: 'white'}}
                        heading="Standings">
                        <Tab2 />
                    </Tab>
                    <Tab
                        tabStyle={{backgroundColor: '#c2a87c'}}
                        activeTabStyle={{backgroundColor: '#eac067'}}
                        textStyle={{color: 'white'}}
                        heading="About us">
                        <Tab3 />
                    </Tab>
                </Tabs>
            </Container>
        );
    }
}
