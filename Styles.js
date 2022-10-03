import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      marginTop: 50,
      marginLeft: 10,
    },
    title: {
      textAlign: 'center',
      width:'100%',
      height: 80,
      fontSize: 40,
      color: "#6495ed",
      fontWeight: "bold"
    },
    subtitle: {
      marginRight: 10,
      fontWeight: "bold",
      fontSize: 16
      
    },
    textfield: {
      fontSize: 16
    },
    resultContainer: {
      marginBottom: 50,
      alignItems: "center"
    },
    red: {
      color: "red",
      fontSize: 32,
    },
    yellow: {
      color: "yellow",
      fontSize: 32,
    },
    green: {
      color: "green",
      fontSize: 32,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        width: '100%',
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 10,
        marginBottom: 30,
    },
   
    circle: {
        height: 28,
        width: 28,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#000',
        alignItems: "center",
        justifyContent: "center"
    },
    checkedCircle: {
        width: 15,
        height: 15,
        borderRadius: 7,
        backgroundColor: '#000'
    }
  })