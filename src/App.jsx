import {
    View,
    Text,
    StyleSheet,
    Alert,
    ScrollView
} from 'react-native'

import { useState } from 'react'

import HeaderComponent from './components/HeaderComponent'
import BuscaComponent from './components/BuscaComponent'
import CardFeriadoComponent from './components/CardFeriadoComponent'

import DetalhesFeriado from '../DetalhesFeriado'


const styleApp = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#faf8f9"
    },

    tituloResultados: {
        color: "#4d3742",
        fontSize: 21,
        fontWeight: "bold",
        marginTop: 35,
        marginBottom: 15,
        marginLeft: 25
    },

    mensagem: {
        color: "#806a74",
        textAlign: "center",
        marginTop: 30,
        fontSize: 16
    }
})


export default function App() {
    const [ano, setAno] = useState('')
    const [feriados, setFeriados] = useState(null)

    const [tela, setTela] = useState('inicio')
    const [feriadoSelecionado, setFeriadoSelecionado] = useState(null)

    async function buscar() {
        if (ano == '') {
            Alert.alert(
                'Atenção',
                'Digite um ano para pesquisar!'
            )
            return
        }


        if (ano.length != 4) {
            Alert.alert(
                'Atenção',
                'Digite um ano válido com 4 números!'
            )
            return
        }

        try {
            const resposta = await fetch(
                `https://brasilapi.com.br/api/feriados/v1/${ano}`
            )

            if (!resposta.ok) {
                Alert.alert(
                    'Erro',
                    'Não foi possível encontrar os feriados desse ano.'
                )
                return
            }

            const dados = await resposta.json()
            console.log(dados)
            setFeriados(dados)
            setAno('')

        } catch (erro) {
            Alert.alert(
                'Erro',
                'Não foi possível acessar a API.'
            )
            console.log(erro)
        }
    }


    function abrirDetalhes(feriado) {
        setFeriadoSelecionado(feriado)
        setTela('detalhes')
    }


    function voltar() {
        setTela('inicio')
    }


    if (tela == 'detalhes') {
        return (
            <DetalhesFeriado
                feriado={feriadoSelecionado}
                voltar={voltar}
            />
        )
    }

    return (
        <View style={styleApp.container}>
            <HeaderComponent />

            <ScrollView>
                <BuscaComponent
                    ano={ano}
                    setAno={setAno}
                    buscar={buscar}
                />

                {feriados ? (
                    <View>
                        <Text style={styleApp.tituloResultados}>
                            Feriados encontrados
                        </Text>

                        {feriados.length > 0 ? (
                            feriados.map((feriado) => (
                                <CardFeriadoComponent
                                    key={feriado.date}
                                    feriado={feriado}
                                    abrirDetalhes={abrirDetalhes}
                                />
                            ))
                        ) : (
                            <Text style={styleApp.mensagem}>
                                Nenhum feriado encontrado.
                            </Text>
                        )}
                    </View>
                ) : null}
            </ScrollView>
        </View>
    )
}