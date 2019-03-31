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



class Accueil extends React.Component {
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


            <View style={styles.categorie}>
                <Image
                    style={styles.image}
                    source={{uri: "image"}}
                />
                <View style={styles.text_container}>
                    <View style={styles.header_container}>
                        <Text style={styles.text_Title}>Evenement</Text>
                    </View>
                    <View style={styles.description_container}>
                        <Text  style={styles.text_corps}>
                            Retrouvez tous les évenements proposés par l'association.
                        </Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button
                        onPress={() => navigate('Evenement', {})}
                        title="En savoir plus >"
                        />
                    </View>
                </View>
            </View>
            <View style={styles.categorie}>
                <Image
                    style={styles.image}
                    source={{uri: "image"}}
                />
                <View style={styles.text_container}>
                    <View style={styles.header_container}>
                        <Text style={styles.text_Title}>Blog</Text>
                    </View>
                    <View style={styles.description_container}>
                        <Text style={styles.text_corps}>
                            Attention, cette zone n'est pas encore accessible.
                        </Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button
                        onPress={() => navigate('Blog', {})}
                        title="Aller lire >"
                        />
                    </View>
                </View>
            </View>
            <View style={styles.categorie}>
                <Image
                    style={styles.image}
                    source={{uri: "image"}}
                />
                <View style={styles.text_container}>
                    <View style={styles.header_container}>
                        <Text style={styles.text_Title}>Ressources</Text>
                    </View>
                    <View style={styles.description_container}>
                        <Text style={styles.text_corps}>
                            Attention, cette zone n'est pas encore accessible.
                        </Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button
                        onPress={() => navigate('Ressource', {})}
                        title="Aller lire >"
                        />
                    </View>                      
                </View>
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

    main_container:{
        flex : 1,
        flexDirection :'column',
    },
    categorie :{
        marginTop:2,
        marginBottom:2,
        height:140,
        flexDirection: 'row',
    },
    image :{
        width:120,
        height:130,
        margin: 5,
        backgroundColor: 'gray',
    },
    text_container:{
        flex:1,
    },
    text_corps :{
        flexDirection:'column',
        flex:3,
    },
    header_container:{
        marginTop:10,
        flexDirection:'row',
    },
    description_container:{
        flex:3,
        margin:5,
    },
    text_Title :{
        fontWeight:'bold',
        fontSize: 20,
        flex:1,
        flexWrap:'wrap',
        paddingRight:5,
    },
    text_corps :{
        fontStyle:'italic',
        color:'#666666',
    },
    buttonContainer :{
        margin : 20,
        flex : 3,
        flexWrap : 'wrap',
        alignItems: 'flex-end',
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

// --------------------------------------------------------------------------------
//-----------------------------------EXPORT----------------------------------------
// --------------------------------------------------------------------------------

export default Accueil




// ---------------------STILL TO DO---------------------------

//TO DO : Encodage & caractère d'échappement 