import { View, Image, StyleSheet, } from 'react-native';
import React from 'react'
import Swiper from 'react-native-swiper'
import slider_1 from '../image/banner.jpg';
import slider_2 from '../image/background1.png';
import slider_3 from '../image/banner.jpg';
const Sliderscreen = () => {
    return (
        <View>
            <Swiper autoplay={true} style={{ height: 100 }} showsPagination={false}>
                <View style={styles.slide1}>
                    <Image source={slider_1} style={{ width: '100%', height: 100 }} />
                </View>
                <View style={styles.slide2}>
                    <Image source={slider_2} style={{ width: '100%', height: 100 }} />
                </View>
                <View style={styles.slide3}>
                    <Image source={slider_3} style={{ width: '100%', height: 100 }} />
                </View>
            </Swiper>
        </View>

    )
}



const styles = StyleSheet.create({

    slide1: {
        width: "100%",
        height: 160,
    },
    slide2: {
        width: "100%",
        height: 160,
    },
    slide3: {
        width: "100%",
        height: 160,
    },

})
export default Sliderscreen