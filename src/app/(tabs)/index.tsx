import { StyleSheet,Image,Text,View } from 'react-native';
import Colors from '../../constants/Colors';
import EditScreenInfo from '@/src/components/EditScreenInfo';
/* import { } from '@/src/components/Themed'; */
import products from '../../../assets/data/products'
import ProductList from '../../components/ProductList'
export default function MenuScreen() {
  
  
  
  return (
      <View>
        
        <ProductList product1={products[1]} />
      </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius:10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  price: {
    fontSize:18,
    fontWeight:'800'
  },
  image: {
    width:'100%',
    aspectRatio:1,
  }
});
