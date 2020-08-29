import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';

export class Video extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    listLoaded: false,
  };

  componentDidMount() {
    this.initPage();
  }

  initPage = async () => {
    try {
      const response = await fetch(
        'https://www.googleapis.com/youtube/v3/search?part=snippet&q=pluralsight&type=video&key=AIzaSyB3LwbghCMWqiZgE1rUWsOvBk8qNjdlRGg'
      );
      const responseJson = await response.json();
      this.setState({
        listLoaded: true,
        videoList: Array.from(responseJson.items),
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View>
        {this.state.listLoaded && (
          <View style={{ paddingTop: 30 }}>
            <FlatList
              data={this.state.videoList}
              renderItem={({ item }) => (
                <TubeItem
                  id={item.id.videoId}
                  title={item.snippet.title}
                  imageSrc={item.snippet.thumbnails.high.url}
                  navigate={navigate}
                />
              )}
            />
          </View>
        )}
        {!this.state.listLoaded && (
          <View style={{ paddingTop: 30 }}>
            <Text>LOADING</Text>
          </View>
        )}
      </View>
    );
  }
}

export class TubeItem extends React.Component {
  onPress = () => {
    this.props.navigate('VideoDetails', { ytubeId: this.props.id });
  };

  render() {
    return (
      <TouchableWithoutFeedback onPress={this.onPress}>
        <View style={{ paddingTop: 20, alignItems: 'center' }}>
          <Image
            style={{ width: '100%', height: 200 }}
            source={{ uri: this.props.imageSrc }}
          />
          <Text>{this.props.title}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
