import { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

type TProps = { text: string };
type TInnerProps = {dataFromParent: string};
type TInnerState = {value: number};

const styles = StyleSheet.create({
    viewStyles: {backgroundColor: '#ffff00'},
    parentText: {color: '#0000ff', fontSize: 20},
    text: {color: 'black', fontSize: 16,backgroundColor: '#00ffff', padding: 5, margin: 5},
});

class InnerInfoClass extends Component<TInnerProps, TInnerState> {
    constructor(props: TInnerProps) {
        super(props);
        this.state = {value: 2.5};
    }
    render() {
        return(
            <Text style={styles.text}>Wartość z rodzica: {this.props.dataFromParent}, wartość wewnętrzna: {this.state.value}</Text>
        )
    }
}

export default class Lab54Class extends Component<TProps> {
    render() {
        return (
            <View style={styles.viewStyles}>
                <Text style={styles.parentText}>Komponent zewnętrzny</Text>
                <Text style={styles.parentText}>Dane: {this.props.text}</Text>
                <InnerInfoClass dataFromParent={`Przekazano: ${this.props.text}`} />
            </View>
        );
    }
}