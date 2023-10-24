import {
    border
} from "native-base/lib/typescript/theme/styled-system";
import {
    StyleSheet
} from "react-native";
const {
    PADDING
} = require("../../outils/constantes");

const CardStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center', // Centrer verticalement
        alignItems: 'center', // Centrer horizontalement
    },
    card: {
        flex: 1,
    //    position: 'absolute',
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: PADDING.horizontal,
        // marginRight : 10,
        // position: "center",
        marginLeft: 40,
        borderRadius:30,
        width: 300,
        backgroundColor : 'white',
        paddingVertical: PADDING.vertical,
        //backgroundColor : '#F77278'   ,
         opacity : 0.95,
    },
    input2: {
        marginTop: 10,
        marginBottom: 10,
        width: 240,
        height: 40,
      //  alignItems : 'center',
      //  position: 'center',
        borderWidth: 1.5, // Épaisseur de la bordure
        borderColor: '#DCDCDC', 
          //borderColor: isFocused ? 'blue' : 'gray', 
        borderRadius : 100     ,
        backgroundColor : 'white',
      //  paddingHorizontal: 10,
       // marginVertical: 10

    },input3: {
      marginLeft: 30,
      
   //  marginRight:10,
      width:100,
      height: 40,
      alignItems : 'center',
    //  position: 'center',
      borderWidth: 1.5, // Épaisseur de la bordure
      borderColor: '#DCDCDC', 
        //borderColor: isFocused ? 'blue' : 'gray', 
      borderRadius : 100     ,
      backgroundColor : 'white',
      paddingHorizontal: 10,
    //  marginVertical: 10
  },
    input: {
        marginTop: 10,
        marginBottom: 10,
        width: 240,
        height: 40,
        alignItems : 'center',
      //  position: 'center',
        borderWidth: 1.5, // Épaisseur de la bordure
        borderColor: '#DCDCDC', 
          //borderColor: isFocused ? 'blue' : 'gray', 
        borderRadius : 100     ,
        backgroundColor : 'white',
        paddingHorizontal: 10,
        marginVertical: 10
    },btn : {
        marginTop: 10,
        marginBottom: 10,
        width: 240,
        height: 40,
        alignItems : 'center',
      //  position: 'center',
        borderWidth: 1, // Épaisseur de la bordure
        borderColor: 'grey', 
        borderRadius : 100     ,
        paddingHorizontal: 10,
        marginVertical: 10,
        backgroundColor : 'black',
        color: 'black',
        fontFamily :'poppins-bold'

    },btn3 : {
      marginTop: 10,
      marginBottom: 10,
      width: 120,
      height: 40,
      alignItems : 'center',
    //  position: 'center',
      borderWidth: 1, // Épaisseur de la bordure
      borderColor: 'grey', 
      borderRadius : 100     ,
      paddingHorizontal: 10,
      marginVertical: 10,
      backgroundColor : 'black',
      color: 'black',
      fontFamily :'poppins-bold'

  },btn2 : {    
        marginTop: 10,
        marginBottom: 10,
        width: 120,
        height: 40,
       alignItems : 'center',
      //  position: 'center',
        borderWidth: 1.5, // Épaisseur de la bordure
        borderColor: 'white', 
        borderRadius : 10     ,
        paddingHorizontal: 10,
        marginVertical: 10,
        backgroundColor : '#e3e3e3',
        color: 'black',
        fontFamily :'poppins-bold'    
      },     
        dropdown: {
          height: 42,
          marginTop: 10,
          borderColor: 'grey',
          borderWidth: 0.5,
          borderRadius: 50,
          paddingHorizontal: 8,
          marginBottom: 10,
        },
        icon: {
          marginRight: 5,
        },
        label: {
          position: 'absolute',
          backgroundColor: 'white',
          left: 22,
          top: 8,
          zIndex: 999,
          paddingHorizontal: 8,
          fontSize: 14,
        },
        placeholderStyle: {
          fontSize: 16,
          color:'black'
        },
        selectedTextStyle: {
          fontSize: 16,
          color:'black'
        },
        iconStyle: {
          width: 20,
          height: 20,
        },
        inputSearchStyle: {
          height: 40,
          fontSize: 16,
        }
});

export default CardStyle