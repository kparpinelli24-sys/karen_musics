import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Image,
  ScrollView,
  Alert,
} from 'react-native';

// CORES PASTÉIS
const BG = '#FFF7F2';
const PINK = '#F7B7C3';
const LIGHT_PINK = '#FFE3EA';
const MINT = '#CDE8D5';
const LILAC = '#DCCCF5';
const TEXT = '#6B5B5B';
const WHITE = '#FFFFFF';

export default function App() {
  const [nome, setNome] = useState('');
  const [musica, setMusica] = useState('');

  function entrar() {
    if (!nome || !musica) {
      Alert.alert( 'Preencha os campos!');
    } else {
      Alert.alert('Bem-vindo', 'Agora é só curtir as melhores!');
    }
  }

  return (
    <SafeAreaView style={styles.container}>

      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.card}>

      
          <Text style={styles.title}>spotify</Text>

          <Image
            source={require('./assets/img/vinil.png')}
            style={styles.image}
          />

          <Text style={styles.description}>
            Escute suas músicas favoritas em qualquer lugar, a qualquer hora.
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Digite seu nome"
            placeholderTextColor="#999"
            value={nome}
            onChangeText={setNome}
          />

          <TextInput
            style={styles.input}
            placeholder="Qual sua música favorita?"
            placeholderTextColor="#999"
            value={musica}
            onChangeText={setMusica}
          />

          <TouchableOpacity
            style={styles.button}
            onPress={entrar}
          >
            <Text style={styles.buttonText}>
              Vamos 
            </Text>
          </TouchableOpacity>

          <View style={styles.infoContainer}>

            <View style={[styles.infoCard, { backgroundColor: MINT }]}>
              <Text style={styles.infoTitle}>🎧 Offline</Text>

              <Text style={styles.infoText}>
                Escute músicas sem internet.
              </Text>
            </View>

            <View style={[styles.infoCard, { backgroundColor: LILAC }]}>
              <Text style={styles.infoTitle}>🎙 Playlists</Text>

              <Text style={styles.infoText}>
                Feitas pelas suas mãos.
              </Text>
            </View>

            <View style={[styles.infoCard, { backgroundColor: LIGHT_PINK }]}>
              <Text style={styles.infoTitle}>🔈 Descubra</Text>

              <Text style={styles.infoText}>
                Conheça novas músicas.
              </Text>
            </View>

          </View>

          <Text style={styles.footer}>
            Desenvolvedor(a): Karen 
          </Text>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: BG,
  },

  scroll: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  card: {
    width: '100%',
    alignItems: 'center',
  },

  title: {
    fontSize: 55,
    color: PINK,
    fontWeight: 'bold',
    marginTop: 20,
  },

  subtitle: {
    fontSize: 18,
    color: TEXT,
    marginBottom: 15,
  },

  image: {
    width: 220,
    height: 220,
    marginBottom: 15,
    resizeMode: 'contain',
  },

  description: {
    fontSize: 16,
    color: TEXT,
    textAlign: 'center',
    marginBottom: 25,
    paddingHorizontal: 20,
  },

  input: {
    width: '100%',
    backgroundColor: WHITE,
    height: 55,
    borderRadius: 18,
    paddingHorizontal: 20,
    marginBottom: 15,
    fontSize: 16,
    color: TEXT,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3,
  },

  button: {
    width: '100%',
    height: 55,
    backgroundColor: PINK,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 25,
  },

  buttonText: {
    color: WHITE,
    fontSize: 18,
    fontWeight: 'bold',
  },

  infoContainer: {
    width: '100%',
  },

  infoCard: {
    width: '100%',
    borderRadius: 20,
    padding: 18,
    marginBottom: 15,
  },

  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: TEXT,
    marginBottom: 8,
  },

  infoText: {
    fontSize: 15,
    color: TEXT,
  },

  footer: {
    marginTop: 15,
    fontSize: 15,
    color: TEXT,
    marginBottom: 20,
  },

});