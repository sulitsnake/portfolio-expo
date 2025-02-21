import React, { useState } from "react";
import { View, Text, FlatList, SafeAreaView } from "react-native";
import { Provider as PaperProvider, MD3DarkTheme, MD3LightTheme } from "react-native-paper";
import ThemeToggle from "./components/ThemeToggle";
import { globalStyles } from "./styles/globalstyles";
import { Image } from "expo-image";
import ProfilePicture from "./assets/cool.gif";

const skills: string[] = ["Development", "C++", "Arts"];
const projects = [
  { id: "1", name: "Portfolio App", description: "This is the project you are viewing now and this was built using React Expo." },
  { id: "2", name: "To-do List Website", description: "A simple To-do List website built in react." },
  { id: "3", name: "Hotel Reservation Website", description: "Also built in react, a simple website used to book hotel rooms." },
];

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const textColor = isDarkMode ? "lightgray" : "black";
  const backgroundColor = isDarkMode ? "#121212" : "#fff";
  const projectBgColor = isDarkMode ? "#333333" : "#f5f5f5";
  const textStyles = { color: textColor };


  return (
    <PaperProvider theme={isDarkMode ? MD3DarkTheme : MD3LightTheme}>
        <View style={[globalStyles.container, { 
          backgroundColor: isDarkMode ? "#121212" : "#fff", 
          justifyContent: "space-between", 
          paddingBottom: 20 }]}>
          
          <View>

          <View style={{paddingTop:30,}}>
            <ThemeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
          </View>


            <Text style={[globalStyles.Siteheader, textStyles]}>PORTFOLIO</Text>
            <Image source={ProfilePicture} style={globalStyles.Profilepic} />
            <Text style={[globalStyles.name, textStyles]}>Josh Yao</Text>
            <Text style={globalStyles.bio}>i'll create it if i find it interesting</Text>

            <Text style={[globalStyles.sectionTitle, textStyles]}>skills i have</Text>
            {skills.map((skill, index) => (
              <Text key={index} style={[globalStyles.text, textStyles]}>• {skill}</Text>
            ))}


            {/* projects */}
            <Text style={[globalStyles.sectionTitle, textStyles]}>Projects</Text>
            <FlatList
              data={projects}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <View style={[globalStyles.projectItem, { 
                  backgroundColor: isDarkMode ? "#333333" : "#f5f5f5" 
                }]}>
                  <Text style={[globalStyles.projectTitle, textStyles]}>{item.name}</Text>
                  <Text style={[globalStyles.projectDescription, textStyles]}>{item.description}</Text>
                </View>
              )}
            />
            
            <Text style={[globalStyles.sectionTitle, textStyles]}>Contact:</Text>
            <Text style={[globalStyles.text, textStyles]}>joshgarethyao@gmail.com</Text>
          </View>

        </View>
    </PaperProvider>
  );
};

export default App;