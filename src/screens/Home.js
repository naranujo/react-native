import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Contador from '../components/Contador'

export default function home() {
    
    const show = () => {
        console.log("Me clickearon")
    }

    return (
        <View style={Styles.contenedor}>
            <Text style={Styles.texto}>Hola mundo</Text>
            <TouchableOpacity onPress={() => show()}>
                <Text style={Styles.textoClick}>Clickeame</Text>
            </TouchableOpacity>
            <Contador />
        </View>
    )
}

const Styles = StyleSheet.create({
    contenedor: {
        display: 'flex',
        height: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textoClick: {
        fontWeight: 'bold',
        padding: 10,
        backgroundColor: "#ccc",
        borderRadius: 4,
        textAlign: "center",
    }
})