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
    const focusStyle = this.state.toggle ? styles.inputFocusContainer : {};
    const inputFocusStyle = this.state.toggle ? styles.inputFocus : styles.input;
    const icon = this.state.toggle ? Images.SVG.SEARCH_BlUE : Images.SVG.SEARCH;

    return (
      <View style={[styles.container, focusStyle, style]}>
        <SvgUri
          width='20'
          height='20'
          source={icon}
          style={styles.icon}
        />
        <TextInput
          {...this.props}
          style={inputFocusStyle}
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

const COMMON_FOCUS_STYLE = {
  flex: 1,
  fontSize: 16,
};

const styles: any = StyleSheet.create({
  container: {
    backgroundColor: '#EDF0F5',
    marginVertical: 12,
    height: 56,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    ...COMMON_FOCUS_STYLE,
    color: '#A7B4CC',
  },
  inputFocus: {
    ...COMMON_FOCUS_STYLE,
    color: '#3366FF',
  },
  icon: {
    marginHorizontal: 16,
  },
  inputFocusContainer: {
    borderColor: '#e6e6e6',
    borderWidth: 0.8,
  },
});