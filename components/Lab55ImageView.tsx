import 'react';
import { Image, StyleSheet, View, ScrollView, NativeSyntheticEvent, NativeScrollEvent, useWindowDimensions} from 'react-native';
import img01 from '../assets/img-01.png';
import img02 from '../assets/img-02.png';
import img03 from '../assets/img-03.png';
import img04 from '../assets/img-04.png';
import img05 from '../assets/img-05.png';
import { useState } from 'react';

const images = [img01, img02, img03, img04, img05];

const IMAGE_ASPECT_RATIO = 0.625;

const styles = StyleSheet.create({
    mainCointainer: {marginTop: 20},
    imageV: {resizeMode: 'cover'},
    textContainer:{
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        alignSelf: 'center',
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#fff',
        margin: 4,
    },
    dotActive: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#ff0000',
        margin: 4,
    }
});

export default function Lab55ImageView() {
    const {width} = useWindowDimensions();
    const [active, setActive] = useState(0);

    const containerWidth = width - 20;
    const containerHeight = containerWidth * IMAGE_ASPECT_RATIO;

    const changeActive = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const slide = Math.round(
            event.nativeEvent.contentOffset.x / event.nativeEvent.layoutMeasurement.width
        );

        const clampedSlide = Math.max(0, Math.min(slide, images.length - 1));
        if (clampedSlide !== active) {
            setActive(clampedSlide);
        }

    }

    return (
    
        <View style={[styles.mainCointainer, {width: containerWidth, height: containerHeight}]}>

            <ScrollView
                horizontal
                pagingEnabled
                style={{width: containerWidth, height: containerHeight}}
                showsHorizontalScrollIndicator={false}
                bounces={false}
                onScroll={changeActive}
                scrollEventThrottle={16}
            >
                {images.map((image, index) => (
                    <Image
                        key={index}
                        source={image}
                        style={[styles.imageV, {width: containerWidth, height: containerHeight}]}
                    />
                ))}
            </ScrollView>


            <View style={styles.textContainer}>
                {images.map((_, index) => (
                    <View
                        key={index}
                        style={index === active ? styles.dotActive : styles.dot}
                    />
                ))}
            </View>

        </View>
    );
}