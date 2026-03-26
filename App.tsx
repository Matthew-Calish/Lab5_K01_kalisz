import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Lab51AlertBtn } from './components/Lab51AlertBtn';
import Lab52Card from './components/Lab52Card';
import Lab53ProgressBar from './components/Lab53ProgressBar';
import Lab54Class from './components/Lab54Class';
import Lab55ImageView from './components/Lab55ImageView';

export default function App() {
  return (
    <SafeAreaProvider>

      <SafeAreaView style={styles.container}>
        <Text style={styles.textText}>Systemy mobilne i wbudowane{'\n'}Labolatorium 5</Text>


        {/* <Lab51AlertBtn title="Alert" info="To jest alert!" bCaption="Pokaż Alert" />
        <Lab51AlertBtn title="Inna wiadomość" info="To jest inna wiadomość!" bCaption="Pokaż wiadomość" />
         */}


        {/* <Lab52Card />
        <Lab53ProgressBar /> */}

        {/* <Lab54Class text="Dane przekazane z App" /> */}

        <Lab55ImageView images={[
          require("./assets/img-01.png"), 
          require("./assets/img-02.png"), 
          require("./assets/img-03.png"),
          require("./assets/img-04.png"),
          require("./assets/img-05.png"),
        ]} />
        <Lab55ImageView images={[
          require("./assets/zdj1.png"), 
          require("./assets/zdj2.png"), 
          require("./assets/zdj3.png"),
          require("./assets/zdj4.png"),
          require("./assets/zdj5.png"),
          require("./assets/zdj6.png"),
        ]} />



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
    paddingTop: 20,
    gap: 3,
  },
  textText: {
    fontSize: 26,
    textAlign: 'center',
    color: '#737bdc',
    fontWeight: 'bold',
  },
});
