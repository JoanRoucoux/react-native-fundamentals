import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

export class Finish extends React.Component {
  static navigationOptions = {
    header: null,
  };

  exitQuiz = () => {
    this.props.navigation.navigate('Home');
  };

  render() {
    let userScore = this.props.route.params.score;
    let questionsMissed = this.props.route.params.missed;
    let totalQuestions = this.props.route.params.questions;

    return (
      <View style={styles.container}>
        <Text>Your quiz score was {userScore}</Text>
        <Text>
          You missed on {questionsMissed} out of {totalQuestions} questions
        </Text>

        <TouchableHighlight onPress={this.exitQuiz} style={styles.button}>
          <Text>Finish Quiz</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '10%',
  },
});
