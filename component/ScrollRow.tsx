import { StyleSheet, Text, View, TouchableOpacity,ScrollView } from "react-native";

function ScrollRow() {
  return (
    <View style={styles.container}>
      <View style={styles.CaseRow}>
        <ScrollView horizontal ={true}>
          <TouchableOpacity>
          <Text style={styles.All}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.optionsNav}>Design</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.optionsNav}>Tecnology</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.optionsNav}>Finance</Text>
        </TouchableOpacity>
        </ScrollView>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:5,
    alignItems: "center",
  },
  CaseRow: {
    margin: 18,
    flexDirection: "row",
  },
  optionsNav: {
    textAlign: "center",
    marginHorizontal: 4,
    fontSize: 20,
    paddingVertical: 5, 
    paddingHorizontal: 20,
    borderWidth: 2,
    borderRadius: 50,
    color: "#296AFA",
    borderColor: "#296AFA",
  },
  All: {
    textAlign: "center",
    marginHorizontal: 6,
    color: "white",
    fontSize: 20,
    paddingVertical: 7,
    paddingHorizontal: 20,
    borderRadius: 50,
    backgroundColor: "#296AFA",
  },
});
export default ScrollRow;