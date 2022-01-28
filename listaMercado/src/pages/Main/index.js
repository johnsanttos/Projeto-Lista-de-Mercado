import React, { useReducer, useState } from 'react';
import { View, Image, Text, TextInput, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import styles from '../../styles/styles';
import useMarketList from '../../hooks/useMarketList';
import { sha256 } from 'react-native-sha256'


const Main = () => {

  const [product, setProduct] = useState('')
  const [state, addItem, checkItem, removeItem] = useMarketList()


  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          autoCapitalize='sentences'
          style={styles.input}
          placeholder='Adicionar produto'
          value={product}
          onChangeText={text => {
            setProduct(text)

          }}
        />

        <TouchableOpacity style={styles.addButton}
          onPress={async () => {
            addItem(product)
            setProduct('')
          }}>
          <Text style={styles.textButton}>+</Text>
        </TouchableOpacity>

      </View>
      <FlatList
        data={state}
        renderItem={({ item }) => (
          <View style={styles.itemsContainer}>
            <TouchableOpacity
              style={styles.itemCheckButton}
              onPress={() => {
                checkItem(item.id)
              }}
            >
              <Text style={[styles.listItem, item.check ? styles.listItemChecked : '',]}>{item.title} </Text>
            </TouchableOpacity >
            <TouchableOpacity style={styles.removeItem}
              onPress={() => {
                removeItem(item.id)
              }}
            >
              <Text style={styles.removeItemText} >Remover</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      <View>
      </View>
    </View>
  );
};
export default Main;
