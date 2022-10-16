import { View, Image, Text, StyleSheet, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function Container() {
  return (
    <ScrollView>
      <View style={style.principal}>
        <View style={style.container}>
          <View style={style.contenedorImg}>
            <Image
              style={style.img}
              source={{
                uri: "https://www.paypalobjects.com/webstatic/icon/pp258.png",
              }}
            />
          </View>
          <View style={style.subcontainer}>
            <Text style={style.title}>Sales & Marketing</Text>
            <Text style={style.subTitle}>paypal</Text>
          </View>
          <View style={style.options}>
            <Ionicons name="bookmark-outline" style={style.icon1} />
          </View>
        </View>

        <View style={style.Container2}>
          <Text style={style.secondTitle}>Nueva York, United States</Text>
          <Text style={style.money}>$8,000 - $20,000 /month </Text>

          <View style={style.btn}>
            <Text style={style.button}>Full Time</Text>
            <Text style={style.button}>Remote</Text>
          </View>
        </View>
      </View>

      {/*Campos */}
      <View style={style.principal}>
        <View style={style.container}>
          <View style={style.contenedorImg}>
            <Image
              style={style.img}
              source={{
                uri: "https://graffica.info/wp-content/uploads/2017/08/badgeRGB.png",
              }}
            />
          </View>
          <View style={style.subcontainer}>
            <Text style={style.title}>Writing & Content</Text>
            <Text style={style.subTitle}>Pinterest</Text>
          </View>
          <View style={style.options}>
            <Ionicons name="bookmark" style={style.icon1} />
          </View>
        </View>

        <View style={style.Container2}>
          <Text style={style.secondTitle}>Paris, France</Text>
          <Text style={style.money}>$5,000 - $15,000 /month </Text>

          <View style={style.btn}>
            <Text style={style.button}>Full Time</Text>
            <Text style={style.button}>Remote</Text>
          </View>
        </View>
      </View>
      {/* Campos */}
      <View style={style.principal}>
        <View style={style.container}>
          <View style={style.contenedorImg}>
            <Image
              style={style.img}
              source={{
                uri: "https://assets.stickpng.com/images/580b57fcd9996e24bc43c516.png",
              }}
            />
          </View>
          <View style={style.subcontainer}>
            <Text style={style.title}>Business & Analyst</Text>
            <Text style={style.subTitle}>Apple Inc.</Text>
          </View>
          <View style={style.options}>
            <Ionicons name="bookmark-outline" style={style.icon1} />
          </View>
        </View>

        <View style={style.Container2}>
          <Text style={style.secondTitle}>Chicago, United States</Text>
          <Text style={style.money}>$5,000 - $12,000 /month </Text>

          <View style={style.btn}>
            <Text style={style.button}>Full Time</Text>
            <Text style={style.button}>Remote</Text>
          </View>
        </View>
      </View>
      {/* Campos */}
    </ScrollView>
  );
}
const style = StyleSheet.create({
  principal: {
    margin: 5,
    borderWidth: 1,
    borderRadius: 25,
    borderColor: "#EEEEEE",
  },
  container: {
    margin: 10,
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#EEEEEE",
  },
  subcontainer: {
    margin: 12,
  },
  contenedorImg: {
    margin: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#EEEEEE",
  },
  img: {
    margin: 10,
    width: 40,
    height: 40,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
  },
  subTitle: {
    color: "#616161",
    fontSize: 15,
  },
  options: {
    flex: 1,
    borderRadius: 10,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
  },
  icon1: {
    color: "#286EFD",
    alignSelf: "flex-end",
    textAlign: "right",
    fontSize: 30,
    marginRight: 19,
  },
  Container2: {
    marginLeft: 100,
  },
  secondTitle: {
    color: "#616161",
    fontSize: 16,
    marginBottom: 8,
  },
  money: {
    fontSize: 20,
    color: "#286EFD",
  },
  btn: {
    flexDirection: "row",
  },
  button: {
    color: "#898989",
    margin: 5,
    padding: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#898989",
  },
});
export default Container;
