import React from "react";
import { LinearGradient } from "expo-linear-gradient";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

type BackgroundProps = {
  children: React.ReactNode;
};

export function Background({ children }: BackgroundProps) {
  const { secondary80, secondary100 } = theme.colors;
  return (
    <LinearGradient
      style={styles.container}
      colors={[secondary80, secondary100]}
    >
      {children}
    </LinearGradient>
  );
}
