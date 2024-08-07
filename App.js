import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';
import {List} from 'react-native-paper'

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    titulo: 'Primeiro Item',
    descricao: 'Descrição do Primeiro Item'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    titulo: 'Segundo Item',
    descricao: 'Descrição do Segundo Item'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    titulo: 'Terceiro Item',
    descricao: 'Third Item Description'
  },
];

const Item = ({title}) => {
  console.warn(title)
  return(
  <List.Item
    title={title.titulo}
    description={title.descricao}
    left={props => <List.Icon {...props} icon="folder" />}
  />
)
};

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;