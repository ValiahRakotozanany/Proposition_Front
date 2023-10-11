import { StyleSheet } from "react-native";
const { PADDING } = require("../../outils/constantes");

const StyleFeed = StyleSheet.create({
    header : {
flexDirection : 'row' ,
        alignItems : 'center',
       // justifyContent : 'space-between',
       // paddingHorizontal : PADDING.horizontal,
        //paddingVertical : PADDING.vertical , 
      //  backgroundColor : '#F77278'   ,
        borderBottomWidth: 1,
        borderBottomColor: '#EAEAEA',    
        shadowColor: '#000',              
        height:1000,
        shadowOpacity: 50,
        shadowRadius: 50,
        elevation: 10,               
    }, header1 :{
        flexDirection : 'row' ,
        alignItems : 'center',
        marginTop :10,
        justifyContent : 'space-between',
        paddingHorizontal : PADDING.horizontal,
        paddingVertical : PADDING.vertical , 
        backgroundColor : '#ffff'   ,
        borderBottomWidth: 1,
        borderBottomColor: '#EAEAEA',
        shadowColor: '#000',      
    },
    userImg : {
        width : 40,
        height : 40,
        borderRadius : 50/2 ,
    },
    userName : {
        fontSize :16,
        fontFamily : 'poppins-bold',
        fontWeight : 'bold',
        letterSpacing: 1,     
        color:'white',
           
    },
    scrollableList :{
        paddingHorizontal : PADDING.horizontal ,
        paddingVertical : PADDING.vertical   
    },
    scrollableListitem  : {
        flexDirection :'column',
        paddingHorizontal : 15,
        paddingVertical: 15,
        marginRight : 15,
        borderRadius : 5,
        backgroundColor : 'white' ,
        marginBottom : 10
    }

});
export default StyleFeed
