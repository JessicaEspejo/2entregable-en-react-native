import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';

const Header = ({ selectedSign, changeSelectedSign }) => {
  const titulo = selectedSign ? selectedSign.title : 'Zodiaco';

  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        {selectedSign ? (
          <TouchableOpacity onPress={() => changeSelectedSign(null)}>
            <Ionicons style={{ marginLeft: 5 }} name="arrow-back-sharp" size={40} color="white" />
          </TouchableOpacity>
        ) : null}
        <Text style={styles.title}>{titulo}</Text>
      </View>
    </View>
  );
};

export default Header;
