import React,{ Component } from 'react'
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native'

class Contador extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }

    click() {
        this.setState({count: this.state.count + 1})
    }

    render() {
        return (
            <View style={Styles.container}>
                <Text style={Styles.texto}>Cantidad de clicks: {this.state.count}</Text>
                <TouchableOpacity style={Styles.cajaContador} onPress={() => this.click()}>
                    <Text style={Styles.contador}>Click aquí para contar</Text>
                </TouchableOpacity>
            </View> 
        )
    }

}

export default Contador

const Styles = StyleSheet.create({
    container: {
        padding: "10px"
    },
    texto: {
        textAlign: "center"
    },
    contador: {
        textAlign: "center",
        fontWeight: 'bold',
    },
    cajaContador: {
        padding: "10px",
        backgroundColor: "rgba(0, 255, 0, 0.5)",
        borderRadius: "4px"
    }
})