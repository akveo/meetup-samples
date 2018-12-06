import React, { Component } from 'react';
import {
  Image,
  View,
  TouchableOpacity,
  FlatList,
  Modal,
  StyleSheet,
  Text,
  Dimensions,
} from 'react-native';
import { Images } from '../core/images';
import { Icon, IconType } from '../core/models';
import { SearchInput } from './searchInput.component';

interface IconsSearcherComponentProps {
  icons: Icon[];
  selectedIcon: Icon;
  isModalVisible: boolean,
  searchString: string;
  isOutline: boolean;

  onSetSearchString: (text: string) => void;
  onIcon: (icon: Icon) => void;
  onCloseModal: () => void;
}

export class IconsSearcherComponent extends Component<IconsSearcherComponentProps> {

  renderIcon(icon: Icon) {
    const iconType: IconType = this.props.isOutline ? IconType.OUTLINE : IconType.FILL;
    return (
      <TouchableOpacity onPress={() => this.props.onIcon(icon)} style={styles.iconContainer}>
        <Image
          style={styles.image}
          source={Images[iconType][icon.key]}
        />
      </TouchableOpacity>
    )
  }

  getNumberOfCols(): number {
    const width = Dimensions.get('screen').width;
    return Math.floor(width / 83);
  }

  renderBackground() {
    return <View style={styles.background}/>;
  }

  renderModal() {
    const iconType: IconType = this.props.isOutline ? IconType.OUTLINE : IconType.FILL;
    return (
      <Modal
        animationType='fade'
        transparent={true}
        visible={this.props.isModalVisible}
        onRequestClose={() => 1}>
        {this.renderBackground()}
        <TouchableOpacity style={styles.modalContainer} onPress={this.props.onCloseModal}>
          <View style={styles.modalContent}>
            <Image source={Images[iconType][this.props.selectedIcon.key]}/>
            <Text style={styles.iconText}>{this.props.selectedIcon.name}</Text>
          </View>
        </TouchableOpacity>
      </Modal>
    )
  }

  render() {
    const numberOfCols = this.getNumberOfCols();

    return (
      <View>
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
          style={styles.iconList}
        />
        {this.renderModal()}
      </View>
    )
  }

}

const styles: any = StyleSheet.create({
  iconContainer: {
    width: 83,
    height: 83,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.4,
    borderRadius: 5,
    borderColor: '#000',
    margin: 6,
  },
  image: {
    width: 40,
    height: 40,
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
  iconList: {
    marginBottom: 150,
  },
});
