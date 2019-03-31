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
  RaisedButton,
} from 'react-native'




 
// -----------------------------------------------------------
// --------------------DEF COMPONENT--------------------------

class Inscription extends React.Component {

    constructor(props) {
        super(props)
        console.log("ID:" + this.props.navigation.state.params.item.id)
        this.id = this.props.navigation.state.params.item.id
        this.state = { isLoading: true }
        this.state = {
          first_name: '',
          last_name: '',
          email: '',
          event_id: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit() {
        const {navigate} = this.props.navigation;
        alert('A name was submitted: ' + this.state.first_name);
        fetch('https://dubdubapi2.azurewebsites.net/user', {
          method: 'POST',
          body: JSON.stringify({
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            event_id: this.props.navigation.state.params.item.id
          })
        }).then((res) => res.json())
        .then(
          navigate('Accueil')
        )
        .catch((err) => {
          console.error(err)
        })
      }
    
      render() {
        return (
          <View>
            <Text>Evenement : {this.props.navigation.state.params.item.nom}</Text>
            <Text>Nom</Text>
            <TextInput
              hintText="Votre nom : "
              floatingLabelText="nom"
              returnKeyLabel = {"next"}
              onChangeText = {(text) => this.setState({last_name:text})}
            />
            <Text>Prénom</Text>
            <TextInput
              hintText="Votre prénom : "
              floatingLabelText="Prénom"
              returnKeyLabel = {"next"}
              onChangeText={(text) => this.setState({first_name:text})}
            />
            <Text>Email</Text>
            <TextInput
              hintText="Votre email : "
              floatingLabelText="Email"
              returnKeyLabel = {"next"}
              onChangeText = {(text) => this.setState({email:text})}
            />
            <Button title="S'inscrire" primary={true} style={styles} 
                    onPress= {() => this.handleSubmit()}
            />
          </View>
        );
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

export default Inscription





// -----------------------------------------------------------
// ---------------------STILL TO DO---------------------------
