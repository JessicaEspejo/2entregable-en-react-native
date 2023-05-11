import React from 'react';
import { ScrollView, View, Text, Image } from 'react-native';

import { styles } from './styles';

const SignScreen = ({ selectedSign, changeSelectedSign }) => {
  return (
    <ScrollView>
      <Image
        source={selectedSign.imgBg}
        style={{ height: 200, width: '100%', resizeMode: 'cover' }}
      />
      <View style={styles.container}>
        <Text style={styles.fch}>{selectedSign.fch}</Text>
        <View style={styles.divider} />
        <Text style={styles.desc}>{selectedSign.desc}</Text>
      </View>
    </ScrollView>
  );
};

export default SignScreen;
