import { Component } from "react";
import { Image, StyleSheet, View, ScrollView, NativeSyntheticEvent, NativeScrollEvent, Dimensions } from 'react-native';
// import { useState } from 'react';

type TProps = {
    images: any[]
};
type TInnerState = {active: number};

const IMAGE_ASPECT_RATIO = 0.625;


const styles = StyleSheet.create({
    mainCointainer: {
        borderRadius: 30,
        borderWidth: 5,
        borderColor: '#737bdc',
        overflow: 'hidden',
        marginTop: 20
    },
    imageV: {
        resizeMode: 'cover'
    },
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
        backgroundColor: '#737bdc',
        margin: 4,
    }
});

export default class Lab55ImageView extends Component<TProps, TInnerState> {

    constructor(props: TProps) {
        super(props);
        this.state = {active: 0}
    }


    changeActive = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const slide = Math.round(
            event.nativeEvent.contentOffset.x / event.nativeEvent.layoutMeasurement.width
        );

        const clampedSlide = Math.max(0, Math.min(slide, this.props.images.length - 1));
        if (clampedSlide !== this.state.active) {
            this.setState({active: clampedSlide});
        }

    }

    render() {

        const { width } = Dimensions.get('window');
        const containerWidth = width - 20;
        const containerHeight = containerWidth * IMAGE_ASPECT_RATIO;

        return (
        
            <View style={[styles.mainCointainer, {width: containerWidth, height: containerHeight}]}>

                <ScrollView
                    horizontal
                    pagingEnabled
                    style={{width: containerWidth, height: containerHeight}}
                    showsHorizontalScrollIndicator={false}
                    bounces={false}
                    onScroll={this.changeActive}
                    scrollEventThrottle={16}
                >
                    {this.props.images.map((image, index) => (
                        <Image
                            key={index}
                            source={image}
                            style={[styles.imageV, {width: containerWidth, height: containerHeight}]}
                        />
                    ))}
                </ScrollView>


                <View style={styles.textContainer}>
                    {this.props.images.map((_, index) => (
                        <View
                            key={index}
                            style={index === this.state.active ? styles.dotActive : styles.dot}
                        />
                    ))}
                </View>

            </View>
        );

    }


}