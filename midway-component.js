import React from 'react';
import { StyleSheet, TouchableOpacity, Dimensions } from "react-native"
import MidwayText from './midway-text';
// eslint-disable-next-line no-unused-vars
import { primary, secondary } from "./types/button-types"

const MidwayButton = props => {
  const { textStyle, ...buttonStyle } = props.type || primary;

  return (
    <TouchableOpacity
      style={[
        styles.button,
        buttonStyle,
        props.style,
        {
          borderRadius: 20,
          width: Dimensions.getWidth() - 296
        }
      ]}
    >
      <MidwayText style={textStyle}>{props.children}</MidwayText>
    </TouchableOpacity>
  );
};

// Estilos do componente button e container
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    borderRadius: 20,
    height: 40,
    justifyContent: 'center',
    textAlignVertical: 'center',
    margin: -5
  },
  container: {
    margin: 15
  }
});

export default MidwayButton
