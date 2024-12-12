import { Text, View } from "react-native";
import { IconProps } from "@tabler/icons-react-native";
import { colors } from "@/src/styles/theme";
import { styles } from "./styles";

export interface ExtendedIconProps extends IconProps {
  color: string;
}

type Props = {
  title: string;
  description: string;
  icon: React.ComponentType<ExtendedIconProps>;
};

export function Step({ title, description, icon: Icon }: Props) {
  return (
    <View style={styles.container}>
      {Icon && <Icon size={32} color={colors.red.base} />}

      <View style={styles.details}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
}
