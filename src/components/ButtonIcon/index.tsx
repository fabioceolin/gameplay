import React from "react";
import { RectButton, RectButtonProperties } from "react-native-gesture-handler";
import { View, Text, Image } from "react-native";

import DiscordImg from "../../assets/discord.png";
import { styles } from "./styles";

type ButtonIconProps = RectButtonProperties & {
  title: string;
};

export function ButtonIcon({ title, ...rest }: ButtonIconProps) {
  return (
    <RectButton style={styles.container} {...rest}>
      <View style={styles.iconWrapper}>
        <Image source={DiscordImg} style={styles.icon} />
      </View>
      <Text style={styles.title}>{title}</Text>
    </RectButton>
  );
}
