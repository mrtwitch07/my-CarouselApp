import React, { useState, useRef } from 'react';
import {
  SafeAreaView,
  Image,
  StyleSheet,
  FlatList,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  Animated,
} from 'react-native';
import slides from '../src/slides';
import NextButton from './NextButton';
import OnboardingItem from './OnboardingItem';
import Paginator from './Paginator';








const Onboarding = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slidesRef = useRef(null);

  const scrollX = useRef(new Animated.Value(0)).current;

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const scrollTo = () => {
    if (currentIndex < slides.length - 1) {
      slidesRef.current.scrollToIndex({ index: currentIndex + 1 });
    
    } else {
      console.log('last item');
    
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 3 }}>
      <FlatList data={slides} renderItem={({item}) => <OnboardingItem item={item} />}
      showsHorizontalScrollIndicator={false}
      horizontal
      pagingEnabled
      bounces={false}
      keyExtractor={(item) => item.id}
      onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX }}}], {
        useNativeDriver: false,
      })}
      scrollEventThrottle={32}
      onViewableItemsChanged={viewableItemsChanged}
      viewabilityConfig={viewConfig}
      ref={slidesRef}
      />
      </View>
       <Paginator data={slides} scrollX={scrollX} />
       <NextButton onPress={scrollTo} scrollTo={scrollTo} percentage={(currentIndex + 1) * (100 / slides.length)} />
    </View>
  );
};

export default Onboarding

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  title: {
    color: '#493d8a',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'left'
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  indicator: {
    height: 2.5,
    width: 10,
    backgroundColor: 'grey',
    marginHorizontal: 3,
    borderRadius: 2,
  },
  btn: {
    flex: 1,
    height: 50,
    borderRadius: 5,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
