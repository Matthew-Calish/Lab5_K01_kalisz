import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Lab51AlertBtn } from './components/Lab51AlertBtn';
import Lab52Card from './components/Lab52Card';

export default function App() {
  return (
    <SafeAreaProvider>

      <SafeAreaView style={styles.container}>
        <Text style={styles.textText}>Systemy mobilne i wbudowane{'\n'}Labolatorium 5</Text>


        <Lab51AlertBtn title="Alert" info="To jest alert!" bCaption="Pokaż Alert" />
        <Lab51AlertBtn title="Inna wiadomość" info="To jest inna wiadomość!" bCaption="Pokaż wiadomość" />
        <Lab52Card />


        <StatusBar style="auto" />
      </SafeAreaView>

    </SafeAreaProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccf0cc',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 30,
    marginHorizontal: 10,
    marginBottom: 10,
    gap: 3,
  },
  textText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#737bdc',
    fontWeight: 'bold',
  },
});
