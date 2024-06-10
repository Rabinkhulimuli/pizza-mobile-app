import {View,Text,Image,StyleSheet} from 'react-native'
import Colors from '../constants/Colors';
import EditScreenInfo from '@/src/components/EditScreenInfo';
const ProductList= ( prop:any ) => {
    const product1=prop.product1
    return (
        <View style={styles.container}>
            
            <Image source= {{uri: product1.image  }} style={styles.image}  />
            <Text style={styles.title} > {product1.name} </Text>
            <Text style={styles.price} > {product1.price} </Text>
            
        </View>
    )
}
export default ProductList
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
  