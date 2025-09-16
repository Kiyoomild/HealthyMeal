import React, { useState, useRef, useEffect } from "react";
import { View, Text, StyleSheet, PanResponder } from "react-native";

const SLIDER_WIDTH = 300;
const STEPS = [40, 80, 120, 160, 201]; // <200 แสดงเป็น 201
const STEP_COUNT = STEPS.length - 1;
const STEP_WIDTH = SLIDER_WIDTH / STEP_COUNT;

const CustomSlider = ({ value, onChange }) => {
  const [sliderValue, setSliderValue] = useState(value || STEPS[0]);
  const [thumbLeft, setThumbLeft] = useState(0);
  const sliderRef = useRef(null);
  const [sliderLeftOffset, setSliderLeftOffset] = useState(0);

  useEffect(() => {
    sliderRef.current?.measure((fx, fy, width, height, px, py) => {
      setSliderLeftOffset(px);
      const initialValue = value || STEPS[0];
      const stepIndex = STEPS.findIndex((step) => step === initialValue);
      const initialPos = stepIndex * STEP_WIDTH;
      setThumbLeft(initialPos);
    });
  }, []);

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (evt, gestureState) => {
      const touchX = evt.nativeEvent.pageX - sliderLeftOffset;
      const newPosition = Math.max(0, Math.min(touchX, SLIDER_WIDTH));

      // คำนวณตำแหน่งที่เลื่อน
      const stepIndex = Math.round(newPosition / STEP_WIDTH);
      const newValue = STEPS[stepIndex];
      const snappedPosition = stepIndex * STEP_WIDTH;

      setSliderValue(newValue);
      setThumbLeft(snappedPosition);
      onChange && onChange(newValue);
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Price</Text>

      {/* Slider */}
      <View
        ref={sliderRef}
        style={styles.sliderTrack}
        onLayout={() => {}}
      >
        <View
          style={[styles.sliderFill, { width: thumbLeft }]}
        />
        <View
          {...panResponder.panHandlers}
          style={[styles.sliderThumb, { left: thumbLeft - 15 }]}
        ></View>
      </View>

      {/* Step Labels */}
      <View style={styles.stepLabelsContainer}>
        {STEPS.map((step, index) => (
          <Text
            key={index}
            style={[styles.stepLabel, { left: `${(index / STEP_COUNT) * 100}%` }]}
          >
            {step === 201 ? "<200" : step}
          </Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
  },
  header: {
    fontSize: 20,
    fontWeight: "500",
    color: "#FD561F",
    marginBottom: 20,
  },
  sliderTrack: {
    width: SLIDER_WIDTH,
    height: 10,
    backgroundColor: "#ddd",
    borderRadius: 5,
    position: "relative",
    alignSelf: "center",
    justifyContent: "center",
  },
  sliderFill: {
    position: "absolute",
    height: 10,
    backgroundColor: "#FD561F",
    borderRadius: 5,
    left: 0,
    top: 0,
  },
  sliderThumb: {
    position: "absolute",
    width: 20,
    height: 20,
    backgroundColor: "#FD561F",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2,
  },
  stepLabelsContainer: {
    width: SLIDER_WIDTH,
    height: 20,
    marginTop: 10,
    position: "relative",
    alignSelf: "center",
  },
  stepLabel: {
    position: "absolute",
    transform: [{ translateX: -10 }],
    fontSize: 14,
    color: "#666",
    marginTop: 5,
  },
});

export default CustomSlider;
