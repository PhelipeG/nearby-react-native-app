import { colors, fonts } from "@/src/styles/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    gap: 16,
  },
  details: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontFamily: fonts.semiBold,
    color: colors.gray[600],
  },
  description: {
    fontSize: 14,
    fontFamily: fonts.regular,
    color: colors.gray[500],
    marginTop: 4,
  },
});
