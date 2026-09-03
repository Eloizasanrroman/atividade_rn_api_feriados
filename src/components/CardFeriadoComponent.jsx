import {
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native'


const styleCard = StyleSheet.create({
    card: {
        backgroundColor: "#ffffff",
        marginHorizontal: 20,
        marginBottom: 12,
        padding: 18,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#eadde2"
    },

    data: {
        color: "#a37d8e",
        fontSize: 14,
        fontWeight: "bold",
        marginBottom: 7
    },

    nome: {
        color: "#4d3742",
        fontSize: 18,
        fontWeight: "bold"
    },

    tipo: {
        color: "#806a74",
        fontSize: 14,
        marginTop: 5
    }
})


export default function CardFeriadoComponent({
    feriado,
    abrirDetalhes
}) {
    return (
        <TouchableOpacity
            style={styleCard.card}
            onPress={() => abrirDetalhes(feriado)}
        >
            <Text style={styleCard.data}>
                {feriado.date}
            </Text>

            <Text style={styleCard.nome}>
                {feriado.name}
            </Text>

            <Text style={styleCard.tipo}>
                {feriado.type}
            </Text>
        </TouchableOpacity>
    )
}