import React from 'react';
import { TouchableOpacity, FlatList, View, Text, Image } from 'react-native';

import { styles } from './styles';
import { data } from '../../data/data';

const HomeScreen = ({ changeSelectedSign }) => {
  const SignCard = ({ item }) => {
    return (
      <TouchableOpacity style={styles.card} onPress={() => changeSelectedSign(item)}>
        <Image source={item.imgUrl} style={styles.img} />
        <View>
          <Text style={styles.cardTitle}>{item.title}</Text>
          <View style={{ height: 3, width: '100%', backgroundColor: 'red' }} />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selecciona un Signo</Text>

      <FlatList
        numColumns={2}
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <SignCard item={item} />}
      />

      <Text style={styles.detailText}>Click en un signo para ver detalles</Text>
    </View>
  );
};

export default HomeScreen;
