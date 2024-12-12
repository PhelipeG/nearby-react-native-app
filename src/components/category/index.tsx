import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

import { colors } from "@/src/styles/theme";
import { categoriesIcons } from "@/src/utils/categories-icons";
import { styles } from "./styles";

type Props = TouchableOpacityProps & {
  name: string;
  iconId: string;
  isSelected?: boolean;
};

export function Category({ name, iconId, isSelected = false, ...rest }: Props) {
  const Icon = categoriesIcons[iconId];

  return (
    <TouchableOpacity
      style={[styles.container, isSelected && styles.containerSelected]}
      {...rest}
    >
      <Icon size={16} color={colors.gray[isSelected ? 100 : 400]} />
      <Text style={[styles.name, isSelected && styles.nameSelected]}>
        {name}
      </Text>
    </TouchableOpacity>
  );
}
