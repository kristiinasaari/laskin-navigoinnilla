import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';



export default function History({ route }) {
  const { data } = route.params;
  
  return(
    <View style={styles.container}>
      <Text>Previous calculations</Text>
      <FlatList
        
        data={data}
        keyExtractor={ (item, index ) => index}
        renderItem={({ item }) =>
          <Text>{item}</Text>

        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {                              
    flex: 1,                                
    backgroundColor: '#fff',
    alignItems: 'center',                   
    justifyContent: 'center',
    marginTop: 10
  }
});