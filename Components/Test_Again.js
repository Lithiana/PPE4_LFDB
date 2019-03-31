// -----------------------------------------------------------
// un components = un fichier = un export par default
// -----------------------------------------------------------


// -------------------------IMPORT------------------------------
import React from 'react'

import {
  View,
  TextInput,
  Button,
  StyleSheet,
  FlatList,
  Text,
  ActivityIndicator,
  AppRegistry,
  Image,
} from 'react-native'

import events from '../Helpers/EventsData'
import EventItem from './EventItem'
import TestFetch from './TestFetch';


 
// -----------------------------------------------------------
// --------------------DEF COMPONENT--------------------------

class Test_Again extends React.Component {

  constructor(props) {
    super(props)
    this.state = { isLoading: true }
  }

  componentDidMount() {
      return fetch('https://dubdubapi.azurewebsites.net/event')
          .then((res) => res.json())
          .then((resJson) => {
              this.setState({
                  isLoading: false,
                  data: resJson
              }, function() {})
          })
          .catch((err) => {
              console.error(err)
          })
    }


  render() {
    return (
        <View style={styles.main_container}>

            {/*----------------BARRE DE RECHERCHE----------------- */}
            <TextInput style={styles.TextInput} placeholder='Rechercher un évènement'
            onChangeText={(text) => this._searchTextInputChanged(text)}
            onSubmitEditing={() => this._loadEvent()}/> 
            <Button title='Rechercher' onPress={() => {}}/>

            {/*---------RECHERCHE & DISPLAY DES EVENEMENTS-----------*/}

            <FlatList
              data={this.state.data}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({item}) => (

                <View style={styles.main_container}>
                  <Image
                    style={styles.image}
                    source={{uri: "image"}}
                  />

                  <View style ={styles.content_container}>
                    <View style={styles.header_container}>
                      <Text style= {styles.title_text}>{item.nom}</Text>
                      <Text style= {styles.place_text}>{item.nb_place} places</Text>
                    </View> 

                    <View style ={styles.description_container}>
                      <Text style ={styles.description_text} numberOfLines={6} >{item.description}</Text>
                    </View>
                  
                    <View style={styles.date_container}>
                      <Text style={styles.date_text}>A lieu le {item.date}</Text>
                    </View>
                  </View>
                    <View style={styles.buttonContainer}>
                      <Button
                        onPress={this._onPressButton}
                        title="Voir plus >"
                      />
                    </View>
                  </View>
              )}
            />

            <ActivityIndicator size= 'large' color ='#666666'/>
        </View>
      
    )
  }
}

// -----------------------------------------------------------
// ----------------------STYLE SHEETS-------------------------

const styles = StyleSheet.create ({
  main_container:{
    flex: 1,
    marginTop : 30,
  },
  TextInput: {
    marginLeft:5,
    marginRight : 5,
    height: 50, 
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5,
  },
  image:{
    width:120,
    height:180,
    margin: 5,
    backgroundColor: 'gray',
    },
  content_container:{
    flex:1,
    margin:5,
  },
  header_container:{
    flex:3,
    flexDirection:'row',
  },
  title_text:{
    fontWeight:'bold',
    fontSize: 20,
    flex:1,
    flexWrap:'wrap',
    paddingRight:5,
    },
  place_text:{
    fontWeight:'bold',
    fontSize:15,
    color : '#666666',
  },
  description_container:{
    flex:7,
  },
  description_text:{
    fontStyle:'italic',
    color:'#666666',
  },
  date_container:{
    flex:1,
  },
  date_text:{
    textAlign:'right',
    fontSize: 14,
  },
})


//--------------------EXPORT----------------------------------

export default Test_Again


// -----------------------------------------------------------
// ---------------------STILL TO DO---------------------------

//TO DO : Encodage & caractère d'échappement S