import { StyleSheet, Text, View, Image, useWindowDimensions } from 'react-native'
import React from 'react'

const OnboardingItem = ({ item }) => {

    const { width } = useWindowDimensions();
  
  
    return (
    <View style={[styles.container, { width }]}>
      <Image source={item.image} style={[styles.image, { width, resizeMode: 'contain' }]}/>

      <View style={{flex: 0.3}}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    </View>
  )
}

export default OnboardingItem

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        flex: 0.9,
        justifyContent: 'center'
    
    },
    title: {
        fontWeight: '700',
        fontSize: 30,
        marginBottom: 10,
        color: '#493d8a',
        textAlign: 'center'
    }
});