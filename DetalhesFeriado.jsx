import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView
} from "react-native"


const styleTela = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#faf8f9"
    },

    header: {
        backgroundColor: "#ead4df",
        height: 100,
        width: "100%",
        justifyContent: "center",
        paddingTop: 20,
        paddingLeft: 25
    },

    voltar: {
        color: "#4d3742",
        fontSize: 16,
        fontWeight: "bold"
    },

    conteudo: {
        padding: 25
    },

    pequenoTitulo: {
        color: "#a37d8e",
        fontSize: 14,
        fontWeight: "bold",
        marginTop: 10
    },

    titulo: {
        color: "#4d3742",
        fontSize: 29,
        fontWeight: "bold",
        marginTop: 8,
        marginBottom: 25
    },

    linha: {
        backgroundColor: "#ffffff",
        borderWidth: 1,
        borderColor: "#eadde2",
        borderRadius: 12,
        padding: 18,
        marginBottom: 15
    },

    tituloInfo: {
        color: "#a37d8e",
        fontSize: 14,
        fontWeight: "bold",
        marginBottom: 7
    },

    textoInfo: {
        color: "#4d3742",
        fontSize: 17
    },

    mensagem: {
        color: "#806a74",
        fontSize: 15,
        lineHeight: 23,
        marginTop: 15
    }

})


export default function DetalhesFeriado({ feriado, voltar }) {

    return (

        <View style={styleTela.container}>

            <View style={styleTela.header}>

                <TouchableOpacity onPress={voltar}>

                    <Text style={styleTela.voltar}>
                        ← Voltar
                    </Text>

                </TouchableOpacity>

            </View>


            <ScrollView>

                <View style={styleTela.conteudo}>

                    <Text style={styleTela.pequenoTitulo}>
                        FERIADO NACIONAL
                    </Text>


                    <Text style={styleTela.titulo}>
                        {feriado.name}
                    </Text>


                    <View style={styleTela.linha}>

                        <Text style={styleTela.tituloInfo}>
                            DATA
                        </Text>

                        <Text style={styleTela.textoInfo}>
                            {feriado.date}
                        </Text>

                    </View>


                    <View style={styleTela.linha}>

                        <Text style={styleTela.tituloInfo}>
                            TIPO
                        </Text>

                        <Text style={styleTela.textoInfo}>
                            {feriado.type}
                        </Text>

                    </View>


                    <Text style={styleTela.mensagem}>
                        Este feriado faz parte do calendário de feriados
                        nacionais do Brasil.
                    </Text>

                </View>

            </ScrollView>

        </View>

    )

}