import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';
import { Images } from './core/images';
import { Icon } from './core/models';

interface AppComponentProps {
  icons: Icon[];
}

export class AppComponent extends Component<AppComponentProps> {

  renderIcon(icon: Icon) {
    return (
      <Image
        style={styles.image}
        source={Images[icon.key]}
      />
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          numColumns={10}
          showsVerticalScrollIndicator={false}
          data={this.props.icons}
          renderItem={({item}) => this.renderIcon(item)}
          keyExtractor={(item) => `${item.key}-${item.name}`}
        />
      </View>
    );
  }

}

const styles: any = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    margin: 16,
  },
  image: {
    width: 38,
    height: 38,
  },
});