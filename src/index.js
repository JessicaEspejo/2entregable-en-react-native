import { useFonts } from 'expo-font';
import React, { useState } from 'react';
import { View, ActivityIndicator } from 'react-native';

import { Header } from './components';
import { HomeScreen, SignScreen } from './screens/index';
import { styles } from './styles';

const App = () => {
  const [selectedSign, setSelectedSign] = useState(null);

  const changeSelectedSign = (item) => {
    setSelectedSign(item);
  };

  const [loaded] = useFonts({
    'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
    'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
    'BraahOne-Regular': require('../assets/fonts/BraahOne-Regular.ttf'),
  });

  if (!loaded) {
    return <ActivityIndicator color="black" size={30} />;
  }

  const Contenedor = () => {
    return selectedSign ? (
      <SignScreen selectedSign={selectedSign} changeSelectedSign={changeSelectedSign} />
    ) : (
      <HomeScreen changeSelectedSign={changeSelectedSign} />
    );
  };

  return (
    <View style={styles.container}>
      <Header selectedSign={selectedSign} changeSelectedSign={changeSelectedSign} />
      <Contenedor />
    </View>
  );
};

export default App;
