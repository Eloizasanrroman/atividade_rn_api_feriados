import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from 'react-native'


const styleBusca = StyleSheet.create({
    areaBusca: {
        alignItems: "center",
        marginTop: 35
    },

    titulo: {
        color: "#4d3742",
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 7
    },

    texto: {
        color: "#806a74",
        fontSize: 15,
        marginBottom: 18,
        textAlign: "center"
    },

    inputAno: {
        width: 280,
        height: 50,
        backgroundColor: "#ffffff",
        borderWidth: 1,
        borderColor: "#d8c1cb",
        borderRadius: 10,
        textAlign: "center",
        fontSize: 17,
        color: "#4d3742"
    },

    button: {
        width: 130,
        height: 45,
        backgroundColor: "#ead4df",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 15
    },

    textoButton: {
        color: "#4d3742",
        fontSize: 16,
        fontWeight: "bold"
    }
})


export default function BuscaComponent({
    ano,
    setAno,
    buscar
}) {

    return (
        <View style={styleBusca.areaBusca}>
            <Text style={styleBusca.titulo}>
                Consulte um ano
            </Text>

            <Text style={styleBusca.texto}>
                Descubra os feriados nacionais de qualquer ano.
            </Text>

            <TextInput
                value={ano}
                onChangeText={setAno}
                onSubmitEditing={buscar}
                style={styleBusca.inputAno}
                placeholder="Ex: 2026"
                placeholderTextColor="#aaa0a5"
                keyboardType="numeric"
            />

            <TouchableOpacity
                style={styleBusca.button}
                onPress={buscar}
            >
                <Text style={styleBusca.textoButton}>
                    Pesquisar
                </Text>
            </TouchableOpacity>
        </View>
    )
}