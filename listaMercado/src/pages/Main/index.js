import React, { useReducer, useState } from 'react';
import { View, Image, Text, TextInput, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import styles from '../../styles/styles';

import { sha256 } from 'react-native-sha256'


const Main = () => {
  const initialState = [];

  const reducer = (state, action) => {
    switch (action.type) {
      case 'ADD':
        return [...state, action.item];

      case 'CHECK':
        return state.map(item => {
          if (item.id === action.id) {
            return { ...item, check: !item.check }
          } else {
            return item;
          }
        });

      case 'REMOVE':
        return state.filter (item =>{
          return item.id !== action.id;
        });
      default:
        return state;
    }
  };
  const [product, setProduct] = useState('')
  const [state, dispatch] = useReducer(reducer, initialState)



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

            const hashId = await sha256(product);
        
            dispatch({
              type: 'ADD',
              item: {
                id: hashId,
                title: product,
                check: false
              },
            })
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
              dispatch({
                type: 'CHECK',
                id: item.id,
              })
            }}
          >
            <Text style={[styles.listItem, item.check ? styles.listItemChecked : '',]}>{item.title} </Text>
          </TouchableOpacity >
          <TouchableOpacity style={styles.removeItem}
          onPress={() =>{
            dispatch({
              type: 'REMOVE',
              id: item.id,
            })
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
