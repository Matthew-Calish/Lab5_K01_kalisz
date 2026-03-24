import { Alert, Button } from 'react-native';

type Lab51AlertBtnProps = {
  title: string;
  info: string;
  bCaption: string;
};

export function Lab51AlertBtn({ title, info, bCaption }: Lab51AlertBtnProps) {
    const showAlert = () => {
        Alert.alert(title, info, [{ text: bCaption }]);
    };

    return <Button title={bCaption} onPress={showAlert} />
}