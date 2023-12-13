import { LinearGradient } from "expo-linear-gradient";
import { useEffect } from "react";
import React from "react";
import * as WebBrowser from "expo-web-browser";
import { View, StyleSheet, Text, SafeAreaView, Pressable } from "react-native";
import { Entypo, MaterialIcons, AntDesign } from "@expo/vector-icons";
import { makeRedirectUri, useAuthRequest } from "expo-auth-session";
const LoginScreen = () => {
  WebBrowser.maybeCompleteAuthSession();

  const discovery = {
    authorizationEndpoint: "https://accounts.spotify.com/authorize",
    tokenEndpoint: "https://accounts.spotify.com/api/token",
  };

  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: "e4aa200f23cc4831adc492dc91cbf6dd", // Replace with your actual Spotify client ID
      scopes: [
        "user-read-email",
        "user-library-read",
        "user-read-recently-played",
        "user-top-read",
        "playlist-read-private",
        "playlist-read-collaborative",
        "playlist-modify-public",
      ],
      usePKCE: false,
      redirectUri: makeRedirectUri({
        scheme: "exp",
        path: "//192.168.1.15:8081/--/spotify-auth-callback",
      }),
    },
    discovery
  );

  useEffect(() => {
    if (response?.type === "success") {
      const { code } = response.params;
      // Handle the code as needed
    }
  }, [response]);

  return (
    <LinearGradient colors={["#040306", "#131624"]} style={{ flex: 1 }}>
      <SafeAreaView>
        <View style={{ height: 80 }} />
        <Entypo
          name="spotify"
          size={80}
          color="white"
          style={{ textAlign: "center" }}
        />
        <Text
          style={{
            textAlign: "center",
            color: "white",
            fontSize: 40,
            fontWeight: "bold",
            marginTop: 40,
          }}
        >
          Millions of Songs Free on Spotify!
        </Text>
        <View style={{ height: 80 }} />
        <Pressable
          onPress={() => {
            promptAsync();
          }}
          style={{
            backgroundColor: "#1DB954",
            padding: 10,
            marginLeft: "auto",
            marginRight: "auto",
            width: 300,
            borderRadius: 25,
            alignItems: "center",
            justifyContent: "center",
            marginVertical: 10,
          }}
        >
          <Text style={{ fontWeight: 500 }}>Sign in with Spotify</Text>
        </Pressable>
        <Pressable
          style={{
            backgroundColor: "#131624",
            padding: 10,
            marginLeft: "auto",
            marginRight: "auto",
            width: 300,
            borderRadius: 25,
            justifyContent: "center",
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 10,
            borderWidth: 0.8,
            borderColor: "white",
          }}
        >
          <MaterialIcons name="phone-android" size={24} color="white" />
          <Text
            style={{
              color: "white",
              fontWeight: 500,
              textAlign: "center",
              flex: 1,
            }}
          >
            Continue with phone number
          </Text>
        </Pressable>
        <Pressable
          style={{
            backgroundColor: "#131624",
            padding: 10,
            marginLeft: "auto",
            marginRight: "auto",
            width: 300,
            borderRadius: 25,
            justifyContent: "center",
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 10,
            borderWidth: 0.8,
            borderColor: "white",
          }}
        >
          <AntDesign name="google" size={24} color="#B10000" />
          <Text
            style={{
              color: "white",
              fontWeight: 500,
              textAlign: "center",
              flex: 1,
            }}
          >
            Continue with Google
          </Text>
        </Pressable>
        <Pressable
          style={{
            backgroundColor: "#131624",
            padding: 10,
            marginLeft: "auto",
            marginRight: "auto",
            width: 300,
            borderRadius: 25,
            justifyContent: "center",
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 10,
            borderWidth: 0.8,
            borderColor: "white",
          }}
        >
          <AntDesign name="facebook-square" size={24} color="#3A5794" />
          <Text
            style={{
              color: "white",
              fontWeight: 500,
              textAlign: "center",
              flex: 1,
            }}
          >
            Sign in with Facebook
          </Text>
        </Pressable>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({});

export default LoginScreen;
