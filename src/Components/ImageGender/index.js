import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import Male from '../../Assets/gen-1.png';
import Famele from '../../Assets/gen-2.png';
import TransGender from '../../Assets/gen-3.png';
const ImageGender = () => {
  const pathGenderImages = [
    {name: 'Male', path: Male},
    {name: 'Famele', path: Famele},
    {name: 'Transgender', path: TransGender},
  ];
  return (
    <>
      {pathGenderImages.map((item, index) => {
        return (
          <TouchableOpacity key={index}>
            <Image source={item.path} style={styles.imgContainer} />
          </TouchableOpacity>
        );
      })}
    </>
  );
};

export default ImageGender;
