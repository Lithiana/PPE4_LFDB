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
  Text,
  FlatList,
  ActivityIndicator,
  AppRegistry,
  Image,
} from 'react-native'



 
// -----------------------------------------------------------
// --------------------DEF COMPONENT--------------------------

class EventsDetails extends React.Component {

  constructor(props) {
    super(props)
    console.log("ID:" + this.props.navigation.state.params.item.id)
    this.id = this.props.navigation.state.params.item.id
    this.state = { isLoading: true }
  }

  componentDidMount() {
      return fetch('https://dubdubapi2.azurewebsites.net/event/' + this.id)
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
    const {navigate} = this.props.navigation;
    return (
        <View style={styles.main_container}>

            <View style={styles.container_profil}>
                <View>
                    <Image
                        style={styles.image_profil}
                        source={{uri: "image"}}
                    />
                </View>
                <View style={styles.text_profil}>
                    <Text style={styles.Details_Text_Profil}>Details</Text>
                </View>
            </View>

            {/*---------RECHERCHE & DISPLAY DES EVENEMENTS-----------*/}


            <FlatList
              data={this.state.data}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({item}) => (
              <View>
                  <View style ={styles.content_container}>
                    <View style={styles.header_container}>
                      <Text style= {styles.title_text}>{item.nom}</Text>
                      <Text style= {styles.place_text}>{item.nb_place} places</Text>
                    </View> 

                    <View style ={styles.description_container}>
                      <Text style ={styles.description_text} numberOfLines={5} >{item.description}</Text>
                    </View>
                  
                    <View style={styles.date_container}>
                      <Text style={styles.date_text}>A lieu le {item.date}</Text>
                    </View>

                    <View style={styles.buttonContainer}>
                        <Button
                        onPress={() => navigate('Inscription', { item })}
                        title="S'y inscrire >"
                        />
                    </View> 
                  </View>
              </View>
              )}
            />
                <View style={styles.footer}>
                    <Text>LFDB - 2019</Text>
                </View>

                <ActivityIndicator size= 'large' color ='#666666'/>
            </View>
          
      
    )
  }
}

// -----------------------------------------------------------
// ----------------------STYLE SHEETS-------------------------



const styles = StyleSheet.create ({

  //---------------BANNIERE-USER------------------------
  container_profil:{
    justifyContent:'space-between',
    alignItems : 'center',
    backgroundColor : '#666666',
    height : 60,
    flexDirection : 'row',
  },
  image_profil :{
    width:50,
    height:50,
    margin: 5,
    backgroundColor: 'white',
    marginLeft : 3,
  },
  text_profil:{
      marginRight : 50,
  },
  Details_Text_Profil:{
      color : '#FFFFFF',
      fontSize:20,
  },

  //-------------------ITEMS----------------------------
  main_container:{
    flex: 1,
  },
  main_container_list :{
    flex : 1,
    flexDirection : 'row',
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
    flexDirection : 'column',
  },
  header_container:{
    flex:3,
    flexDirection:'row',
  },
  title_text:{
    fontWeight:'bold',
    fontSize: 15,
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
  buttonContainer:{
    flex : 1,
  },

  //------------------FOOTER----------------------------
  footer:{
    alignItems : 'center',
    backgroundColor : '#666666',
    color: '#000000',
    justifyContent: 'flex-end',
    height :30,
  },
})


//--------------------EXPORT----------------------------------

export default EventsDetails





// -----------------------------------------------------------
// ---------------------STILL TO DO---------------------------
