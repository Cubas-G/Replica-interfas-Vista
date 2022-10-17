import { StyleSheet, TextInput, Text, View, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import ScrollRow from "./ScrollRow";
function Nav() {
  return (
    <View>
      <TextInput
        style={styles.imput}
        placeholder="Search for a job or Conpany"
      />
      <View>
        <Image
          style={styles.baner}
          source={{
            uri: "https://talently.tech/blog/wp-content/uploads/2021/11/Frame-57.png",
          }}
        />

        <Text style={styles.Recom}>Recomendations</Text>

        {/*2DA PARTE*/}

        <View style={styles.container}>
          <View style={styles.contenedorImg}>
            <Image
              style={styles.img}
              source={{
                uri: "data:image/png;base64,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",
              }}
            />
          </View>
          <View style={styles.subcontainer}>
            <View></View>
            <Text style={styles.title}>UI/UX Desiner</Text>
            <Text style={styles.subTitle}>Google LLC</Text>
          </View>
          <View style={styles.options}>
            <Ionicons name="bookmark-outline" style={styles.icon1} />

            <View style={styles.Container2}>
              <Text style={styles.secondTitle}>California, United States</Text>
              <Text style={styles.money}>$10,000 - $25,000 /month </Text>

              <View style={styles.btn}>
                <Text style={styles.button}>Full Time</Text>
                <Text style={styles.button}>Osite</Text>
              </View>
            </View>
          </View>
        </View>

        {/*1ERA PARTE SIGUIENTE*/}

      </View>
      <View style={styles.nav}>
        <AntDesign name="arrowleft" style={styles.icon} />
        <Text style={styles.text}>Recent Jobs</Text>
        <View style={styles.options}>
          <AntDesign name="search1" style={styles.icon1} />
        </View>
      </View>
      <ScrollRow />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 10,
    borderBottomWidth: 1,
    borderColor: "#EEEEEE",
  },

  contenedorImg: {
    margin: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#EEEEEE",
    height: 70,
    width: 70,
  },

  img: {
    margin: 10,
    width: 40,
    height: 40,
  },

  subcontainer: {
    margin: 10,
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

  Recom: {
    fontSize: 22,
    fontWeight: "bold",
    margin: 20,
  },
  baner: {
    height: 150,
    width: 300,
    justifyContent: "center",
    margin: "auto",
    borderRadius: 30,
  },

  imput: {
    height: 50,
    width: "98%",
    margin: 10,
    backgroundColor: "#90A4AE",
    borderRadius: 10,
    textAlignleft: 20,
    fontSize: 20,
    color: "#4B6479",
  },

  nav: {
    marginTop: 55,
    flexDirection: "row",
  },
  icon: {
    marginLeft: 12,
    fontSize: 25,
    padding: 4,
  },

  text: {
    fontWeight: "bold",
    marginLeft: 20,
    fontSize: 30,
    padding: 0,
  },

  Container2: {
    marginTop: 50,
    marginLeft: -270,
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
export default Nav;
