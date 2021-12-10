import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

export default function EventsScreen({ navigation }) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/white-background.png")}
    >
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.choirLogo}
              source={{
                uri: "https://cdn4.iconfinder.com/data/icons/music-and-entertainment/512/Music_Entertainment_Crowd-512.png",
              }}
            />
          </View>

          <View style={styles.infoContainer}>
            <Text style={styles.title}>VOX </Text>
            <Text style={styles.choirInfo}>
              Location: Chester, St. Mary's Church{" "}
            </Text>
            <Text style={styles.choirInfo}>Established: 1991 </Text>
            <Text style={styles.choirInfo}>Mambers: 35</Text>

            <View style={styles.buttonContainer}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("AllMembers");
                }}
                style={styles.button}
              >
                <Text style={styles.buttonText}>See all members</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.eventsContainer}>
          <Text style={styles.title}>Upcoming events:</Text>
          <ScrollView>
            <TouchableWithoutFeedback
              style={styles.eventCard}
              onPress={() => navigation.navigate("Event")}
            >
              <View style={styles.eventTitle}>
                <View style={styles.iconContainer}>
                  <Image
                    style={styles.icon}
                    source={require("../assets/concertIcon.png")}
                  />
                </View>
                <View style={styles.titleContainer}>
                  <Text style={styles.eventTitleText}>
                    Concert - Winter is Coming
                  </Text>
                </View>
              </View>
              <View style={styles.eventContainer}>
                <Text style={styles.eventBody}>Location: Chester</Text>
                <Text style={styles.eventBody}>Date: 21/12/2021</Text>
                <Text style={styles.eventBody}>Time: 20:00</Text>
              </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback
              style={styles.eventCard}
              onPress={() => navigation.navigate("Event")}
            >
              <View style={styles.eventTitle}>
                <View style={styles.iconContainer}>
                  <Image
                    style={styles.icon}
                    source={require("../assets/choir-icon.jpg")}
                  />
                </View>
                <View style={styles.titleContainer}>
                  <Text style={styles.eventTitleText}>
                    Rehearsal - St.Mary's Church{" "}
                  </Text>
                </View>
              </View>
              <View style={styles.eventContainer}>
                <Text style={styles.eventBody}>Location: Chester</Text>
                <Text style={styles.eventBody}>Date: 21/12/2021</Text>
                <Text style={styles.eventBody}>Time: 20:00</Text>
              </View>
            </TouchableWithoutFeedback>
          </ScrollView>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    paddingTop: 0,
  },
  background: {
    flex: 1,
    alignItems: "center",
  },
  topContainer: {
    marginTop: 10,
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  imageContainer: {
    width: "40%",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  choirLogo: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  infoContainer: {
    width: "60%",
    flexDirection: "column",
  },
  title: {
    fontWeight: "700",
    color: "#BD7D1E",
  },
  choirInfo: {
    color: "black",
    fontSize: 13,
  },
  buttonContainer: {
    flex: 1,
    alignItems: "center",
  },
  button: {
    backgroundColor: "#BC9C22",
    width: "60%",
    padding: 4,
    borderRadius: 50,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "black",
    fontWeight: "700",
    fontSize: 12,
  },

  eventsContainer: {
    flex: 4,
    paddingTop: 5,
  },
  eventCard: {
    marginTop: 10,
    backgroundColor: "#EDE5DA",
    borderRadius: 15,
  },
  eventTitle: {
    height: 35,
    backgroundColor: "#B2DED9",
    flexDirection: "row",
  },
  iconContainer: {
    width: "10%",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    height: 30,
    width: 30,
  },
  titleContainer: {
    width: "90%",
    justifyContent: "center",
    paddingLeft: 5,
  },
  eventTitleText: {
    fontWeight: "700",
    color: "black",
  },

  eventContainer: {
    paddingLeft: 40,
    justifyContent: "flex-start",
  },
  eventBody: {
    color: "black",
    fontSize: 12,
  },
});
