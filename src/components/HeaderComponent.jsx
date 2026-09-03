import {
    View,
    Text,
    StyleSheet
} from 'react-native'


const styleHeader = StyleSheet.create({
    header: {
        backgroundColor: "#ead4df",
        height: 100,
        width: "100%",
        justifyContent: "center",
        paddingTop: 20,
        paddingLeft: 25
    },

    titulo: {
        color: "#4d3742",
        fontSize: 27,
        fontWeight: "bold"
    },

    subtitulo: {
        color: "#806a74",
        fontSize: 14,
        marginTop: 3
    }
})


export default function HeaderComponent() {
    return (
        <View style={styleHeader.header}>
            <Text style={styleHeader.titulo}>
                Feriados do Brasil
            </Text>

            <Text style={styleHeader.subtitulo}>
                Consulte os feriados nacionais
            </Text>
        </View>
    )
}