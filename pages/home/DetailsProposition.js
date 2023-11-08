import { View, Text, StyleSheet,FlatList } from 'react-native'
import React from 'react'
import StyleFeed from '../tabs/style'
import { FakeData } from '../../data/FakeData'
import {  ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { ActivityIndicator, Button } from 'react-native-paper'
import CardStyle from '../Style/CardStyle'
import LinearGradient from 'react-native-linear-gradient';
import { useRoute } from '@react-navigation/native';
import Bouton from './Bouton'

const DetailsProposition = ({navigation}) => {

  const route = useRoute();  
  const {token, details} = route.params;
  console.log(details+" detailss")

  const [page, setPage] = React.useState(0);
 const [totalPages, setTotalPages] = React.useState(0);
const [isLoading, setIsLoading] = React.useState(false);
const [currentPage, setCurrentPage] = React.useState(1);
const loadMoreItem = () => {
  setCurrentPage(currentPage + 1);
};



const renderLoader = () => {
  return (
    isLoading ?
      <View style={styles.loaderStyle}>
        <ActivityIndicator size="large" color="#aaa" />
      </View> : null
  );
};



const fetchData = async (pageNumber) => {
  try {
    const response = await fetch(`API_URL?page=${pageNumber}`);
    const data = await response.json();
    setTotalPages(data.totalPages);
    // Append the new data to the existing data array
    setDetails((prevDetails) => [...prevDetails, ...data.details]);
    setIsLoading(true);
    // Fetch data for the given page number
    // Append the fetched data to the existing details array
    setIsLoading(false);
  } catch (error) {
    console.error(error);
  }
};
React.useEffect(() => {  
  //fetchData(page);
}, [page]);



    const handlePress = () => {
        console.log('Bouton cliqué !');
      };
      return (
        <View  style={{}}>
        {/* <Checkbox
          status={checked ? 'checked' : 'unchecked'}
          onPress={() => {
            setChecked(!checked);
          }}//{propp.valeurenfant * propp.unite} {propp.unite}
        /> */}
    <Bouton title='retour' titre='Recettes'  onPress={() => navigation.navigate('Proposition',{token: token})} />
   

    <FlatList
  data={details}
  //keyExtractor={(item, index) => index.toString()}
  ListFooterComponent={renderLoader}
  onEndReached={() => setPage(prevPage => prevPage + 1)}
  keyExtractor={(item, index) => item.toString() + index}
  onEndReachedThreshold={0.5}
  renderItem={({ item }) => (
    <View style={styles.itemWrapperStyle}>
      <ScrollView style={{}}>
        <View>
          <View style={{ backgroundColor: '#c3f4ff', borderBottomRightRadius: 15, borderBottomLeftRadius: 15 }}>
            <Text style={{ fontSize: 3 }}> </Text>
            <Text>{item.val}</Text>
            <Text style={{ color: 'black', marginTop: 10, fontSize: 16, fontWeight: 'bold', marginBottom: 5, letterSpacing: 0, backgroundColor: '#c3f4ff' }}> {item.nomplats}
              -  {item.totalprix} Ar </Text>
            <Text style={{ fontSize: 5 }}> </Text>
          </View>
          <FlatList
            ListFooterComponent={renderLoader}
            onEndReached={() => setPage(prevPage => prevPage + 1)}
            onEndReachedThreshold={0}
            data={item.ingredients}
            keyExtractor={(propp, ind) => ind.toString()}
            renderItem={({ item: propp }) => (
              <View>
                <Text style={{ color: 'black', fontSize: 12, fontWeight: '', letterSpacing: 1 }}>{propp.ingredient} - {propp.valeurenfant} {propp.unite} x ({item.nbr}) =
                  {Number.isInteger(parseInt(item.nbr, 10)) && Number.isInteger(parseInt(propp.valeurenfant, 10)) ? parseInt(item.nbr, 10) * parseInt(propp.valeurenfant, 10) : 0}
                  {propp.unite}
                  -  {parseInt(propp.prixenfant, 10) * parseInt(item.nbr, 10)} Ar
                </Text>
                <Text style={{ color: 'grey', fontSize: 11 }}>{propp.ETATINGREDIENT_LIB}</Text>
                {propp.remarque !== '0' && (
                  <Text>{propp.remarque}</Text>
                )}
                <Text style={{ color: 'grey' }}></Text>
              </View>
            )}
            nestedScrollEnabled={true}
          />
          <Text style={{ color: 'black', fontSize: 15, fontWeight: 'bold', letterSpacing: 2 }}>{}<Text style={{ color: 'grey' }}>   {}</Text>
          </Text>
          <View>
          </View>
        </View>
      </ScrollView>
    </View>
  )}
  nestedScrollEnabled={true}
/>


  <Text style={{ color: 'white', fontSize: 580, marginBottom: 40, fontWeight: 'bold', letterSpacing: 5 }}><Text style={{ color: 'black' }}> </Text></Text>
</View>
      );

}


const styles = StyleSheet.create({
  itemWrapperStyle: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderColor: "#ddd",
    backgroundColor:'white'
  },
  itemImageStyle: {
    width: 50,
    height: 50,
    marginRight: 16,
  },
  contentWrapperStyle: {
    justifyContent: "space-around",
  },
  txtNameStyle: {
    fontSize: 16,
  },
  txtEmailStyle: {
    color: "#777",
  },
  loaderStyle: {
    marginVertical: 16,
    alignItems: "center",
  },
});

export default DetailsProposition