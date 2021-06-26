import React from "react";
import { ScrollView } from "react-native";

import { styles } from "./styles";
import { Category } from "../Category";
import { categories } from "../../utils/categories";

type CategorySelectProps = {
  categorySelected: string;
  setCategory: (categoryId: string) => void;
};

export function CategorySelect({
  categorySelected,
  setCategory,
}: CategorySelectProps) {
  return (
    <ScrollView
      horizontal
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 40 }}
    >
      {categories.map((category) => {
        return (
          <Category
            key={category.id}
            title={category.title}
            icon={category.icon}
            checked={category.id === categorySelected}
            onPress={() => setCategory(category.id)}
          />
        );
      })}
    </ScrollView>
  );
}
