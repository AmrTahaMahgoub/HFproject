import React, { useRef } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from 'react-native-reanimated';

const Test = () => {
  const headerHeight = useSharedValue(100);
  const headerFontSize = useSharedValue(24);

  const handleFocus = () => {
    headerHeight.value = withTiming(0, { duration: 500, easing: Easing.inOut(Easing.ease) });
    headerFontSize.value = withTiming(12, { duration: 500, easing: Easing.inOut(Easing.ease) });
  };

  const handleBlur = () => {
    headerHeight.value = withTiming(100, { duration: 500, easing: Easing.inOut(Easing.ease) });
    headerFontSize.value = withTiming(24, { duration: 500, easing: Easing.inOut(Easing.ease) });
  };

  const headerStyle = useAnimatedStyle(() => {
    return {
      height: headerHeight.value,
    };
  });

  const headerTextStyle = useAnimatedStyle(() => {
    return {
      fontSize: headerFontSize.value,
    };
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.header, headerStyle]}>
        <Animated.Text style={[styles.headerText, headerTextStyle]}>
          Header
        </Animated.Text>
      </Animated.View>
      <TextInput
        style={styles.textInput}
        placeholder="Enter text here"
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontWeight: 'bold',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});

export default Test;