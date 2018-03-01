import React from "react";
import { TextInput } from "client/text-input";
import { View, TouchableOpacity, Text } from "react-native";
import { theme } from "client/theme";
import { Layout } from "client/layout";
import { Header } from "client/header";

export class App extends React.Component {
  render() {
    return (
      <Layout>
        <Header />
        <Text>Hello</Text>
      </Layout>
    );
  }

  renderTopPane() {
    return (
      <View
        style={{
          width: 300,
          alignSelf: "center"
        }}
      >
        <TextInput
          keyboardType="email-address"
          placeholder="Email"
          iconName="email-open"
          returnKeyType="next"
          errors={["Required"]}
        />
        <TextInput
          placeholder="Password"
          iconName="lock"
          returnKeyType="go"
          style={{ marginTop: 10 }}
        />
      </View>
    );
  }

  renderBottomPane() {
    return (
      <View>
        <TouchableOpacity
          onPress={() => 0}
          style={{
            backgroundColor: theme.PRIMARY,
            elevation: 1,
            shadowColor: "#444",
            width: 200,
            alignSelf: "center",
            shadowOpacity: 0.3,
            marginTop: 10,
            flexDirection: "row",
            borderTopColor: "rgba(255,255,255,.3)",
            borderTopWidth: 1,
            shadowRadius: 4,
            marginBottom: 5,
            shadowOffset: { width: 0, height: 2 },
            borderRadius: 30
          }}
        >
          <Text
            style={{
              color: theme.PRIMARY_TEXT,
              lineHeight: 54,
              fontSize: 18,
              fontWeight: "900",
              width: "100%",
              textAlign: "center"
            }}
          >
            LOGIN
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => 0}
          style={{
            marginTop: 5,
            width: 200,
            alignSelf: "center",
            flexDirection: "row"
          }}
        >
          <Text
            style={{
              color: theme.SECONDARY_TEXT,
              fontSize: 18,
              lineHeight: 40,
              width: "100%",
              textAlign: "center"
            }}
          >
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
