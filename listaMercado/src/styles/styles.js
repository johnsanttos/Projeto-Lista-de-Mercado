import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fbec5d',
  },

  inputContainer: {
    flexDirection: 'row',
    margin: 10,
  },

  input: {
    flex: 1,
    width: '85%',
    fontSize: 30,
    color: '#000',
    backgroundColor: '#fff',
    borderRadius: 5,
    fontStyle: 'italic'
  },
  addButton: {
    width: '20%',
    alignItems: 'center',
    alignSelf: 'center'

  },
  itemCheckButton:{
flex:1
  },
  textButton: {
    color: '#ff0000',
    fontSize: 60
  },
  listItem:{
    color: '#000',
    padding:10,
    fontSize: 25,
    margin: 3,
    fontStyle: 'italic'
  },
  listItemChecked:{
    textDecorationLine: 'line-through'
  },
  itemsContainer:{
flexDirection: 'row'
  },
  removeItem:{
    alignItems: 'center',
    alignSelf: 'center',
    marginHorizontal: 15
  },
  removeItemText:{
    color: '#ff0000',
    fontSize: 13
  }
})