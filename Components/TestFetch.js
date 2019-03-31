import React from 'react'
import {
    View,
    TextInput,
    FlatList,
    Text,
    ActivityIndicator
  } from 'react-native'

class TestFetch extends React.Component {

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
        if (this.state.isLoading) {
            return(
                <View>
                    <ActivityIndicator/>
                </View>
            )
        }

        return(
            <View>
                <FlatList
                    data={this.state.data}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => <Text>{item.nom}</Text>}
                />
            </View>
        )
    }
}

export default TestFetch