import { StyleSheet } from 'react-native';
import { AppLoading } from "expo";

const styles = StyleSheet.create({
  container:{
    backgroundColor: 'rgba(59, 89, 152, 100 )',
    },
    slider:{
      height: '30%',
      backgroundColor: 'rgba(32, 42, 78, 1)',         
      borderBottomLeftRadius: 75,
    },
    menuIcon:{
      marginTop: 20,
      marginLeft: 5,
    },
    logo:{
      height: 140,
      width: 200,
      resizeMode: 'contain',
      marginHorizontal: 100,
      marginBottom: 20,
    },
    footer:{
      height: '70%',
    },

    nameContainer:{
      alignItems: 'center', 
      justifyContent: 'center',
      margin: 20,
    },
    name:{
      fontSize: 20,
      color: "white",
      marginVertical: 10,
    },

    swButton:{
      backgroundColor:'white',
      marginHorizontal: 75,
      paddingVertical: 10,
      borderRadius: 10,
      alignItems: 'center', 
      justifyContent: 'center',
    },
    switchButton:{
      padding: 8,
    },
    swText:{
      paddingTop: 20,
      fontSize: 20,
    },

    moreDetails: {
      alignItems: 'center', 
      justifyContent: 'center',
      padding: 10,
    },
    moreDetailsText: {
      color: "white",
      fontSize: 16,
    },

    coinsTitle:{
      textAlign:'right',
      alignItems: 'center', 
      justifyContent: 'center',
    },
    boldText:{
      fontWeight: 'bold',
      color: "white",
      marginTop: 20,
      fontSize: 22,
    },
    coinStatus:{
      flexDirection: 'row',
      textAlign:'right',
      alignItems: 'center', 
      justifyContent: 'center',
      padding: 7,
    },
    coinDescription1:{
      marginBottom: 5,
      marginLeft: 35,
      color: "white",
      fontSize: 16,
    },
    coinDescription:{
      marginBottom: 5,
      marginLeft: 10,
      color: "white",
      fontSize: 16,
    }
});

export default styles;