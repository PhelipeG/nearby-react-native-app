import { colors, fonts } from "@/src/styles/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  text: {
    color: colors.gray[500],
    fontSize: 14,
    fontFamily: fonts.regular,
    lineHeight: 22.4,
    flex: 1,
  },
});
