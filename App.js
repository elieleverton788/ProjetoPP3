import { Ionicons } from '@expo/vector-icons';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Conteúdo principal */}
        <View style={styles.content}>
          {/* Logo */}
          <View style={styles.logoCircle}>
            <Text style={styles.logoText}>LOGO</Text>
          </View>

          {/* Textos */}
          <View style={styles.textContainer}>
            <Text style={styles.title}>
              Boas-vindas ao{'\n'}Conexão Suassuna!
            </Text>

            <Text style={styles.paragraph}>
              Boas-vindas ao Conexão Suassuna!{'\n'}
              A biblioteca do IFPE Jaboatão agora está a um clique de você.
              Explore nosso acervo, realize reservas com facilidade e
              compartilhe suas experiências literárias com a nossa
              comunidade. Transforme sua jornada acadêmica e mergulhe no
              universo do conhecimento e da arte.
            </Text>

            {/* Botões */}
            <View style={styles.buttonsRow}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => console.log('Primeiro cadastro')}
                activeOpacity={0.8}
              >
                <Text style={styles.buttonText}>PRIMEIRO CADASTRO</Text>
                <Ionicons name="arrow-forward" size={18} color="#fff" />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.button}
                onPress={() => console.log('Já sou de casa')}
                activeOpacity={0.8}
              >
                <Text style={styles.buttonText}>JÁ SOU DE CASA</Text>
                <Ionicons name="arrow-forward" size={18} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Faixa inferior */}
        <View style={styles.bottomBar} />
      </View>
    </SafeAreaView>
  );
}

const GREEN_LIGHT = '#a0c98a';
const GREEN_DARK = '#1f3d0c';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: GREEN_LIGHT,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 40,
    alignItems: 'center',
  },
  logoCircle: {
    width: 180,
    height: 260,
    borderRadius: 130,
    borderWidth: 2,
    borderColor: '#1a1a1a',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  logoText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1a1a1a',
  },
  textContainer: {
    width: '100%',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1a1a1a',
    marginBottom: 16,
    lineHeight: 32,
  },
  paragraph: {
    fontSize: 13,
    lineHeight: 20,
    color: '#1a1a1a',
    textAlign: 'left',
    marginBottom: 24,
  },
  buttonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: GREEN_DARK,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 30,
    gap: 6,
    outlineStyle: 'none', // remove a faixa preta de foco na web
  },
  buttonText: {
    flexShrink: 1,
    color: '#fff',
    fontSize: 11,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
  bottomBar: {
    height: 50,
    backgroundColor: GREEN_DARK,
  },
});