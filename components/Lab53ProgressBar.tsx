import { useState } from "react";
import {Text, View, StyleSheet} from "react-native";
import { ProgressBar, TextInput } from 'react-native-paper';

const styles = StyleSheet.create({
    container: {padding: 10},
    title: {fontSize: 18, fontWeight: 'bold', paddingBottom: 5},
    subtitle: {marginTop: 5, fontSize: 14, color: '#555'},
    TextInput: {
        marginTop: 10, 
        backgroundColor: 'transparent',
        overlayColor: 'transparent',
    },
})

type FilledFields = {
    name: boolean,
    age: boolean,
    occ: boolean,
    loc: boolean,
};

function getProgressColor(status: number) {
    if (status > 0.85) return '#00a000';
    if (status < 0.6) return '#ffde4d';
    if (status < 0.35) return '#ff944d';
    return '#ff4d4d';
}

export default function Lab53ProgressBar() {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [occ, setOcc] = useState('');
    const [loc, setLoc] = useState('');
    const [filled, setFilledFields] = useState<FilledFields>({
        name: false,
        age: false,
        occ: false,
        loc: false,
    });

    const status = Object.values(filled).filter(Boolean).length / 4;
    const progressColor = getProgressColor(status);

    const markFilled = (field: keyof FilledFields, value: string) => {
        if(value.trim() !== '') {
            setFilledFields(prev => ({...prev, [field]: true}));
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Formularz rejestracyjny</Text>
            <ProgressBar progress={status} color={progressColor} />

            <View>
                <Text style={styles.subtitle}>Wypełnij dane osobowe</Text>
            </View>

            <View>
                <TextInput
                    mode="outlined"
                    style={styles.TextInput}
                    label="Imię"
                    value={name}
                    onChangeText={setName}
                    onBlur={() => markFilled('name', name)}
                />

                <TextInput
                    mode="outlined"
                    style={styles.TextInput}
                    label="Wiek"
                    value={age}
                    onChangeText={setAge}
                    onBlur={() => markFilled('age', age)}
                />

                <TextInput
                    mode="outlined"
                    style={styles.TextInput}
                    label="Zawód"
                    value={occ}
                    onChangeText={setOcc}
                    onBlur={() => markFilled('occ', occ)}
                />

                <TextInput
                    mode="outlined"
                    style={styles.TextInput}
                    label="Lokalizacja"
                    value={loc}
                    onChangeText={setLoc}
                    onBlur={() => markFilled('loc', loc)}
                />

            </View>

        </View>

    )
}