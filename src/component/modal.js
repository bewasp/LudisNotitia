import React, { Component } from 'react';
import { Modal, Share } from 'react-native';
import { WebView } from 'react-native-webview'
import {Container, Header, Content, Body, Left, Icon, Right, Title, Button} from 'native-base';


export default class ModalComponent extends Component {

    constructor(props) {
        super(props);
    }

    handleClose = () => {
        return this.props.onClose();
    }

    handleShare = () => {
        const {url, title} = this.props.articleData;
        message = `${title}\n\nRead More @${url}\n\nShared via LudisNotitia`;
        return Share.share(
            {title, message, url: message},
            {dialogTitle:`Share ${title}`}
        );
    }

    render() {
        const { showModal, articleData } = this.props;
        const { url } = articleData;
        if( url != undefined ) {
            return (
                <Modal
                    animationType="slide"
                    transparent
                    visible={showModal}
                    onRequestClose={this.handleClose}>

                    <Container style={{margin:15, marginBottom:0, backgroundColor:'#fff'}}>
                        <Header style={{backgroundColor:'#009387'}}>
                            <Left>
                                <Button onPress={this.handleClose} transparent>
                                    <Icon name="close" style={{color: 'white', fontSize: 12}}/>
                                </Button>
                            </Left>
                            <Body>
                                <Title children={articleData.title} style={{color: 'white'}}/>
                            </Body>
                            <Right>
                                <Button onPress={this.handleShare} transparent>
                                    <Icon name="share" style={{color: 'white', fontSize: 12}}/>
                                </Button>
                            </Right>
                        </Header>
                        <Content contentContainerStyle={{flexGrow: 1}}>
                            <WebView style={{flex: 1}}
                                     source={{uri:url}}
                                     onError={this.handleClose}
                                     startInLoadingState={true}
                                     scalesPageToFit={true}
                            />
                        </Content>
                    </Container>
                </Modal>
            );
        } else {
            return null;
        }
    }
}
