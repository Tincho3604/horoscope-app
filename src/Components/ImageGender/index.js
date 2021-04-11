import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import Male from '../../Assets/gen-1.png';
import Famele from '../../Assets/gen-3.png';
import TransGender from '../../Assets/gen-2.png';
import {storeGender, sweetAlert} from '../../Constants/constants';
const ImageGender = () => {
  const pathGenderImages = [
    {name: 'Masculino', path: Male},
    {name: 'Transgénero', path: TransGender},
    {name: 'Femenino', path: Famele},
  ];
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
