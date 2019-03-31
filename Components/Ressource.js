// --------------------------------------------------------------------------------
// ------------------------------------IMPORT--------------------------------------
// --------------------------------------------------------------------------------


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
  ScrollView,
} from 'react-native'


 
// --------------------------------------------------------------------------------
// ------------------------------DEF COMPONENT-------------------------------------
// --------------------------------------------------------------------------------



class Ressource extends React.Component {
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
                    <Text style={styles.Details_Text_Profil}>Bonjour!</Text>
                </View>
            </View>

            <View>
                <Text>Cette page est en cours de construction, merci de revenir plus tard !</Text>
            </View>


            <View style={styles.footer}>
                <Text>LFDB - 2019</Text>
            </View>
        </View>
      )
    }
  }


// --------------------------------------------------------------------------------
// --------------------------------STYLE SHEETS------------------------------------
// --------------------------------------------------------------------------------




//------------------FOOTER----------------------------

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



    //------------------FOOTER----------------------------
    footer:{
        alignItems : 'center',
        backgroundColor : '#666666',
        color: '#000000',
        justifyContent: 'flex-end',
        height :30,
    },
})

// --------------------------------------------------------------------------------
//-----------------------------------EXPORT----------------------------------------
// --------------------------------------------------------------------------------

export default Ressource




// ---------------------STILL TO DO---------------------------
