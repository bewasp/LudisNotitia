import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
export default class Tab3 extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{alignItems: 'center'}}>
                    <Image
                        style={{alignItems: 'center', width: 300, height: 300}}
                        source={require('./logo.png')}
                    />
                </View>
                <View style={{alignItems: 'center'}}>
                    <Text style={{fontSize: 30, fontWeight: 'bold'}}>O nas</Text>
                </View>
                <View style={{marginLeft: 40, marginRight: 20}}>
                    <Text>
                        Ludis Notitia to aplikacja mająca za zadanie łatwe gromadzenie
                        informacji ze świata sportu w jednej, wygodnej do użycia aplikacji
                        na telefon.
                        {'\n'}
                        {'\n'}W tym celu, wykorzystuje API udostępnione publicznie, które
                        robi zbiór ważnych artykułów sportowych z różnych portali
                        internetowych.
                        {'\n'}
                        {'\n'}
                        Aplikacja została stworzona przez trój-osobową drużynę: Jakuba
                        Ziębę, Szymona Bernady oraz Konrada Semika. Mamy nadzieję, że wam
                        się spodoba!
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
