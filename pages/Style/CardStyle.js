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
        width: 300,
        backgroundColor : 'white',
        paddingVertical: PADDING.vertical,
        //backgroundColor : '#F77278'   ,
         opacity : 0.89,
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
        fontFamily :'poppins-bold',
//       backgroundColor: 'linear-gradient(to bottom, #3498db, #f39c12)', // Définissez vos couleurs de gradient ici        
//         backgroundColor: 'hsla(270, 94%, 25%, 1)',

// backgroundColor: 'linear-gradient(90deg, hsla(270, 94%, 25%, 1) 0%, hsla(158, 94%, 49%, 1) 100%)',

// background: -moz-linear-gradient(90deg, hsla(270, 94%, 25%, 1) 0%, hsla(158, 94%, 49%, 1) 100%);

// background: -webkit-linear-gradient(90deg, hsla(270, 94%, 25%, 1) 0%, hsla(158, 94%, 49%, 1) 100%);

// filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#42047e", endColorstr="#07f49e", GradientType=1 );

    }
});

export default CardStyle