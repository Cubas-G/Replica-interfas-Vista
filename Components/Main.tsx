import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
 
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";

const Main = () => {
  return (
    <View style={styles.container1}>
      <Image
        source={{ uri: "https://picsum.photos/200/200" }}
        style={styles.Image1}
      />

      <View>
      <Text style={styles.text1}>Good Morning</Text>
      <Text style={styles.text2}>Andrew Ainsley</Text>

      <View>
      <FontAwesome name="bell-o" style={styles.icone1} />

      
      
      </View>
      
      
      </View>

      <View> </View>
    </View>
  );
};
export default Main;

const styles = StyleSheet.create({

  icone1: {
  alignSelf:'flex-end',
  textAlign: 'right',
  fontSize:30,
  marginTop:-30,
  marginEnd: -190,
  },
  
  container1: {
    flexDirection: "row",
    backgroundColor: "#ffff",
    height: 150,
    width: "98%",
    margin: 10,
  },

  imput: {
    height: 30,
    width: "100%",
    margin: 'auto',
    backgroundColor: '#90A4AE',
    borderRadius: 10,
  },

  text1: {
    marginTop: 40,
    color: "#506847",
    fontSize: 15, 
  },

  text2: {
    color: "#000000",
    fontWeight: "bold",
    fontSize: 20,
  },

  Image1: {
    height: 80,
    width: 80,
    margin: 20,
    borderRadius: 100,
  },
});
