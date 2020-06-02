import React, {Component} from 'react';
import {SafeAreaView, View, Text, FlatList, StyleSheet} from 'react-native';
export default class Tab2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      table: [],
    };
  }

  fetcher = () => {
    fetch('https://api-football-v1.p.rapidapi.com/v2/leagueTable/524', {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
        'x-rapidapi-key': 'db09211c6dmsh39afc03aa13ade7p12eb3ejsnbef381acac5d',
      },
    })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.fetcher();
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={this.table}
          renderItem={({item}) => (
            <View>
              <Text>
                Group: {item.group}
                Rank: {item.rank}
                Team name: {item.teamName}
                Logo: {item.logo}
                Form: {item.forme}
                Goals difference: {item.goalsDiff}
                Points: {item.points}
                Matches played: {item.all.matchsPlayed}
                Wins: {item.all.win}
                Draws: {item.all.draw}
                Loses: {item.all.lose}
              </Text>
            </View>
          )}
          keyExtractor={(item) => item.group}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
