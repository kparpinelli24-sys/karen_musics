import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Alert,
  Image,
  ScrollView,
} from 'react-native';

// Cores do App
const DARK = '#121212';
const CARD = '#1E1E1E';
const PURPLE = '#8A2BE2';
const LIGHT = '#F5F5F5';
const GRAY = '#AAAAAA';

export default function App() {
  const [nome, setNome] = useState('');
  const [musica, setMusica] = useState('');

  function handleStart() {
    if (!nome || !musica) {
      Alert.alert('Atenção', 'Preencha todos os campos!');
    } else {
      Alert.alert('Bem-vindo!', 'Aproveite suas músicas favoritas 🎵');
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />

      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.card}>

          {/* Título */}
          <Text style={styles.title}>BeatMusic</Text>

          {/* Subtítulo */}
          <Text style={styles.subtitle}>
            Sua música favorita em qualquer lugar
          </Text>

          {/* Imagem */}
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/3659/3659784.png',
            }}
            style={styles.image}
          />

          {/* Campo nome */}
          <Text style={styles.label}>Seu nome</Text>

          <TextInput
            style={styles.input}
            placeholder="Digite seu nome"
            placeholderTextColor={GRAY}
            value={nome}
            onChangeText={setNome}
          />

          {/* Campo música */}
          <Text style={styles.label}>Música favorita</Text>

          <TextInput
            style={styles.input}
            placeholder="Digite sua música favorita"
            placeholderTextColor={GRAY}
            value={musica}
            onChangeText={setMusica}
          />

          {/* Botão */}
          <TouchableOpacity
            style={styles.button}
            onPress={handleStart}
          >
            <Text style={styles.buttonText}>COMEÇAR</Text>
          </TouchableOpacity>

          {/* Informações */}
          <View style={styles.infoBox}>
            <Text style={styles.info}>🎵 Playlists personalizadas</Text>

            <Text style={styles.info}>🎧 Escute offline</Text>

            <Text style={styles.info}>🔥 Músicas mais tocadas</Text>
          </View>

          {/* Rodapé */}
          <Text style={styles.footer}>
            Desenvolvido por Karen
          </Text>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: DARK,
  },

  scroll: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  card: {
    width: '100%',
    backgroundColor: CARD,
    borderRadius: 20,
    padding: 25,
    alignItems: 'center',
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: PURPLE,
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 16,
    color: LIGHT,
    textAlign: 'center',
    marginBottom: 20,
  },

  image: {
    width: 140,
    height: 140,
    marginBottom: 20,
  },

  label: {
    alignSelf: 'flex-start',
    color: LIGHT,
    fontSize: 15,
    marginBottom: 8,
    marginTop: 10,
  },

  input: {
    width: '100%',
    height: 50,
    backgroundColor: DARK,
    borderRadius: 10,
    paddingHorizontal: 15,
    color: LIGHT,
    borderWidth: 1,
    borderColor: PURPLE,
    marginBottom: 10,
  },

  button: {
    width: '100%',
    height: 50,
    backgroundColor: PURPLE,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },

  buttonText: {
    color: LIGHT,
    fontSize: 16,
    fontWeight: 'bold',
  },

  infoBox: {
    marginTop: 25,
    width: '100%',
  },

  info: {
    color: LIGHT,
    fontSize: 15,
    marginBottom: 10,
  },

  footer: {
    color: GRAY,
    marginTop: 25,
    fontSize: 13,
  },
});