import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
} from 'react-native'
import { Images } from '../core/images';
import SvgUri from 'react-native-svg-uri';

interface SearchInputProps {
  value: string;
  placeholder: string;
  onChangeText?: any;
  style?: any;
}

interface SearchInputState {
  toggle: boolean;
}

export class SearchInput extends Component<SearchInputProps, SearchInputState> {

  state: SearchInputState = {
    toggle: false,
  };

  handleFocus() {
    this.setState({
      toggle: true
    });
  };

  handleBlur() {
    this.setState({
      toggle: false
    });
  };

  render() {
    const { placeholder, style } = this.props;
    const focusStyle = this.state.toggle ? styles.inputFocus : '';

    return (
      <View style={[styles.container, focusStyle, style]}>
        <SvgUri
          width='20'
          height='20'
          source={Images.SVG.SEARCH}
          style={styles.icon}
        />
        <TextInput
          {...this.props}
          style={styles.input}
          placeholder={placeholder}
          underlineColorAndroid='transparent'
          placeholderTextColor={'#abb3c1'}
          onFocus = {() => this.handleFocus()}
          onBlur = {() => this.handleBlur()}
          returnKeyType={'done'}
        />
      </View>

    )
  }
}

const styles: any = StyleSheet.create({
  container: {
    backgroundColor: '#edf0f5',
    marginVertical: 12,
    height: 56,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#5c5d60',
  },
  icon: {
    marginHorizontal: 16,
  },
  inputFocus: {
    borderColor: '#e6e6e6',
    borderWidth: 0.8,
  },
});