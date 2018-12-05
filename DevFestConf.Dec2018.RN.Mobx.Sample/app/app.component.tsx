import React from 'react';
import { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Modal,
  Text,
} from 'react-native';
import { Images } from './core/images';
import { Icon } from './core/models';
import { SearchInput, TabChooserComponent } from './components';

interface AppComponentProps {
  icons: Icon[];
  searchString: string;
  isModalVisible: boolean;
  selectedIcon: Icon;
  isOutline: boolean;

  setIsOutline: (value: boolean) => void;
  onSetSearchString: (text: string) => void;
  onIcon: (icon: Icon) => void;
  onCloseModal: () => void;
}

export class AppComponent extends Component<AppComponentProps> {

  renderIcon(icon: Icon) {
    return (
      <TouchableOpacity onPress={() => this.props.onIcon(icon)}>
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

  renderBackground() {
    return <View style={styles.background}/>;
  }

  renderModal() {
    return (
      <Modal
        animationType='fade'
        transparent={true}
        visible={this.props.isModalVisible}
        onRequestClose={() => 1}>
        {this.renderBackground()}
        <TouchableOpacity style={styles.modalContainer} onPress={this.props.onCloseModal}>
          <View style={styles.modalContent}>
            <Image source={Images[this.props.selectedIcon.key]}/>
            <Text style={styles.iconText}>{this.props.selectedIcon.name}</Text>
          </View>
        </TouchableOpacity>
      </Modal>
    )
  }

  render() {
    const numberOfCols = this.getNumberOfCols();

    return (
      <View style={styles.container}>
        <TabChooserComponent
          isOutline={this.props.isOutline}
          onChoose={(value: boolean) => this.props.setIsOutline(value)}
        />
        <SearchInput
          value={this.props.searchString}
          placeholder={`Search ${this.props.icons.length} icons`}
          onChangeText={(text: string) => this.props.onSetSearchString(text)}
        />
        <FlatList
          numColumns={numberOfCols}
          showsVerticalScrollIndicator={false}
          data={this.props.icons}
          renderItem={({item}) => this.renderIcon(item)}
          keyExtractor={(item) => `${item.key}-${item.name}`}
        />
        {this.renderModal()}
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
  modalContainer: {
    flex: 1,
    position: 'absolute',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    ...StyleSheet.absoluteFillObject,
  },
  modalContent: {
    width: 300,
    height: 300,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    flex: 1,
    backgroundColor: 'gray',
    opacity: 0.8,
  },
  iconText: {
    fontSize: 16,
    marginTop: 16,
  },
});