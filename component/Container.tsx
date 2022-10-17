import { View, Image, Text, StyleSheet, ScrollView } from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function Container() {
  return (
    <ScrollView>
      {/* PRIMER CAMPO  */}

      <View style={style.container0}>
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

      {/*SEGUNDO CAMPO*/}

      <View style={style.container0}>
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

      {/* TERCER CAMPO */}

      <View style={style.container0}>
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

      {/* CUARTO CAMPO*/}

      <View style={style.container0}>
        <View style={style.container}>
          <View style={style.contenedorImg}>
            <Image
              style={style.img}
              source={{
                uri: "https://cdn.icon-icons.com/icons2/836/PNG/512/Spotify_icon-icons.com_66783.png",
              }}
            />
          </View>
          <View style={style.subcontainer}>
            <Text style={style.title}>Quality Assurance</Text>
            <Text style={style.subTitle}>Spotify.</Text>
          </View>
          <View style={style.options}>
            <Ionicons name="bookmark-outline" style={style.icon1} />
          </View>
        </View>

        <View style={style.Container2}>
          <Text style={style.secondTitle}>Camberra, Australia</Text>
          <Text style={style.money}>$12,000 - $25,000 /month </Text>

          <View style={style.btn}>
            <Text style={style.button}>Full Time</Text>
            <Text style={style.button}>Remote</Text>
          </View>
        </View>

        {/*  QUINTO CAMPO */}

        <View style={style.container0}>
          <View style={style.container}>
            <View style={style.contenedorImg}>
              <Image
                style={style.img}
                source={{
                  uri: "https://cdn-icons-png.flaticon.com/512/3670/3670226.png",
                }}
              />
            </View>
            <View style={style.subcontainer}>
              <Text style={style.title}>Community Officer</Text>
              <Text style={style.subTitle}>Reddit Company</Text>
            </View>
            <View style={style.options}>
              <Ionicons name="bookmark" style={style.icon1} />
            </View>
          </View>
        </View>

        <View style={style.footer}>
          <View>
            <Entypo name="home" style={style.icon2} />
          </View>

          <View>
            <MaterialCommunityIcons
              name="bookmark-minus-outline"
              style={style.icon3}
            />
          </View>

          <View>
            <AntDesign name="appstore-o" style={style.icon3} />
          </View>

          <View>
            <AntDesign name="message1" style={style.icon3} />
          </View>

          <View>
            <AntDesign name="user" style={style.icon3} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
const style = StyleSheet.create({
  footer: {
    flexDirection: "row",
    },

  icon2: {
    color: "#1976D2",
    fontSize: 30,
    margin: 20,
  },

  icon3: {
    color: "#000000",
    fontSize: 30,
    margin: 20,
  },

  container0: {
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
