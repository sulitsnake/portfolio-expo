import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({

    Siteheader:{
      fontSize:22,
      fontWeight:"bold",
      marginTop:15,
      alignSelf:"center",

    },

    Profilepic:{
    width:100,
    height: 100,
    borderRadius:50,
    overflow:"hidden",
    marginTop:25,
    marginBottom:20,
    alignSelf:"center",
      },

    projectItem: {
        backgroundColor: "#f5f5f5",
        padding: 15,
        marginVertical: 8,
        borderRadius: 10,
         textAlign: "center"
      },
      projectTitle: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign:"center",
      },
      projectDescription: {
        fontSize: 14,
        color: "gray",
        textAlign:"center",
      },
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
  },

  name: {
    fontSize: 22,
    fontWeight: "bold",
     textAlign: "center"
  },
  bio: {
    fontSize: 16,
    color: "gray",
     textAlign: "center"
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
     textAlign: "center"
  },
  text: {
    fontSize: 16,
     textAlign: "center"
  },
});