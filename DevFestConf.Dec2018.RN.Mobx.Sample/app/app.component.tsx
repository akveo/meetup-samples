import React from 'react';
import { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { Images } from './core/images';
import { Icon } from './core/models';
import { SearchInput } from './components';

interface AppComponentProps {
  icons: Icon[];

  onIcon: () => void;
}

export class AppComponent extends Component<AppComponentProps> {

  renderIcon(icon: Icon) {
    return (
      <TouchableOpacity onPress={this.props.onIcon}>
        <Image
          style={styles.image}
          source={Images[icon.key]}
        />
      </TouchableOpacity>
    )
  }

  getNumberOfCols(): number {
    const width = Dimensions.get('screen').width;
    return Math.floor(width / 38);
  }

  render() {
    const numberOfCols = this.getNumberOfCols();

    return (
      <View style={styles.container}>
        <SearchInput
          placeholder={'Test'}
          onChangeText={(text: string) => 1}
        />
        <FlatList
          numColumns={numberOfCols}
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
    backgroundColor: '#ffffff',
    margin: 16,
  },
  image: {
    width: 38,
    height: 38,
  },
});