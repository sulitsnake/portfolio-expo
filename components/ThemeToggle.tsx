import React from "react";
import { Switch, View, Text } from "react-native";

interface ThemeToggleProps {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 10 }}>
      <Text style={{ marginRight: 10 }}>Dark Mode</Text>
      <Switch value={isDarkMode} onValueChange={() => setIsDarkMode(!isDarkMode)} />
    </View>
  );
};

export default ThemeToggle;