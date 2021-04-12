import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import {storeGender, pathGenderImages} from '../../Constants/constants';
const ImageGender = () => {
  return (
    <>
      {pathGenderImages.map((item, index) => {
        return (
          <TouchableOpacity key={index} onPress={() => storeGender(item.name)}>
            <Image source={item.path} style={styles.imgContainer} />
          </TouchableOpacity>
        );
      })}
    </>
  );
};

export default ImageGender;
