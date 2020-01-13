import React from "react";
import { TouchableOpacity } from "react-native";
import styles from "./styles";
import MidwayText from "./midway-text";
import { primary } from "./types/button-types";

const MidwayButton = props => {
  const { type, style, children } = props;
  const { textStyle, ...buttonStyle } = type || primary;

  return (
    <TouchableOpacity style={[styles.button, buttonStyle, style]}>
      <MidwayText style={textStyle}>{children}</MidwayText>
    </TouchableOpacity>
  );
};

export default MidwayButton;
