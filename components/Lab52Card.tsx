import { StyleSheet } from "react-native";
import { Card, Button, Text } from 'react-native-paper';

const styles = StyleSheet.create({
    Card: {
        alignContent: 'center',
        margin: 10,
    }
})

const Lab52Card = () => {
    return (

        <Card style={styles.Card}>

            <Card.Content>
                <Text variant="titleLarge">Wydział Mechaniczny PK</Text>
            </Card.Content>

            <Card.Cover
                source={require(" ../assets/m7logo.png")}
                resizeMode="contain"
            />

            <Card.Content>
                <Text variant="bodyMedium">Katedra Informatyki Stosowanej M-07</Text>
            </Card.Content>

            <Card.Actions>
                <Button onPress={() => { }}>OK</Button>
            </Card.Actions>
        </Card>

    );

};
export default Lab52Card;