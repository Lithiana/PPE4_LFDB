// -------------------------IMPORT------------------------------
import React from 'react'

import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native'


// -----------------------------------------------------------
// --------------------DEF COMPONENT--------------------------

class EventItem extends React.Component{
    render(){
        return(
            <View style={styles.main_container}>

                <Image
                    style={styles.image}
                    source={{uri: "image"}}
                />
                <View style ={styles.content_container}>
                    <View style={styles.header_container}>
                        <Text style= {styles.title_text}>{this.props.content.title}</Text>
                        <Text style= {styles.place_text}>{this.props.content.nb_place} places</Text>
                    </View>

                    <View style ={styles.description_container}>
                        <Text style ={styles.description_text} numberOfLines={6} >{this.props.content.description}</Text>
                    </View>

                    <View style={styles.date_container}>
                        <Text style={styles.date_text}>A lieu le {this.props.content.date_Event}</Text>
                    </View>
                </View>
            </View>
        )
    }
}

// -----------------------------------------------------------
// ----------------------STYLE SHEETS-------------------------

const styles = StyleSheet.create({

    main_container:{
        height:190,
        flexDirection: 'row',
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

export default EventItem


// -----------------------------------------------------------
// ---------------------STILL TO DO---------------------------

//TO DO : Encodage & caractère d'échappement 