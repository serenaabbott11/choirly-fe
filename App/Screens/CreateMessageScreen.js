import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, Button, ImageBackground, Image, ScrollView, TouchableOpacity,} from "react-native";
import {
  postMessage,
  getChoirById,
  postNotificationByUsername,
  getUserByUsername,
} from "../utils/api";

import { auth } from "../../firebase";
import { useForm, Controller } from "react-hook-form";

//WE SHOULD PASS THE ID OF THE GROUP
export default function CreateMessageScreen({ route }) {
  const { choirId } = route.params;

  const currentUser = auth.currentUser.displayName;
  const [user, setUser] = useState({});

  // const [title, setTitle] = useState("");
  // const [text, setText] = useState("");
  const [members, setMembers] = useState([]);
  const [choirName, setChoirName] = useState("");
  const [confirmation, setConfirmation] = useState("");


  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      text: "",
    },
  });


  const onSubmit = (data) => {

    const body = {
      choir: choirName,
      title: data.title,
      body: data.text,
      author: currentUser,
    };
    postMessage(body)
      .then((message) => {
        console.log(message, '<<<,message')
        //RETURN TO PREVIUS PAGE
        setConfirmation("Your post has been created");
        members.forEach((member) => {
          console.log(member, '<<<<<<<<<<<<,,member')
          const body = {
            username: member,
            choir: choirName,
            type: "message",
            message: message.body,
            author: currentUser,
          };

          postNotificationByUsername(member, body)
            .then((notification) => {
              console.log(notification);
            })
            .catch((err) => {
              console.log(err.response);
            });
        });
        console.log(message);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getChoirById(choirId)
      .then((choir) => {
        setMembers(choir.members);
        setChoirName(choir.name);

      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    getUserByUsername(currentUser)
      .then((user) => {
        setUser(user);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/white-background.png")}
    >
      <View style={styles.container}>

 {/* //---------------------------------------------------------TOP CONTAINER */}
        <View style={styles.topContainer}>
          <Text style={styles.title}>Create post</Text>
          <TouchableOpacity
          style={styles.postButton}
          title="Post a message"
          onPress={handleSubmit(onSubmit)}
          // onPress={() => handlePostMessage()}
          ><Text style={styles.postButtonText}>Post</Text></TouchableOpacity>
        </View>

{/* //---------------------------------------CONFIRMATION */}
<View style={styles.confirmContainer}>
      {(confirmation) ? 
        <Text style={{ fontSize: 16, fontWeight: '700'}}>{confirmation}</Text> : <></>
      }
    </View>


 {/* //---------------------------------------------------------AVATAR CONTAINER */}

  <View style={styles.avatarContainer}>
    <Image style={styles.avatar} source={{ uri: user.avatar_url}}  alt="Profile Image" />
    <Text style={{ fontWeight: '700'}}>{user.username}</Text>
  </View>




 {/* //---------------------------------------------------------FORM CONTAINER */}
      <View style={styles.formContainer}>

        <View style={styles.titleContainer}>
          <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              placeholder="Add title here"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="title"
          />
          {errors.title && <Text>Title is required</Text>}
        </View>

        <View style={styles.bodyContainer}>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              placeholder="Write a message"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="text"
        />
        {errors.text && <Text>Text is required.</Text>}
        </View>


    </View>


    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
   // CONTAINER AND BACKGROUND
  container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    // padding: 15,
    // borderWidth: 1,
    // borderColor: 'pink',
    width: '100%',
  },
  background: {
    flex: 1,
    alignItems: "center",
  },
  topContainer: {
    // borderWidth: 1,
    // borderColor: 'green',
    flexDirection: "row",
    // flexWrap: "wrap",
    alignItems: "center",
    justifyContent: 'space-between',
    // justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#EBE2D8',
    width: '100%',
    padding: 10,
  },
  postButton: {
    backgroundColor: "#BD7D1E",
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 8,
    alignItems: "center",
    
  },
  title: {
    color: "black",
    fontSize: 16,
    fontWeight: '700',
    marginLeft: 145,
  },
  postButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: 'white'
  },
  avatarContainer: {
    flexDirection: "row",
    backgroundColor: 'white',
    padding: 10,
    alignContent: 'center',
    alignItems: 'center',
    width: '100%',

  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 75,
    marginRight: 15,
  },

  formContainer: {
    backgroundColor: 'white',
    width: '100%',
    padding: 10,

  },
  titleContainer: {
    borderBottomWidth: 1,
    borderColor: '#D4D4D4',
    borderStyle: 'dotted',
  },
  bodyContainer: {
    borderBottomWidth: 1,
    borderColor: '#D4D4D4',
    borderStyle: 'dotted',
    height: 200,
    // flex: 1,
    flexWrap: "wrap",
    overflow: "scroll"
  },
  confirmContainer: {
    alignContent: 'center',
    backgroundColor: 'white',
    width: '100%',
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
