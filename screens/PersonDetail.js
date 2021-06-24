import React,{useEffect} from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Linking,
} from "react-native";
import Header from "../components/Header";
import { globalStyles } from "../styles/globalStyle";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";

const PersonDetail = ({ navigation }) => {
  useEffect(() => {
    
  }, [])
  return (
    <>
      <Header title="Person Detail" navigation={navigation} />

      <View style={styles.top}>
        <ImageBackground
          source={{ uri: "https://academiacollege.edu.np/img/landing.jpg" }}
          style={styles.cover}
        >
          <Image
            source={{
              uri: "https://i.pinimg.com/originals/fe/17/83/fe178353c9de5f85fc9f798bc99f4b19.png",
            }}
            style={styles.image}
          />
        </ImageBackground>
      </View>
      <View style={styles.bg}>
        <Text style={styles.name}>Naruto Uzumaki</Text>
        <ScrollView>
          <Animatable.View animation="fadeInUp">
            <View
              style={{
                marginTop: 40,
                marginBottom: 10,
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <TouchableOpacity style={styles.msgbtn}>
                <Text style={{ color: "#555", fontSize: 16 }}>Message</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.msgbtn}>
                <AntDesign name="home" size={22} color="black" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.msgbtn}>
                <AntDesign name="user" size={22} color="black" />
              </TouchableOpacity>
            </View>
            <View style={{ padding: 20 }}>
              <TouchableOpacity activeOpacity={0.6} style={styles.msgbtn}>
                <Text style={{ color: "#555", fontSize: 16 }}>
                  See 3rd Semester Syllabus
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.8}
                style={{ ...styles.msgbtn, backgroundColor: "#757BBD" }}
              >
                <Text style={{ color: "white", fontSize: 16 }}>
                  See 3rd Semester Course
                </Text>
              </TouchableOpacity>
            </View>
          </Animatable.View>
          <Animatable.View animation="bounceIn" delay={200}>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Text
                style={{
                  ...globalStyles.boldText,
                  color: "#444",
                  fontSize: 24,
                }}
              >
                Social Links
              </Text>
              <View
                style={{ height: 3, width: "65%", backgroundColor: "#845cb8" }}
              ></View>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                marginTop: 40,
              }}
            >
              <AntDesign
                //dummy link for now
                onPress={() => Linking.openURL("https://facebook.com")}
                name="facebook-square"
                size={35}
                color="#655bb5"
              />
              <AntDesign
                onPress={() => Linking.openURL("https://linkedin.com")}
                name="linkedin-square"
                size={35}
                color="black"
              />
              <MaterialCommunityIcons
                onPress={() => Linking.openURL("https://gmail.com")}
                name="gmail"
                size={35}
                color="#f44"
              />
            </View>
          </Animatable.View>
        </ScrollView>
      </View>
    </>
  );
};

export default PersonDetail;
const styles = StyleSheet.create({
  bg: {
    width: "100%",
    height: "100%",
    flex: 1,
    padding: 20,
  },
  top: {
    // backgroundColor: "#757BBD",
    borderBottomRightRadius: 20,
    height: 200,
    borderBottomLeftRadius: 20,
    position: "relative",
    zIndex: 2,
  },

  image: {
    height: 100,
    width: 100,
    borderRadius: 50,
    resizeMode: "cover",
    position: "absolute",
    top: 150,
    left: 20,
    zIndex: 2,
    borderWidth: 4,
    borderColor: "#00000078",
  },
  name: {
    position: "absolute",
    fontSize: 22,
    color: "#222",
    fontWeight: "900",
    top: 10,
    left: 135,
  },
  cover: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  msgbtn: {
    borderColor: "#999",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 3,
    height: 40,
    padding: 10,
    marginTop: 5,
  },
});
