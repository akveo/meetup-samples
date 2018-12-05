import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  Image,
} from 'react-native';
import { Images } from '../core/images';

interface TabChooserComponentProps {
  isOutline: boolean;

  onChoose: (value: boolean) => void;
}

interface TabChooserComponentState {
  isOutline: boolean;
}

export class TabChooserComponent extends Component<TabChooserComponentProps, TabChooserComponentState> {

  static defaultProps = {
    isOutline: true
  };

  state: TabChooserComponentState = {
    isOutline: this.props.isOutline,
  };

  onChoose(value: boolean) {
    this.setState({ isOutline: value }, this.props.onChoose(this.state.isOutline));
  }

  render() {
    const outlineStyle = this.state.isOutline ? styles.chosenStyle : styles.notChosenStyle;
    const filledStyle = this.state.isOutline ? styles.notChosenStyle : styles.chosenStyle;

    return (
      <View style={styles.container}>
        <TouchableOpacity style={[styles.button, outlineStyle]} onPress={() => this.onChoose(true)}>
          <Image style={styles.image} source={Images.STAR_OUTLINE}/>
          <Text>OUTLINE</Text>
        </TouchableOpacity>
        <View style={styles.separator}/>
        <TouchableOpacity style={[styles.button, filledStyle]} onPress={() => this.onChoose(false)}>
          <Image style={styles.image} source={Images.STAR_OUTLINE}/>
          <Text>FILLED</Text>
        </TouchableOpacity>
      </View>
    )
  }

}

const styles: any = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 12,
    height: 56,
    borderRadius: 5,
    borderColor: '#000',
    borderWidth: 1,
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  separator: {
    height: 56,
    width: 2,
    backgroundColor: '#000',
  },
  image: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  notChosenStyle: {
    backgroundColor: '#b0b4ba'
  },
  chosenStyle: {
    backgroundColor: 'transparent'
  },
});