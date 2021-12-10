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

export default function MessagesScreen({ navigation }) {
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

        <View style={styles.messagesContainer}>
          <Text style={styles.title}>Messages:</Text>
          <ScrollView>
            <TouchableWithoutFeedback
              style={styles.messageCard}
              onPress={() => navigation.navigate("SingleMessage")}
            >
              <View style={styles.messageTitle}>
                <View style={styles.titleContainer}>
                  <Text style={styles.messageTitleText}>
                    Welcome to all new members
                  </Text>
                  <FontAwesome
                    name="thumbs-up"
                    size={20}
                    color="black"
                    onPress={() => console.log("liked placeholder")}
                  />
                </View>
              </View>
              <View style={styles.messageContainer}>
                <Text style={styles.messageBody}>
                  Quick note to say hello to all new members. Hello Hello Hello
                  Hello Hello.
                </Text>
              </View>
              <View>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("SingleMessage");
                  }}
                >
                  <Text style={styles.buttonText}>See comments (12)</Text>
                </TouchableOpacity>
              </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback
              style={styles.messageCard}
              onPress={() => navigation.navigate("SingleMessage")}
            >
              <View style={styles.messageTitle}>
                <View style={styles.titleContainer}>
                  <Text style={styles.messageTitleText}>
                    Example message title
                  </Text>
                  <FontAwesome
                    name="thumbs-up"
                    size={20}
                    color="black"
                    onPress={() => console.log("liked placeholder")}
                  />
                </View>
              </View>
              <View style={styles.messageContainer}>
                <Text style={styles.messageBody}>
                  Example message in the choir group to replace la la la.
                </Text>
              </View>
              <View>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("SingleMessage");
                  }}
                >
                  <Text style={styles.buttonText}>See comments (3)</Text>
                </TouchableOpacity>
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

  messagesContainer: {
    flex: 4,
    paddingTop: 5,
  },
  messageCard: {
    marginTop: 10,
    backgroundColor: "#EDE5DA",
    borderRadius: 15,
  },
  messageTitle: {
    height: 35,
    backgroundColor: "#B2DED9",
    flexDirection: "row",
  },
  messageTitleText: {
    fontWeight: "700",
    color: "black",
  },
  messageContainer: {
    paddingLeft: 40,
    justifyContent: "flex-start",
  },
  messageBody: {
    color: "black",
    fontSize: 12,
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
});